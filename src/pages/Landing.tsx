import { Link } from "react-router-dom";
import "./Landing.css";
import { HeroIllustration, MortarboardIcon, UsersIcon, BookStackIcon } from "../icons/Illustrations";
import { cours, stats, temoignages } from "../data/mockData";
import { CourseCard } from "../components/CourseCard";
import { Avatar } from "../icons/Avatar";

export function Landing() {
  const apercu = cours.slice(0, 3);

  return (
    <div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: 16 }}>
              École en ligne · Burkina Faso
            </p>
            <h1>L'école continue, même après la cloche.</h1>
            <p style={{ color: "var(--cotton)", opacity: 0.88, fontSize: "1.08rem", marginTop: 18, maxWidth: 480 }}>
              Des cours du primaire au lycée, conçus par des enseignants burkinabè, pour réviser à la maison,
              suivre ses devoirs et progresser à son rythme — élèves, parents et enseignants réunis.
            </p>

            <div className="role-cta-grid" style={{ marginTop: 30 }}>
              <Link to="/connexion" className="btn btn-primary">
                Je suis élève
              </Link>
              <Link to="/connexion" className="btn btn-light">
                Je suis enseignant
              </Link>
            </div>

            <p style={{ color: "rgba(250,243,229,0.6)", fontSize: "0.85rem", marginTop: 16 }}>
              Déjà 1 200+ élèves et 30+ enseignants partenaires à travers le pays.
            </p>
          </div>

          <div className="hero-illustration" style={{ maxWidth: 480, margin: "0 auto" }}>
            <HeroIllustration />
          </div>
        </div>
        <div className="stripe-divider" />
      </section>

      <section style={{ padding: "44px 0" }}>
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.1rem", color: "var(--terracotta)" }}>
                {s.chiffre}
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "30px 0 56px" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)", marginBottom: 12, textAlign: "center" }}>
            Pourquoi EduBurkina
          </p>
          <h2 style={{ textAlign: "center", fontSize: "1.9rem", marginBottom: 38 }}>
            Une seule plateforme, trois rôles à servir
          </h2>

          <div className="feature-grid">
            <FeatureCard
              icon={<BookStackIcon size={26} color="var(--terracotta)" />}
              titre="Programme local"
              texte="Des leçons alignées sur le programme burkinabè, du CP à la Terminale, dans toutes les matières clés."
              accent="var(--terracotta)"
            />
            <FeatureCard
              icon={<MortarboardIcon size={26} color="var(--green)" />}
              titre="Suivi des devoirs"
              texte="Élèves et enseignants voient en un coup d'œil ce qui est rendu, en retard ou à corriger."
              accent="var(--green)"
            />
            <FeatureCard
              icon={<UsersIcon size={26} color="var(--indigo)" />}
              titre="Toute la famille"
              texte="Les parents suivent les progrès, les enseignants gèrent leurs classes, les élèves apprennent en s'amusant."
              accent="var(--indigo)"
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 56px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <div>
              <p className="eyebrow" style={{ color: "var(--terracotta)", marginBottom: 10 }}>
                Catalogue à la une
              </p>
              <h2 style={{ fontSize: "1.7rem" }}>Quelques cours du moment</h2>
            </div>
            <Link to="/cours" className="btn btn-outline">
              Voir tout le catalogue
            </Link>
          </div>

          <div className="course-preview-grid">
            {apercu.map((c) => (
              <CourseCard key={c.id} cours={c} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 64px" }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--terracotta)", marginBottom: 10, textAlign: "center" }}>
            Ils utilisent EduBurkina
          </p>
          <h2 style={{ textAlign: "center", fontSize: "1.7rem", marginBottom: 36 }}>
            Des familles et des classes, partout au pays
          </h2>

          <div className="testimonial-grid">
            {temoignages.map((t) => (
              <div
                key={t.nom}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  padding: 24,
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p style={{ color: "var(--ink)", fontSize: "0.96rem" }}>« {t.texte} »</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                  <Avatar seed={t.nom} size={42} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.92rem" }}>{t.nom}</p>
                    <p style={{ color: "var(--ink-soft)", fontSize: "0.82rem" }}>
                      {t.role} · {t.ville}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--terracotta)", padding: "52px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--white)", fontSize: "1.9rem", marginBottom: 14 }}>
            Prêt à commencer dès aujourd'hui ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: 28 }}>
            Crée ton espace élève ou enseignant en moins d'une minute.
          </p>
          <Link to="/connexion" className="btn btn-light">
            Créer mon compte
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, titre, texte, accent }: { icon: React.ReactNode; titre: string; texte: string; accent: string }) {
  return (
    <div style={{ background: "var(--white)", borderRadius: "var(--radius-md)", padding: 26, boxShadow: "var(--shadow-card)" }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--cotton-deep)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "1.08rem", marginBottom: 8, color: accent }}>{titre}</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem" }}>{texte}</p>
    </div>
  );
}
