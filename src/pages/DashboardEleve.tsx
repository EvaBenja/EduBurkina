import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "../icons/Avatar";
import { BadgeGlyph, SubjectIcon } from "../icons/SubjectIcons";
import {
  badgesEleve,
  coursEnCoursEleve,
  cours,
  devoirsEleve,
  eleveConnecte,
  matieres,
} from "../data/mockData";

const STATUT_STYLE: Record<string, { bg: string; color: string }> = {
  "à faire": { bg: "var(--cotton-deep)", color: "var(--ink-soft)" },
  rendu: { bg: "rgba(63,125,77,0.14)", color: "var(--green)" },
  "en retard": { bg: "rgba(217,105,45,0.14)", color: "var(--terracotta-deep)" },
};

export function DashboardEleve() {
  const { user } = useAuth();
  const estParent = user?.role === "parent";
  const prenomAffiche = estParent ? eleveConnecte.prenom : user?.prenom ?? eleveConnecte.prenom;

  const coursDetailles = coursEnCoursEleve.map((cec) => ({
    progression: cec.progression,
    cours: cours.find((c) => c.id === cec.coursId)!,
  }));

  return (
    <div>
      <div className="dash-header">
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <Avatar seed={eleveConnecte.avatarSeed} size={72} />
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 6 }}>
              {estParent ? `Suivi de ${eleveConnecte.prenom} ${eleveConnecte.nom}` : `${eleveConnecte.classe} · ${eleveConnecte.ville}`}
            </p>
            <h1 style={{ color: "var(--cotton)", fontSize: "1.9rem" }}>
              {estParent ? `Bonjour ${user?.prenom} 👋` : `Bonjour ${prenomAffiche} 👋`}
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dash-stats-grid">
          <StatCard chiffre={String(coursEnCoursEleve.length)} label="Cours en cours" accent="var(--terracotta)" />
          <StatCard chiffre={String(badgesEleve.filter((b) => b.obtenu).length)} label="Badges obtenus" accent="var(--gold)" />
          <StatCard chiffre={String(eleveConnecte.serieJours)} label="Jours de série" accent="var(--green)" />
          <StatCard chiffre={`${eleveConnecte.scoreMoyen}%`} label="Score moyen" accent="var(--indigo)" />
        </div>

        <div className="dash-body-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <Panel titre="Mes cours en cours">
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {coursDetailles.map(({ cours: c, progression }) => {
                  const matiere = matieres.find((m) => m.id === c.matiereId);
                  return (
                    <div key={c.id}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <SubjectIcon matiereId={c.matiereId} size={26} color={matiere?.couleur} />
                          <div>
                            <p style={{ fontWeight: 700, fontSize: "0.94rem" }}>{c.titre}</p>
                            <p style={{ color: "var(--ink-soft)", fontSize: "0.8rem" }}>{matiere?.nom}</p>
                          </div>
                        </div>
                        <span style={{ fontWeight: 700, color: matiere?.couleur, fontSize: "0.88rem" }}>{progression}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progression}%`, background: matiere?.couleur }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>

            <Panel titre="Devoirs à venir">
              <div>
                {devoirsEleve.map((d) => {
                  const matiere = matieres.find((m) => m.id === d.matiereId);
                  const s = STATUT_STYLE[d.statut];
                  return (
                    <div key={d.id} className="devoir-row">
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <SubjectIcon matiereId={d.matiereId} size={24} color={matiere?.couleur} />
                        <div>
                          <p style={{ fontWeight: 600, fontSize: "0.92rem" }}>{d.titre}</p>
                          <p style={{ color: "var(--ink-soft)", fontSize: "0.8rem" }}>Pour le {d.dateLimite}</p>
                        </div>
                      </div>
                      <span style={{ background: s.bg, color: s.color, fontSize: "0.78rem", fontWeight: 700, padding: "5px 11px", borderRadius: 100, whiteSpace: "nowrap" }}>
                        {d.statut}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <Panel titre="Mes badges">
              <div className="badge-grid">
                {badgesEleve.map((b) => (
                  <div
                    key={b.id}
                    className="badge-tile"
                    style={{
                      background: b.obtenu ? "var(--cotton-deep)" : "transparent",
                      border: b.obtenu ? "none" : "1.5px dashed var(--cotton-deep)",
                      opacity: b.obtenu ? 1 : 0.55,
                    }}
                  >
                    <div style={{ color: b.obtenu ? "var(--terracotta)" : "var(--ink-soft)" }}>
                      <BadgeGlyph icone={b.icone} size={26} />
                    </div>
                    <p style={{ fontWeight: 700, fontSize: "0.82rem" }}>{b.nom}</p>
                    <p style={{ color: "var(--ink-soft)", fontSize: "0.74rem" }}>{b.description}</p>
                  </div>
                ))}
              </div>
            </Panel>

            <div style={{ background: "var(--indigo)", borderRadius: "var(--radius-md)", padding: 22 }}>
              <p style={{ color: "var(--cotton)", fontWeight: 700, marginBottom: 8 }}>Continue ta progression</p>
              <p style={{ color: "rgba(250,243,229,0.78)", fontSize: "0.88rem", marginBottom: 16 }}>
                Découvre de nouveaux cours adaptés à ton niveau.
              </p>
              <Link to="/cours" className="btn btn-light" style={{ width: "100%" }}>
                Voir le catalogue
              </Link>
            </div>
          </div>
        </div>

        <div style={{ height: 56 }} />
      </div>
    </div>
  );
}

function StatCard({ chiffre, label, accent }: { chiffre: string; label: string; accent: string }) {
  return (
    <div className="stat-card">
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.7rem", color: accent }}>{chiffre}</p>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.85rem", marginTop: 2 }}>{label}</p>
    </div>
  );
}

function Panel({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--white)", borderRadius: "var(--radius-md)", padding: 24, boxShadow: "var(--shadow-card)" }}>
      <h3 style={{ fontSize: "1.08rem", marginBottom: 18 }}>{titre}</h3>
      {children}
    </div>
  );
}
