"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";
import Image from "next/image";
import Link from "next/link";
import {
  Button, Label
} from "@/components/ui";
import { Search } from "lucide-react";
import { Book } from "@/types";

function BookSearch() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const debouncedFetch = useMemo(
    () =>
      debounce(async (query: string) => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}/volumes?q=${encodeURIComponent(query)}&maxResults=5`,
        );
        const data = await response.json();
        setBooks(data?.items || []);
        setIsLoading(false);
      }, 300),
    [],
  );

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.trim();
    setQuery(newQuery);
    if (newQuery.length === 0) {
      setBooks([]);
      return;
    }

    setIsLoading(true);
    debouncedFetch(newQuery);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <div className="bg-popover relative mx-auto max-w-md rounded-tl-md rounded-tr-md border-1">
      <form className="flex" onSubmit={handleSubmit}>
        <Label className="sr-only">Search</Label>
        <input
          className="bg-popover w-full px-2 placeholder:text-sm"
          onChange={handleQueryChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsFocused(false);
            }, 250)
          }
          type="text"
          placeholder="The Hobbit..."
        />
        <Button className="rounded-none" variant="ghost" size="icon">
          <Search />
        </Button>
      </form>
      {isFocused && (
        <div className="absolute top-[calc(100%+2px)] right-0 left-0 z-10 rounded-br-md rounded-bl-md border-1 border-t-0 bg-inherit p-3">
          {query.length === 0 ? (
            <p className="text-center text-xs">Start searching</p>
          ) : isLoading ? (
            <p className="text-center text-xs">Loading...</p>
          ) : books.length === 0 ? (
            <p className="text-center text-xs">No books found</p>
          ) : (
            <ul className="space-y-4">
              {books.map(({ id, volumeInfo }) => (
                <li key={id}>
                  <Link className="flex items-center gap-4" href={`/${id}`}>
                    <div className="relative h-16 w-12 shrink-0">
                      <Image
                        src={
                          volumeInfo.imageLinks?.smallThumbnail ||
                          "/images/no-image-placeholder-64.png"
                        }
                        alt={volumeInfo.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold">
                        {volumeInfo.title.length > 50
                          ? volumeInfo.title.slice(0, 50) + "..."
                          : volumeInfo.title}
                      </p>
                      {volumeInfo.authors && (
                        <p className="text-xs">
                          by {volumeInfo.authors.join(", ")}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export { BookSearch };
