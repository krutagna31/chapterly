"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ViewContainer } from "@/components/layouts";
import { Button, Label } from "@/components/ui";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "lucide-react";

interface Result {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    // imageLinks: {
    //   smallThumbnail: string;
    // };
  };
}

/*
  - when the input is empty
  - when is loading is true
  - when error is thrown
  - when book is empty
  debounce: user types boo: 3 api calls, wasteful, wait for 400ms after user stops typing and then make the api call. 
*/

export default function Header() {
  const [results, setResults] = useState<Result[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const debouncedFetch = useMemo(
    () =>
      debounce(async (query: string) => {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`,
        );
        const data = await response.json();
        setResults(data?.items || []);
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
      setResults([]);
      return;
    }

    setIsLoading(true);
    debouncedFetch(newQuery);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/search");
  };

  const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <header className="py-4">
      <ViewContainer className="flex items-center justify-between">
        <Link href="#">Chapterly</Link>
        <div className="bg-popover relative w-md rounded-tl-md rounded-tr-md border-1">
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
              ) : results.length === 0 ? (
                <p className="text-center text-xs">No books found</p>
              ) : (
                <ul className="space-y-4">
                  {results.map((result) => (
                    <li key={result.id}>
                      <Link
                        className="flex items-center gap-4"
                        href={`/${result.id}`}
                      >
                        {/* <Image
                            src={
                              response.volumeInfo.imageLinks.smallThumbnail ||
                              ""
                            }
                            alt={response.volumeInfo.title}
                          /> */}
                        <div>
                          <p className="text-sm font-bold">
                            {truncate(result.volumeInfo.title, 50)}
                          </p>
                          {result.volumeInfo.authors && (
                            <p className="text-xs">
                              by {result.volumeInfo.authors.join(", ")}
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
        <ModeToggle />
      </ViewContainer>
    </header>
  );
}
