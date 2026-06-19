import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Landing } from "./pages/Landing";
import { Auth } from "./pages/Auth";
import { Catalog } from "./pages/Catalog";
import { DashboardEleve } from "./pages/DashboardEleve";
import { DashboardEnseignant } from "./pages/DashboardEnseignant";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function RequireAuth({ children, role }: { children: React.ReactNode; role?: "eleve" | "enseignant" }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/connexion" replace />;
  if (role === "enseignant" && user.role !== "enseignant") return <Navigate to="/eleve" replace />;
  if (role === "eleve" && user.role === "enseignant") return <Navigate to="/enseignant" replace />;
  return <>{children}</>;
}

function Shell() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cours" element={<Catalog />} />
            <Route path="/connexion" element={<Auth />} />
            <Route
              path="/eleve"
              element={
                <RequireAuth role="eleve">
                  <DashboardEleve />
                </RequireAuth>
              }
            />
            <Route
              path="/enseignant"
              element={
                <RequireAuth role="enseignant">
                  <DashboardEnseignant />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default function App() {
  return <Shell />;
}
