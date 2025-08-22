export default async function BookPage({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book } = await params;

  return <h1>book: {book}</h1>;
}
