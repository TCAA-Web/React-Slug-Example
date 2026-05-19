import { AppBar, Box, Toolbar } from "@mui/material";
import { CustomLink } from "./CustomLink";

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display: "flex" }} position="sticky">
        <Toolbar>
          <CustomLink to="/" textString="Home"></CustomLink>
          <CustomLink to="/about" textString="About"></CustomLink>
          <CustomLink to="/blogs" textString="Blogs"></CustomLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
