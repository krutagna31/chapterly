"use client";

import { Book } from "@/types/types";
import { createContext, useContext, useReducer } from "react";

interface BooksContextType {
  books: Book[];
  onBookAdd: (newBook: Book) => void;
  onBookDelete: (deleteBook: Book) => void;
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType,
);

export function useBooks() {
  return useContext(BooksContext);
}

type BooksAction =
  | { type: "add-book"; newBook: Book }
  | { type: "delete-book"; deleteBook: Book };

const booksReducer = (books: Book[], action: BooksAction): Book[] => {
  switch (action.type) {
    case "add-book":
      if (books.some((book) => book.id === action.newBook.id)) {
        return books;
      }
      return [...books, action.newBook];
    case "delete-book":
      return books.filter((book) => book.id !== action.deleteBook.id);
    default:
      throw new Error("Unknown action");
  }
};

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, dispatch] = useReducer(booksReducer, []);

  const handleBookAdd = (newBook: Book) => {
    dispatch({ type: "add-book", newBook });
  };

  const handleBookDelete = (deleteBook: Book) => {
    dispatch({ type: "delete-book", deleteBook });
  };

  const value = {
    books: books,
    onBookAdd: handleBookAdd,
    onBookDelete: handleBookDelete,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}
