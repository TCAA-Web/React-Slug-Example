import request from "graphql-request";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../queries/getAllBlogs";
import type { BlogData } from "../types/blogType";
import { BlogItem } from "../components/BlogItem";
import { Typography } from "@mui/material";

/**
 * På denne side vises alle blogs. De hentes med et "fetch/request" i en useEffect
 * og gemmes herefter i staten; data.
 */

export function AllBlogsPage() {
  const [data, setData] = useState<BlogData | null>(null);

  useEffect(() => {
    const queryData = async () => {
      const data = await request(import.meta.env.VITE_PUBLIC_URL, getAllBlogs);
      setData(data);
    };
    queryData();
  }, []);

  return (
    <>
      <Typography sx={{ marginBottom: "32px" }} variant="h1" align="center">
        My Cool Blog
      </Typography>
      {data?.blogs?.map((blog) => {
        return (
          <BlogItem
            key={blog.slug}
            content={blog.content.slice(0, 100) + "..."}
            title={blog.title}
            slug={blog.slug}
          />
        );
      })}
    </>
  );
}
