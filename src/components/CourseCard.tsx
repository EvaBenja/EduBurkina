import { Link } from "react-router-dom";
import { SubjectIcon } from "../icons/SubjectIcons";
import { matieres, enseignants, type Cours } from "../data/mockData";

export function CourseCard({ cours }: { cours: Cours }) {
  const matiere = matieres.find((m) => m.id === cours.matiereId);
  const prof = enseignants.find((e) => e.id === cours.enseignantId);

  return (
    <Link
      to="/connexion"
      className="course-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        padding: 22,
        boxShadow: "var(--shadow-card)",
        border: "1px solid rgba(43,35,28,0.06)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: matiere?.couleur }}>
          <SubjectIcon matiereId={cours.matiereId} size={40} color={matiere?.couleur} />
        </div>
        <span
          className="eyebrow"
          style={{
            color: "var(--indigo)",
            background: "var(--cotton-deep)",
            padding: "5px 11px",
            borderRadius: 100,
          }}
        >
          {cours.niveau} · {cours.classe}
        </span>
      </div>

      <div>
        <p className="eyebrow" style={{ color: matiere?.couleur, marginBottom: 6 }}>
          {matiere?.nom}
        </p>
        <h3 style={{ fontSize: "1.1rem", color: "var(--ink)" }}>{cours.titre}</h3>
      </div>

      <p style={{ color: "var(--ink-soft)", fontSize: "0.92rem" }}>{cours.description}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4, paddingTop: 14, borderTop: "1px solid var(--cotton-deep)" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>{prof?.nom}</span>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--terracotta)" }}>{cours.leconsTotal} leçons</span>
      </div>
    </Link>
  );
}
