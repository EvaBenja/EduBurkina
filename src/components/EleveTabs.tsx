import { NavLink } from "react-router-dom";

const TABS = [
  { to: "/eleve", label: "Tableau de bord", end: true },
  { to: "/eleve/ardoise", label: "Ardoise intelligente", end: false },
  { to: "/eleve/chat", label: "Chat", end: false },
];

export function EleveTabs() {
  return (
    <div className="eleve-tabs">
      <div className="container eleve-tabs-row">
        {TABS.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) => `eleve-tab ${isActive ? "active" : ""}`}
          >
            {t.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
