import { Link } from "react-router-dom";
import { Wordmark } from "./Navbar";

export function Footer() {
  return (
    <footer style={{ background: "var(--indigo-deep)", marginTop: "auto" }}>
      <div className="stripe-divider" />
      <div className="container" style={{ padding: "44px 24px 28px", display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
        <div style={{ maxWidth: 280 }}>
          <Wordmark />
          <p style={{ color: "var(--indigo-soft)", marginTop: 14, fontSize: "0.92rem" }}>
            La plateforme de cours en ligne pensée pour les élèves, les enseignants et les familles du Burkina Faso.
          </p>
        </div>

        <FooterColumn
          title="Apprendre"
          links={[
            { label: "Catalogue de cours", to: "/cours" },
            { label: "Niveau primaire", to: "/cours" },
            { label: "Niveau secondaire", to: "/cours" },
          ]}
        />
        <FooterColumn
          title="Espaces"
          links={[
            { label: "Connexion élève", to: "/connexion" },
            { label: "Connexion enseignant", to: "/connexion" },
          ]}
        />
        <div>
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 14 }}>
            Contact
          </p>
          <p style={{ color: "var(--indigo-soft)", fontSize: "0.92rem", lineHeight: 1.8 }}>
            Ouagadougou, Burkina Faso<br />
            contact@eduburkina.bf<br />
            +226 25 30 00 00
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: "0 24px 28px" }}>
        <p style={{ color: "rgba(250,243,229,0.45)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} EduBurkina — Prototype de démonstration. Données fictives.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 14 }}>
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <Link key={l.label} to={l.to} style={{ color: "var(--cotton)", fontSize: "0.92rem", opacity: 0.85 }}>
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
