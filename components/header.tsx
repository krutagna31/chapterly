"use client";

import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { Search } from "lucide-react";
import Link from "next/link";
import { Status } from "@/types/types";
import { useState } from "react";

interface Response {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
  };
}

export default function Header() {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const { onBookAdd } = useBooks();

  const fetchBook = async (query: string) => {
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`,
    );
    const data = await response.json();
    setResponses(data.items);
    setLoading(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fetchBook(event.target.value);
  };

  const handleBookAdd = (id: string, title: string, authors: string[]) => {
    onBookAdd({ id, title, authors, status: "toRead" });
  };

  const truncate = (str: string, maxLength: number) =>
    str.length > maxLength ? str.slice(0, maxLength) : str;

  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <Link href="#">Chapterly</Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-4" variant="outline">
              Search
              <Search />
            </Button>
          </DialogTrigger>
          <DialogContent className="top-[7.5%] translate-y-[-7.5%] sm:max-w-3xl [&>button]:hidden">
            <DialogTitle className="sr-only">Search for a book</DialogTitle>
            <DialogDescription className="sr-only">
              Enter the details of the book
            </DialogDescription>
            <Input
              type="text"
              placeholder="Enter book/author name"
              onChange={handleSearchChange}
            />
            <Table>
              <TableCaption>A list of books</TableCaption>
              <TableHeader>
                <TableRow className="sr-only">
                  <TableHead>Title</TableHead>
                  <TableHead>Add Button</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell>Loading...</TableCell>
                  </TableRow>
                ) : responses.length === 0 ? (
                  <TableRow>
                    <TableCell>Search for a book</TableCell>
                  </TableRow>
                ) : (
                  responses.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>
                        {truncate(book.volumeInfo.title, 60)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm">Add Book</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                              onValueChange={(value) =>
                                onBookAdd({
                                  id: book.id,
                                  title: book.volumeInfo.title,
                                  authors: book.volumeInfo?.authors || [],
                                  status: value as Status,
                                })
                              }
                              value="toRead"
                            >
                              <DropdownMenuRadioItem value="toRead">
                                To Read
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="read">
                                Reading
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="reading">
                                Read
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
        <ModeToggle />
      </Container>
    </header>
  );
}
