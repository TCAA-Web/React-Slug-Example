import { Route, BrowserRouter as Router, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { AboutPage } from "./pages/AboutPage";
import { MainLayout } from "./layout/MainLayout";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import "./App.css";

// Bemærk her at /blogs/:slug er en route hvor alt der bliver sat efter /blog/
// er en værdi vi kan trække ud inde i det komponent der hører til routen
// her er det; SingleBlogPage (SE SingleBlogPage.tsx)

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/blogs" element={<AllBlogsPage />} />
            <Route path="/blogs/:slug" element={<SingleBlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
