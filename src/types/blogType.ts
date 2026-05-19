export interface Response {
  data: BlogData;
  extensions: Extensions;
}

export interface BlogData {
  blogs: BlogElement[];
}

export interface BlogElement {
  title: string;
  slug: string;
  content: string;
}

export interface Extensions {
  "Complexity-Cost-Left": number;
  "Effective-Complexity-Limit": number;
}
