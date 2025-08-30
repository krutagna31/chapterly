import { ViewContainer } from "@/components/layouts";
import { Banner, Edition } from "@/app/[id]/_components";
import { Book } from "@/types";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}/volumes/${id}`,
  );
  const { volumeInfo }: Book = await response.json();

  return (
    <>
      <Banner
        title={volumeInfo.title}
        subtitle={volumeInfo.subtitle}
        authors={volumeInfo.authors}
        publishedDate={volumeInfo.publishedDate}
        imageLinks={volumeInfo.imageLinks}
        previewLink={volumeInfo.previewLink}
      />
      <ViewContainer>
        <Edition
          publisher={volumeInfo.publisher}
          publishedDate={volumeInfo.publishedDate}
          industryIdentifiers={volumeInfo.industryIdentifiers}
          description={volumeInfo.description}
          pageCount={volumeInfo.pageCount}
          printType={volumeInfo.printType}
          language={volumeInfo.language}
        />
      </ViewContainer>
    </>
  );
}
