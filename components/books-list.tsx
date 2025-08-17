"use client";

import { Container } from "@/components/ui/container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBooks } from "@/context/books-provider";

export default function BookList() {
  const { books } = useBooks();
  
  return (
    <section>
      <Container>
        <Table>
          <TableCaption>A list of books</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.length === 0 ? (
              <TableRow>
                <TableCell>No books present.</TableCell>
              </TableRow>
            ) : (
              books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.authors?.join("") ?? "-"}</TableCell>
                  <TableCell>{book.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Container>
    </section>
  );
}
