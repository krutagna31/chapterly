export interface Book {
  id: string;
  title: string;
  authors: string[];
  state: "toRead" | "reading" | "read";
}