import { ViewContainer } from "@/components/layouts";
import { Banner, Edition } from "@/app/[id]/_components/sections";
import { Book } from "@/types";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
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
        <Edition />
      </ViewContainer>
      {/* <ViewContainer className="grid gap-x-6 lg:grid-cols-[70fr_30fr]">
        <Author />
      </ViewContainer> */}
    </>
  );
}
