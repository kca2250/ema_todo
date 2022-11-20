import { Grid } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layouts: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid autoRows="auto 1fr" minWidth="100vw" minHeight="100vh">
      <Header name="aaa bbb" photoURL="none" />
      <main>{children}</main>
    </Grid>
  );
};
