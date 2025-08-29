import { SectionContainer } from "@/components/layouts";
import { CustomLink, Separator } from "@/components/ui";
import { Book } from "@/types";

function Edition({
  publisher,
  publishedDate,
  industryIdentifiers,
  description,
  pageCount,
  printType,
  language,
}: Pick<
  Book["volumeInfo"],
  | "publisher"
  | "publishedDate"
  | "industryIdentifiers"
  | "description"
  | "pageCount"
  | "printType"
  | "language"
>) {
  return (
    <SectionContainer>
      <h2>About the edition</h2>
      <div className="space-y-4 rounded-md border p-4">
        <ul className="grid grid-cols-2 gap-2">
          {industryIdentifiers && (
            <li className="text-muted-foreground text-sm">
              ISBN:{" "}
              <span>
                {industryIdentifiers
                  ?.map(({ identifier }) => identifier)
                  .join(", ")}
              </span>
            </li>
          )}
          {pageCount && (
            <li className="text-muted-foreground text-sm">
              Page Count: <span>{pageCount}</span>
            </li>
          )}
          {publishedDate && (
            <li className="text-muted-foreground text-sm">
              Published:{" "}
              <span>
                {new Date(publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          )}
          {printType && (
            <li className="text-muted-foreground text-sm">
              Print Type: <span>{printType}</span>
            </li>
          )}
          {publisher && (
            <li className="text-muted-foreground text-sm">
              Publisher: <CustomLink href="#">{publisher}</CustomLink>
            </li>
          )}
          {language && (
            <li className="text-muted-foreground text-sm">
              Language: <span>{language}</span>
            </li>
          )}
        </ul>
        {description && (
          <>
            <Separator />
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </>
        )}
      </div>
    </SectionContainer>
  );
}

export { Edition };
