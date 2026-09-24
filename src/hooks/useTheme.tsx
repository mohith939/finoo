import { ReactNode } from "react";

// Dark mode only - no theme switching needed
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
