import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button } from "@/components/ui";
import { Book } from "@/types";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
  );
  const book: Book = await response.json();

  console.log(book);

  // grid grid-cols[30fr_70fr] / flex grow: 1?

  return (
    <SectionContainer>
      <ViewContainer className="grid gap-6 lg:grid-cols-[30fr_70fr]">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative h-96 w-64">
              <Image
                src={
                  book.volumeInfo.imageLinks?.large ||
                  book.volumeInfo.imageLinks.thumbnail
                }
                alt={book.volumeInfo.title}
                fill={true}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Button className="w-full" size="lg">
            Want to Read
          </Button>
          <Button variant="secondary" className="w-full" size="lg">
            <span>Get the book</span>
            <ExternalLink />
          </Button>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold">{book.volumeInfo.title}</h1>
            <p className="text-2xl">
              {book.volumeInfo.authors?.join(", ") || ""}
            </p>
          </div>
          {book.volumeInfo.description && (
            <div
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            ></div>
          )}
          <div>
            <p className="text-muted-foreground text-sm">
              {book.volumeInfo.pageCount} pages, {book.volumeInfo.printType}
            </p>
            <p className="text-muted-foreground text-sm">
              Published on {book.volumeInfo.publishedDate} by
              {book.volumeInfo.publisher}
            </p>
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
