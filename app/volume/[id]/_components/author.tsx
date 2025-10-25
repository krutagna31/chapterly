import { SectionContainer } from "@/components/layouts";
import Image from "next/image";

function Author() {
  return (
    <SectionContainer>
      <h2>About the author</h2>
      <div className="rounded-md border p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">George R.R. Martin</h3>
            <p className="text-muted-foreground text-sm">American Author</p>
          </div>
          <Image
            src="/images/grrm.jpeg"
            alt="George R.R. Martin"
            width="72"
            height="72"
          />
        </div>
        <div>
          <p className="text-sm">
            George R. R. Martin is the #1 New York Times bestselling author of
            many novels, including the acclaimed series A Song of Ice and Fire—A
            Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast for
            Crows, and A Dance with Dragons—as well as Tuf Voyaging, Fevre
            Dream, The Armageddon Rag, Dying of the Light, Windhaven (with Lisa
            Tuttle), and Dreamsongs Volumes I and II. He is also the creator of
            The Lands of Ice and Fire, a collection of maps from A Song of Ice
            and Fire featuring original artwork from illustrator and
            cartographer Jonathan Roberts, and The World of Ice & Fire (with
            Elio M. García, Jr., and Linda Antonsson). As a writer-producer,
            Martin has worked on The Twilight Zone, Beauty and the Beast, and
            various feature films and pilots that were never made. He lives with
            the lovely Parris in Santa Fe, New Mexico.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export { Author };
