// src/components/ProtectedRoute.jsx
import { ReactNode, use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/auth-context";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
