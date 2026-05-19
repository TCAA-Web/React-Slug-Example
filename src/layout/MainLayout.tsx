import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Container } from "@mui/material";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
