import { gql } from "graphql-request";

export const getAllBlogs = gql`
  query {
    blogs {
      title
      slug
      content
    }
  }
`;
