"use client";

import { ThemeProvider } from "next-themes";
import useMounted from "./Mounted";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const { mounted } = useMounted();

  if (!mounted) {
    return null;
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
