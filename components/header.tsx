"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useBooks } from "@/context/books-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Status } from "@/types/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Response {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
  };
}

export default function Header() {
  const [responses, setResponses] = useState<Response[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { books, onBookAdd } = useBooks();

  const fetchBook = async (query: string, newPage: number) => {
    setLoading(true);
    const startIndex = (newPage - 1) * 10;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}`,
    );
    const data = await response.json();
    console.log(data.totalItems);
    setResponses(data.items);
    setTotalItems(data.totalItems);
    setLoading(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();
    setQuery(query);
    setPage(1);
    if (query.length > 0) {
      fetchBook(query, page);
    } else {
      setResponses([]);
    }
  };

  const findBookStatus = (id: string): string => {
    const book = books.find((book) => book.id === id);
    return book ? book.status : "toRead";
  };

  const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) : str;
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchBook(query, newPage);
  };

  const totalPages = Math.ceil(totalItems / 10);

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
              placeholder="Start searching..."
              onChange={handleSearchChange}
            />
            {loading ? (
              <p className="text-sm">Loading...</p>
            ) : (
              <ul className="space-y-2">
                {responses.map((response) => (
                  <li className="flex justify-between" key={response.id}>
                    <span className="text-sm">
                      {truncate(response.volumeInfo.title, 60)}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm">
                          {/* books.find(book) */}
                          {findBookStatus(response.id)}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          onValueChange={(value) =>
                            onBookAdd({
                              id: response.id,
                              title: response.volumeInfo.title,
                              authors: response.volumeInfo.authors,
                              status: value as Status,
                            })
                          }
                          value={findBookStatus(response.id)}
                        >
                          <DropdownMenuRadioItem value="toRead">
                            To Read
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="reading">
                            Reading
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="read">
                            Read
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            )}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => {
                      if (page === 1) {
                        return;
                      }
                      handlePageChange(page - 1);
                    }}
                    href="#"
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter(
                    (p) =>
                      p === 1 || p === totalPages || Math.abs(p - page) <= 2,
                  )
                  .map((p, i, arr) => {
                    if (i > 0 && p - arr[i - 1] > 1) {
                      return (
                        <PaginationItem key={p}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    return (
                      <PaginationItem key={p}>
                        <PaginationLink
                          isActive={p === page}
                          href="#"
                          onClick={() => handlePageChange(p)}
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => {
                      if (page === totalPages) {
                        return;
                      }
                      handlePageChange(page + 1);
                    }}
                    href="#"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </DialogContent>
        </Dialog>
        <ModeToggle />
      </Container>
    </header>
  );
}
