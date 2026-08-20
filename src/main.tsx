import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error('Elemento #root não encontrado no index.html');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
