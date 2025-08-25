import { BookHeader, BookOverview } from "@/app/[id]/_components/sections";
// import { Book } from "@/types";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const { id } = await params;

  // const response = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes/${id}`,
  // );
  // const book: Book = await response.json();

  return (
    <>
      <BookHeader />
      <BookOverview />
    </>
  );
}
