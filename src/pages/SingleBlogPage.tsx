import request from "graphql-request";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleBlog } from "../queries/getSIngleBlog";
import type { BlogElement } from "../types/blogType";
import { BlogItem } from "../components/BlogItem";

type SingleBlogResponse = {
  blog: BlogElement | null;
};

/**
 * På denne side bliver vores "slug" trukket ud og gemt med useParams funktionen
 * Herefter bruges slug til at hente en enkelt artikel.
 * På samme måde kunne man bruge denne slug til at filtrere i dataen.
 */

export function SingleBlogPage() {
  const { slug } = useParams();

  console.log("Slug", slug);

  const [blog, setBlog] = useState<BlogElement | null>(null);

  useEffect(() => {
    if (!slug) return;

    const querySingleBlog = async () => {
      const data = await request<SingleBlogResponse>(
        import.meta.env.VITE_PUBLIC_URL,
        getSingleBlog,
        { slug }, // Her sendes slug med ind i GraphQL Requestet
      );
      setBlog(data.blog);
    };

    querySingleBlog();
  }, [slug]);

  return (
    blog && <BlogItem content={blog.content} title={blog.title}></BlogItem>
  );
}
