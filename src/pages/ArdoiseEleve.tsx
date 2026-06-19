import { useEffect, useRef, useState } from "react";
import "./ArdoiseEleve.css";
import { EleveTabs } from "../components/EleveTabs";
import { SubjectIcon } from "../icons/SubjectIcons";
import { exercicesArdoise, matieres } from "../data/mockData";

const CRAIES = [
  { id: "blanche", label: "Craie blanche", varName: "--cotton" },
  { id: "doree", label: "Craie dorée", varName: "--gold" },
  { id: "terracotta", label: "Craie terre cuite", varName: "--terracotta" },
  { id: "verte", label: "Craie verte", varName: "--green" },
];

const EPAISSEURS = [
  { id: "fin", label: "Fin", taille: 2.5, dot: 8 },
  { id: "moyen", label: "Moyen", taille: 5, dot: 13 },
  { id: "epais", label: "Épais", taille: 9, dot: 18 },
];

function cssVar(name: string): string {
  if (typeof window === "undefined") return "#FFFFFF";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#FFFFFF";
}

export function ArdoiseEleve() {
  const [matiereId, setMatiereId] = useState<string | "Toutes">("Toutes");
  const [index, setIndex] = useState(0);
  const [craieId, setCraieId] = useState("blanche");
  const [epaisseurId, setEpaisseurId] = useState("moyen");
  const [gomme, setGomme] = useState(false);
  const [revele, setRevele] = useState(false);
  const [exercicesReussis, setExercicesReussis] = useState(0);
  const [serie, setSerie] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dessineRef = useRef(false);

  const liste = matiereId === "Toutes" ? exercicesArdoise : exercicesArdoise.filter((e) => e.matiereId === matiereId);
  const exercice = liste[index % liste.length] ?? exercicesArdoise[0];
  const matiere = matieres.find((m) => m.id === exercice.matiereId);

  function effacerCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Redimensionne le canvas à sa taille d'affichage et l'efface au changement d'exercice
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    effacerCanvas();
    setRevele(false);
  }, [exercice.id]);

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvas.width,
      y: ((e.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    canvas.setPointerCapture(e.pointerId);
    dessineRef.current = true;
    const ctx = canvas.getContext("2d")!;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!dessineRef.current) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const pos = getPos(e);
    const epaisseur = EPAISSEURS.find((ep) => ep.id === epaisseurId)!.taille * 2;

    if (gomme) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = epaisseur * 2.4;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = epaisseur;
      ctx.strokeStyle = cssVar(CRAIES.find((c) => c.id === craieId)!.varName);
    }
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function handlePointerUp() {
    dessineRef.current = false;
  }

  function passerSuivant() {
    setIndex((i) => (i + 1) % Math.max(liste.length, 1));
  }

  function autoEvaluer(reussi: boolean) {
    if (reussi) {
      setExercicesReussis((n) => n + 1);
      setSerie((s) => s + 1);
    } else {
      setSerie(0);
    }
    passerSuivant();
  }

  return (
    <div>
      <EleveTabs />

      <div className="ardoise-header">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 10 }}>
            Espace élève
          </p>
          <h1 style={{ color: "var(--cotton)", fontSize: "1.7rem" }}>Ardoise intelligente</h1>
          <p style={{ color: "rgba(250,243,229,0.78)", marginTop: 8, maxWidth: 520 }}>
            Écris ta réponse à la craie, puis révèle la correction pour t'auto-évaluer — comme à l'ardoise, en numérique.
          </p>
          <div className="ardoise-mini-stats">
            <span className="ardoise-mini-stat">
              <strong>{exercicesReussis}</strong>exercices réussis aujourd'hui
            </span>
            <span className="ardoise-mini-stat">
              <strong>{serie}</strong>série en cours
            </span>
          </div>
        </div>
      </div>

      <div className="container ardoise-body">
        <div className="ardoise-chip-row">
          <button
            className={`ardoise-chip ${matiereId === "Toutes" ? "active" : ""}`}
            style={matiereId === "Toutes" ? { background: "var(--indigo)" } : undefined}
            onClick={() => {
              setMatiereId("Toutes");
              setIndex(0);
            }}
          >
            Toutes les matières
          </button>
          {matieres.map((m) => (
            <button
              key={m.id}
              className={`ardoise-chip ${matiereId === m.id ? "active" : ""}`}
              style={matiereId === m.id ? { background: m.couleur } : undefined}
              onClick={() => {
                setMatiereId(m.id);
                setIndex(0);
              }}
            >
              {m.nom}
            </button>
          ))}
        </div>

        <div className="ardoise-card">
          <div className="exercice-meta">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <SubjectIcon matiereId={exercice.matiereId} size={28} color={matiere?.couleur} />
              <span className="eyebrow" style={{ color: matiere?.couleur }}>
                {matiere?.nom} · {exercice.niveau}
              </span>
            </div>
            <span style={{ color: "var(--ink-soft)", fontSize: "0.84rem" }}>
              Exercice {(index % liste.length) + 1} / {liste.length}
            </span>
          </div>

          <p className="exercice-enonce">{exercice.enonce}</p>

          <div className="slate-frame">
            <div className="slate-toolbar">
              {CRAIES.map((c) => (
                <button
                  key={c.id}
                  aria-label={c.label}
                  className={`chalk-swatch ${!gomme && craieId === c.id ? "active" : ""}`}
                  style={{ background: `var(${c.varName})` }}
                  onClick={() => {
                    setCraieId(c.id);
                    setGomme(false);
                  }}
                />
              ))}

              <div style={{ width: 1, height: 22, background: "rgba(250,243,229,0.2)" }} />

              {EPAISSEURS.map((ep) => (
                <button
                  key={ep.id}
                  aria-label={ep.label}
                  className={`thickness-dot ${epaisseurId === ep.id ? "active" : ""}`}
                  style={{ width: ep.dot, height: ep.dot }}
                  onClick={() => setEpaisseurId(ep.id)}
                />
              ))}

              <div style={{ width: 1, height: 22, background: "rgba(250,243,229,0.2)" }} />

              <button className={`slate-tool-btn ${gomme ? "active" : ""}`} onClick={() => setGomme((g) => !g)}>
                Gomme
              </button>
              <button className="slate-tool-btn" onClick={effacerCanvas}>
                Tout effacer
              </button>
            </div>

            <canvas
              ref={canvasRef}
              className="slate-canvas"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            />
          </div>

          {!revele ? (
            <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => setRevele(true)}>
                Voir la correction
              </button>
              <button className="btn btn-outline" onClick={passerSuivant}>
                Passer cet exercice
              </button>
            </div>
          ) : (
            <div className="solution-panel">
              <p className="eyebrow" style={{ color: "var(--green)", marginBottom: 8 }}>
                Correction
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>{exercice.solution}</p>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem" }}>{exercice.astuce}</p>

              <p style={{ marginTop: 16, fontSize: "0.88rem", color: "var(--ink-soft)" }}>As-tu trouvé la bonne réponse ?</p>
              <div className="assess-row">
                <button className="btn btn-primary" style={{ background: "var(--green)" }} onClick={() => autoEvaluer(true)}>
                  J'ai réussi
                </button>
                <button className="btn btn-outline" onClick={() => autoEvaluer(false)}>
                  À revoir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
