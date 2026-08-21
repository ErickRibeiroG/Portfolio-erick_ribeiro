import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import type { ThemeContextValue } from "./ThemeProvider";

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme precisa estar dentro de <ThemeProvider>");
  }
  return context;
}
