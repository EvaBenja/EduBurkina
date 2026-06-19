import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/cours", label: "Cours" },
];

export function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header style={{ background: "var(--indigo-deep)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }} onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="nav-desktop">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                color: "var(--cotton)",
                fontWeight: 600,
                fontSize: "0.95rem",
                paddingBottom: 6,
                borderBottom: location.pathname === l.to ? "2.5px solid var(--gold)" : "2.5px solid transparent",
              }}
            >
              {l.label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                to={user.role === "enseignant" ? "/enseignant" : "/eleve"}
                style={{
                  color: "var(--cotton)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  paddingBottom: 6,
                  borderBottom: location.pathname.startsWith("/eleve") || location.pathname.startsWith("/enseignant") ? "2.5px solid var(--gold)" : "2.5px solid transparent",
                }}
              >
                Mon espace
              </Link>
              <button className="btn btn-ghost" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/connexion" className="btn btn-primary">
              Connexion
            </Link>
          )}
        </nav>

        <button
          aria-label="Ouvrir le menu"
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="var(--cotton)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="nav-mobile" style={{ padding: "0 24px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} style={{ color: "var(--cotton)", fontWeight: 600 }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                to={user.role === "enseignant" ? "/enseignant" : "/eleve"}
                style={{ color: "var(--cotton)", fontWeight: 600 }}
                onClick={() => setOpen(false)}
              >
                Mon espace
              </Link>
              <button className="btn btn-ghost" style={{ width: "fit-content" }} onClick={() => { setOpen(false); handleLogout(); }}>
                Déconnexion
              </button>
            </>
          ) : (
            <Link to="/connexion" className="btn btn-primary" style={{ width: "fit-content" }} onClick={() => setOpen(false)}>
              Connexion
            </Link>
          )}
        </div>
      )}

      <div className="stripe-divider thin" />
    </header>
  );
}

export function Wordmark() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "var(--cotton)", letterSpacing: "-0.02em" }}>
        Edu<span style={{ color: "var(--gold)" }}>Burkina</span>
      </span>
    </div>
  );
}
