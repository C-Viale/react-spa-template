import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./contexts/auth-context/provider.tsx";
import "./styles/index.css";
import { AppRoutes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  </StrictMode>
);
