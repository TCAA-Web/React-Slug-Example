import { Card, Typography } from "@mui/material";
import { Link } from "react-router";

interface BlogItemProps {
  title: string;
  content: string;
  slug?: string;
}

// Hvert enkelt blog item. Tager imod "title", "content" og "slug" som props.
// Bemærk at det er her slug sættes på url´en. Når brugeren trykker på en artikel; knappen "Read More",
// Sættes sluggen i URL´en og brugeren føres til "SingleBlogPage" (SE App.tsx)
export function BlogItem({ title, content, slug }: BlogItemProps) {
  return (
    <Card
      variant="outlined"
      elevation={3}
      sx={{ margin: "8px", padding: "16px" }}
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
      {slug && <Link to={`/blogs/${slug}`}>Read more</Link>}
      {!slug && <Link to="/blogs">Go back</Link>}
    </Card>
  );
}
