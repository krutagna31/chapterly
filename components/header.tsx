"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ViewContainer } from "@/components/layouts";
import { Button, Input, Label } from "@/components/ui";
import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "lucide-react";

interface Response {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

export default function Header() {
  const router = useRouter();
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const fetchBook = async (query: string) => {
    setLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`,
    );

    const data = await response.json();
    console.log(data.totalItems);
    setResponses(data.items || []);
    setLoading(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    fetchBook(query);
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
        <div className="bg-popover relative w-md">
          <form className="flex border-b-1" onSubmit={handleSubmit}>
            <Label className="sr-only">Search</Label>
            <Input
              className="!bg-popover w-full rounded-none border-0"
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() =>
                setTimeout(() => {
                  setIsFocused(false);
                }, 250)
              }
              type="text"
              placeholder="Search for a book"
            />
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
          </form>
          {isFocused && (
            <div className="bg-popover absolute top-[calc(100%+4px)] right-0 left-0 z-10 p-4">
              {loading && (
                <p className="py-6 text-center text-sm">Loading...</p>
              )}
              {!loading && responses.length === 0 && (
                <p className="py-6 text-center text-xs">No results found.</p>
              )}
              {!loading && responses.length > 0 && (
                <ul className="space-y-4">
                  {responses.map((response) => (
                    <li key={response.id}>
                      <Link
                        className="flex items-center gap-4"
                        href={`/${response.volumeInfo.title}`}
                      >
                        <Image
                          src={
                            response.volumeInfo.imageLinks?.smallThumbnail || ""
                          }
                          alt={response.volumeInfo.title}
                          width="32"
                          height="32"
                        />
                        <div>
                          <p className="text-sm font-bold">
                            {truncate(response.volumeInfo.title, 50)}
                          </p>
                          {response.volumeInfo.authors && (
                            <p className="text-xs">
                              by {response.volumeInfo.authors.join(", ")}
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
