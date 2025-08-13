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
  console.log(useBooks());

  return (
    <section>
      <Container>
        <Table>
          <TableCaption>A list of books</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead>State</TableHead>
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
                  <TableCell>{book.authors.join(", ")}</TableCell>
                  <TableCell>{book.state}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div>
          <label>All</label>
          <input type="checkbox" />
          <label>To Read</label>
          <input type="checkbox" />
          <label>Completed</label>
          <input type="checkbox" />
        </div>
      </Container>
    </section>
  );
}
