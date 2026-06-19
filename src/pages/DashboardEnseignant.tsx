import { useState } from "react";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "../icons/Avatar";
import { MortarboardIcon, UsersIcon, BookStackIcon } from "../icons/Illustrations";
import { classesEnseignant, devoirsACorrigerEnseignant, enseignantConnecte, matieres } from "../data/mockData";

export function DashboardEnseignant() {
  const { user } = useAuth();
  const [toast, setToast] = useState<string | null>(null);
  const matiere = matieres.find((m) => m.id === enseignantConnecte.matiereId);
  const effectifTotal = classesEnseignant.reduce((s, c) => s + c.effectif, 0);
  const scoreMoyenGlobal = Math.round(classesEnseignant.reduce((s, c) => s + c.scoreMoyen, 0) / classesEnseignant.length);

  function action(label: string) {
    setToast(label);
    setTimeout(() => setToast(null), 2200);
  }

  return (
    <div>
      <div className="dash-header">
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <Avatar seed={enseignantConnecte.avatarSeed} size={72} />
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 6 }}>
              {matiere?.nom} · {enseignantConnecte.etablissement}
            </p>
            <h1 style={{ color: "var(--cotton)", fontSize: "1.9rem" }}>Bonjour {user?.prenom ?? "Issa"} 👋</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dash-stats-grid">
          <StatCard chiffre={String(classesEnseignant.length)} label="Classes actives" accent="var(--terracotta)" />
          <StatCard chiffre={String(effectifTotal)} label="Élèves au total" accent="var(--indigo)" />
          <StatCard chiffre={String(devoirsACorrigerEnseignant.length)} label="Devoirs à corriger" accent="var(--gold)" />
          <StatCard chiffre={`${scoreMoyenGlobal}%`} label="Score moyen classes" accent="var(--green)" />
        </div>

        <div className="dash-body-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <Panel titre="Mes classes">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {classesEnseignant.map((c) => (
                  <div key={c.id} className="devoir-row">
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.96rem" }}>{c.nom}</p>
                      <p style={{ color: "var(--ink-soft)", fontSize: "0.82rem" }}>
                        {c.niveau} · {c.effectif} élèves
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontWeight: 800, color: "var(--green)", fontSize: "1rem" }}>{c.scoreMoyen}%</p>
                      <p style={{ color: "var(--ink-soft)", fontSize: "0.76rem" }}>score moyen</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel titre="Devoirs à corriger">
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {devoirsACorrigerEnseignant.map((d) => {
                  const pct = Math.round((d.rendus / d.total) * 100);
                  return (
                    <div key={d.id}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "0.92rem" }}>{d.titre}</p>
                          <p style={{ color: "var(--ink-soft)", fontSize: "0.8rem" }}>{d.classe}</p>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: "0.86rem", color: "var(--terracotta)" }}>
                          {d.rendus}/{d.total} rendus
                        </span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${pct}%`, background: "var(--terracotta)" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <Panel titre="Actions rapides">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <QuickAction icon={<BookStackIcon size={20} color="var(--terracotta)" />} label="Créer un cours" onClick={() => action("Brouillon de cours créé")} />
                <QuickAction icon={<MortarboardIcon size={20} color="var(--green)" />} label="Publier un devoir" onClick={() => action("Devoir publié à vos classes")} />
                <QuickAction icon={<UsersIcon size={20} color="var(--indigo)" />} label="Voir les résultats" onClick={() => action("Résultats des classes ouverts")} />
              </div>
            </Panel>

            {toast && (
              <div style={{ background: "var(--green)", color: "var(--white)", borderRadius: "var(--radius-md)", padding: "14px 18px", fontWeight: 600, fontSize: "0.9rem" }}>
                {toast} — fonctionnalité de démonstration.
              </div>
            )}

            <div style={{ background: "var(--indigo)", borderRadius: "var(--radius-md)", padding: 22 }}>
              <p style={{ color: "var(--cotton)", fontWeight: 700, marginBottom: 8 }}>Astuce</p>
              <p style={{ color: "rgba(250,243,229,0.78)", fontSize: "0.88rem" }}>
                Les classes avec un score moyen sous 70% gagnent à recevoir un devoir de révision ciblé.
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: 56 }} />
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--cotton-deep)",
        border: "none",
        borderRadius: "var(--radius-sm)",
        padding: "14px 16px",
        fontWeight: 700,
        fontSize: "0.92rem",
        color: "var(--ink)",
        textAlign: "left",
        width: "100%",
      }}
    >
      {icon}
      {label}
    </button>
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
