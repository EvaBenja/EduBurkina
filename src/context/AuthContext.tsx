import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "eleve" | "enseignant" | "parent";

interface SessionUser {
  prenom: string;
  role: Role;
}

interface AuthContextValue {
  user: SessionUser | null;
  login: (prenom: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const STORAGE_KEY = "eduburkina_session";

function readStoredSession(): SessionUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialisation synchrone (lazy state) : si on lisait localStorage dans un
  // useEffect, le premier rendu verrait user=null et RequireAuth redirigerait
  // vers /connexion avant même que la session ne soit restaurée.
  const [user, setUser] = useState<SessionUser | null>(readStoredSession);

  function login(prenom: string, role: Role) {
    const next = { prenom, role };
    setUser(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth doit être utilisé dans AuthProvider");
  return ctx;
}
