import { useMemo, useState } from "react";
import "./Catalog.css";
import { cours, matieres, type Niveau } from "../data/mockData";
import { CourseCard } from "../components/CourseCard";

const NIVEAUX: Niveau[] = ["Primaire", "Collège", "Lycée"];

export function Catalog() {
  const [niveau, setNiveau] = useState<Niveau | "Tous">("Tous");
  const [matiereId, setMatiereId] = useState<string | "Tous">("Tous");

  const resultats = useMemo(() => {
    return cours.filter((c) => {
      if (niveau !== "Tous" && c.niveau !== niveau) return false;
      if (matiereId !== "Tous" && c.matiereId !== matiereId) return false;
      return true;
    });
  }, [niveau, matiereId]);

  return (
    <div>
      <div className="catalog-header">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 12 }}>
            Catalogue
          </p>
          <h1 style={{ color: "var(--cotton)", fontSize: "2.1rem" }}>Tous les cours, par niveau et par matière</h1>
          <p style={{ color: "rgba(250,243,229,0.78)", marginTop: 10, maxWidth: 520 }}>
            Choisis un niveau et une matière pour trouver le cours qui correspond à ton programme.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filter-bar">
          <div className="filter-group">
            <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>
              Niveau
            </span>
            <div className="chip-row">
              <Chip active={niveau === "Tous"} color="var(--indigo)" onClick={() => setNiveau("Tous")}>
                Tous
              </Chip>
              {NIVEAUX.map((n) => (
                <Chip key={n} active={niveau === n} color="var(--indigo)" onClick={() => setNiveau(n)}>
                  {n}
                </Chip>
              ))}
            </div>
          </div>

          <div className="filter-group" style={{ flex: 1 }}>
            <span className="eyebrow" style={{ color: "var(--ink-soft)" }}>
              Matière
            </span>
            <div className="chip-row">
              <Chip active={matiereId === "Tous"} color="var(--terracotta)" onClick={() => setMatiereId("Tous")}>
                Toutes
              </Chip>
              {matieres.map((m) => (
                <Chip key={m.id} active={matiereId === m.id} color={m.couleur} onClick={() => setMatiereId(m.id)}>
                  {m.nom}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {resultats.length > 0 ? (
          <div className="catalog-grid">
            {resultats.map((c) => (
              <CourseCard key={c.id} cours={c} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--ink-soft)" }}>
            <p style={{ fontWeight: 700, marginBottom: 6, color: "var(--ink)" }}>Aucun cours pour cette combinaison</p>
            <p>Essaie un autre niveau ou une autre matière.</p>
          </div>
        )}

        <div style={{ height: 56 }} />
      </div>
    </div>
  );
}

function Chip({ active, color, onClick, children }: { active: boolean; color: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button className={`chip ${active ? "active" : ""}`} style={active ? { background: color } : undefined} onClick={onClick}>
      {children}
    </button>
  );
}
