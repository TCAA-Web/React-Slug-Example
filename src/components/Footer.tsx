import { Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container
      sx={{
        borderTop: "1px solid #1c1c1c1f",
        textAlign: "center",
        marginTop: "auto",
        padding: "16px",
      }}
    >
      <Typography variant="h5">My Cool blog site</Typography>
      <Typography variant="body2">Some text here</Typography>
    </Container>
  );
}
