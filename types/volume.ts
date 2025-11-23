import { Volume } from "@/types";

export type SearchResponse = {
  kind: string;
  totalItems: number;
  items: Volume[];
}