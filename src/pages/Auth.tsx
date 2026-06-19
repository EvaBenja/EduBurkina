import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth, type Role } from "../context/AuthContext";
import { HeroIllustration } from "../icons/Illustrations";

const ROLES: { id: Role; label: string }[] = [
  { id: "eleve", label: "Élève" },
  { id: "enseignant", label: "Enseignant" },
  { id: "parent", label: "Parent" },
];

const ROLE_TEXT: Record<Role, { titre: string; texte: string }> = {
  eleve: { titre: "Reprends là où tu t'es arrêté.", texte: "Tes cours, tes devoirs et tes badges t'attendent." },
  enseignant: { titre: "Garde un œil sur toutes tes classes.", texte: "Suis les devoirs rendus et les résultats en un coup d'œil." },
  parent: { titre: "Suis les progrès de ton enfant.", texte: "Une vue simple sur ses cours, ses devoirs et ses résultats." },
};

export function Auth() {
  const [role, setRole] = useState<Role>("eleve");
  const [mode, setMode] = useState<"connexion" | "inscription">("connexion");
  const [prenom, setPrenom] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nom = prenom.trim() || (role === "enseignant" ? "Issa" : role === "parent" ? "Salamata" : "Inoussa");
    login(nom, role);
    navigate(role === "enseignant" ? "/enseignant" : "/eleve");
  }

  const txt = ROLE_TEXT[role];

  return (
    <div className="auth-shell">
      <div className="auth-illustration-panel">
        <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 14 }}>
          EduBurkina
        </p>
        <h2 style={{ color: "var(--cotton)", fontSize: "1.8rem", marginBottom: 12, maxWidth: 360 }}>{txt.titre}</h2>
        <p style={{ color: "rgba(250,243,229,0.78)", maxWidth: 340 }}>{txt.texte}</p>
        <div style={{ maxWidth: 320, marginTop: 28 }}>
          <HeroIllustration />
        </div>
      </div>

      <div className="auth-form-panel">
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ display: "flex", gap: 16, marginBottom: 22 }}>
            <button
              type="button"
              onClick={() => setMode("connexion")}
              style={{ background: "none", border: "none", padding: 0, fontWeight: 800, fontSize: "1.3rem", fontFamily: "var(--font-display)", color: mode === "connexion" ? "var(--ink)" : "var(--ink-soft)" }}
            >
              Connexion
            </button>
            <button
              type="button"
              onClick={() => setMode("inscription")}
              style={{ background: "none", border: "none", padding: 0, fontWeight: 800, fontSize: "1.3rem", fontFamily: "var(--font-display)", color: mode === "inscription" ? "var(--ink)" : "var(--ink-soft)" }}
            >
              Inscription
            </button>
          </div>

          <div className="role-tabs">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`role-tab ${role === r.id ? "active" : ""}`}
                onClick={() => setRole(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>

          {mode === "inscription" && (
            <div style={{ marginBottom: 16 }}>
              <label className="field-label" htmlFor="nom">
                Nom complet
              </label>
              <input id="nom" className="field-input" placeholder="Ex : Inoussa Ouédraogo" />
            </div>
          )}

          <div style={{ marginBottom: 16 }}>
            <label className="field-label" htmlFor="prenom">
              Prénom
            </label>
            <input
              id="prenom"
              className="field-input"
              placeholder="Ex : Inoussa"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="field-label" htmlFor="identifiant">
              {role === "enseignant" ? "E-mail professionnel" : "Téléphone ou e-mail"}
            </label>
            <input id="identifiant" className="field-input" placeholder={role === "enseignant" ? "issa.sawadogo@eduburkina.bf" : "+226 70 00 00 00"} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label className="field-label" htmlFor="mdp">
              Mot de passe
            </label>
            <input id="mdp" type="password" className="field-input" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            {mode === "connexion" ? `Continuer comme ${ROLES.find((r) => r.id === role)?.label.toLowerCase()}` : "Créer mon compte"}
          </button>

          <p style={{ color: "var(--ink-soft)", fontSize: "0.82rem", marginTop: 18, textAlign: "center" }}>
            Prototype de démonstration — aucune donnée n'est envoyée à un serveur.
          </p>
        </form>
      </div>
    </div>
  );
}
