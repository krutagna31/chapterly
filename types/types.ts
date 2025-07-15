export type Status = "toRead" | "reading" | "read";

export interface Book {
  id: string;
  title: string;
  authors?: string[];
  status: Status;
}

