"use client";

import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import { Button, Label } from "@/components/ui";
import { Volume } from "@/types";

type Response = {
  items: Volume[];
  kind: string;
  totalItems: number;
};

function QuickSearch() {
  // const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { data, status, error } = useQuery<Response>({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}/volumes`,
      );
      url.searchParams.set("q", debouncedQuery);
      url.searchParams.set("maxResults", "5");
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Request Failed: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    },
    enabled: !!debouncedQuery,
  });

  const handleDebouncedQueryChange = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedQuery(value);
      }, 300),
    [],
  );

  useEffect(() => {
    return () => {
      handleDebouncedQueryChange.cancel();
    };
  }, [handleDebouncedQueryChange]);

  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newQuery = event.target.value.trimStart();
    setQuery(newQuery);
    handleDebouncedQueryChange(newQuery);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // router.push(`/search?q=${query}`);
  };

  return (
    <div className="bg-popover relative mx-auto max-w-md rounded-tl-md rounded-tr-md border">
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
          value={query}
        />
        <Button className="rounded-none" variant="ghost" size="icon">
          <Search />
        </Button>
      </form>
      {isFocused && (
        <div className="absolute top-[calc(100%+2px)] right-0 left-0 z-10 rounded-br-md rounded-bl-md border border-t-0 bg-inherit p-3">
          {query.length === 0 ? (
            <p className="text-center text-xs">Start searching</p>
          ) : status === "pending" ? (
            <p className="text-center text-xs">Loading...</p>
          ) : status === "error" ? (
            <p className="text-center text-xs text-red-500">{error.message}</p>
          ) : data.totalItems === 0 ? (
            <p className="text-center text-xs">No volumes found</p>
          ) : (
            <ul className="space-y-4">
              {data.items.map(({ id, volumeInfo }) => (
                <li key={id}>
                  <Link
                    className="flex items-center gap-4"
                    href={`/volume/${id}`}
                  >
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

export { QuickSearch };
