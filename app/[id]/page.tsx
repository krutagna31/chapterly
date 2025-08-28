import { Author, Banner, Edition } from "@/app/[id]/_components/sections";
import { ViewContainer } from "@/components/layouts";
// import { Book } from "@/types";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log(params);
  // const { id } = await params;

  // const response = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes/${id}`,
  // );
  // const book: Book = await response.json();

  return (
    <>
      <Banner />
      <ViewContainer className="grid md:grid-cols-[70fr_30fr] gap-x-6">
        <Edition />
        <Author />
      </ViewContainer>
    </>
  );
}
