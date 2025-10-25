import { ViewContainer } from "@/components/layouts";
import { Banner, Edition } from "@/app/volume/[id]/_components";
import { Volume } from "@/types";

export default async function VolumePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API}/volumes/${id}`,
  );
  const { volumeInfo }: Volume = await response.json();

  return (
    <>
      <Banner {...volumeInfo} />
      <ViewContainer>
        <Edition {...volumeInfo} />
      </ViewContainer>
    </>
  );
}
