import { gql } from "graphql-request";


// For at sende en slug med ind i et query: 
// $slug = selve variablen
// "Where" clause hvor vi bruger $slug til at søge efter en specifik blog
export const getSingleBlog = gql`
  query ($slug: String!) {
    blog(where: { slug: $slug }) {
      title
      slug
      content
    }
  }
`;
