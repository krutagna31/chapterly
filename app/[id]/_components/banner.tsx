import Image from "next/image";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button, CustomLink } from "@/components/ui";
import { Book } from "@/types";
import Link from "next/link";
import { Fragment } from "react";
import { Bookmark, ScanEye } from "lucide-react";

function Banner({
  title,
  subtitle,
  authors,
  publishedDate,
  imageLinks,
  previewLink,
}: Pick<
  Book["volumeInfo"],
  | "title"
  | "subtitle"
  | "authors"
  | "publishedDate"
  | "imageLinks"
  | "previewLink"
>) {
  return (
    <SectionContainer>
      <ViewContainer className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-5xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-muted-foreground text-xl italic">{subtitle}</p>
          )}
          <div className="flex gap-1 justify-center md:justify-start">
            {authors && (
              <p>
                <span>by </span>
                {authors.map((author, index) => (
                  <Fragment key={author}>
                    <CustomLink href="/">{author}</CustomLink>
                    {index < authors.length - 1 && <span>, </span>}
                  </Fragment>
                ))}
              </p>
            )}
            {authors && publishedDate && (
              <p className="text-muted-foreground"> · </p>
            )}
            {publishedDate && (
              <p className="text-muted-foreground">
                {new Date(publishedDate).getFullYear()}
              </p>
            )}
          </div>
          <div className="space-x-2">
            <Button size="lg">
              <Bookmark />
              <span>Want to read</span>
            </Button>
            <Button disabled variant="secondary" size="lg" asChild>
              <Link href={previewLink}>
                <ScanEye />
                <span>Preview</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-48 w-32">
          <Image
            className="rounded-sm"
            src={
              imageLinks?.thumbnail || "/images/no-image-placeholder-256.png"
            }
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

export { Banner };
