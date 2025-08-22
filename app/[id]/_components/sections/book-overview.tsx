import Image from "next/image";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import { CustomLink } from "@/components/ui";

function BookOverview() {
  return (
    <SectionContainer>
      <ViewContainer className="grid gap-4 md:grid-cols-[70fr_30fr]">
        <div>
          <h2>About this edition</h2>
          <div className="rounded-md border-1">
            <ul className="grid grid-cols-2 gap-1 border-b-1 p-4">
              <li className="text-muted-foreground text-sm">
                ISBN: <span>9780553381702, 0553381709</span>
              </li>
              <li className="text-muted-foreground text-sm">
                Page count: <span>1,008</span>
              </li>
              <li className="text-muted-foreground text-sm">
                Published: <span>May 28, 2002</span>
              </li>
              <li className="text-muted-foreground text-sm">
                Format: <span>Paperback</span>
              </li>
              <li className="text-muted-foreground text-sm">
                Publisher:{" "}
                <CustomLink href="#">Random House Publishing Group</CustomLink>
              </li>
              <li className="text-muted-foreground text-sm">
                Language: <span>English</span>
              </li>
              <li className="text-muted-foreground text-sm">
                Author: <CustomLink href="#">George R. R. Martin</CustomLink>
              </li>
            </ul>
            <div className="p-4 text-sm">
              <b>
                THE BOOK BEHIND THE THIRD SEASON OF <i>GAME OF THRONES,</i> AN
                ORIGINAL SERIES NOW ON HBO.
              </b>
              <br />
              <br />
              Here is the third book in the landmark series that has redefined
              imaginative fiction and become a modern masterpiece.
              <br />
              <br />
              <b>A STORM OF SWORDS</b>
              <br />
              <br />
              Of the five contenders for power, one is dead, another in
              disfavor, and still the wars rage. Joffrey sits on the Iron
              Throne, the uneasy ruler of the Seven Kingdoms. His most bitter
              rival, Lord Stannis, stands defeated and disgraced, victim of the
              sorceress who holds him in her thrall. Young Robb still rules the
              North from the fortress of Riverrun. Meanwhile, making her way
              across a blood-drenched continent is the exiled queen, Daenerys,
              mistress of the only three dragons left in the world. As opposing
              forces maneuver for the final showdown, an army of barbaric
              wildlings arrives from the outermost limits of civilization,
              accompanied by a supernatural army of the living dead. As the
              future of the land hangs in the balance, no one will rest until
              the Seven Kingdoms have exploded in a veritable storm of swords. .
              . .
              <br />
              <br />A GAME OF THRONES <b>•</b> A CLASH OF KINGS <b>•</b> A STORM
              OF SWORDS <b>•</b> A FEAST FOR CROWS <b>•</b> A DANCE WITH DRAGONS
            </div>
          </div>
        </div>
        <div>
          <h2>About the Author</h2>
          <div className="rounded-md border-1 p-4 space-y-4">
            <div className="flex justify-between gap-4 items-center">
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
                George R. R. Martin is the #1 New York Times bestselling author
                of many novels, including the acclaimed series A Song of Ice and
                Fire—A Game of Thrones, A Clash of Kings, A Storm of Swords, A
                Feast for Crows, and A Dance with Dragons—as well as Tuf
                Voyaging, Fevre Dream, The Armageddon Rag, Dying of the Light,
                Windhaven (with Lisa Tuttle), and Dreamsongs Volumes I and II.
                He is also the creator of The Lands of Ice and Fire, a
                collection of maps from A Song of Ice and Fire featuring
                original artwork from illustrator and cartographer Jonathan
                Roberts, and The World of Ice & Fire (with Elio M. García, Jr.,
                and Linda Antonsson). As a writer-producer, Martin has worked on
                The Twilight Zone, Beauty and the Beast, and various feature
                films and pilots that were never made. He lives with the lovely
                Parris in Santa Fe, New Mexico.
              </p>
            </div>
          </div>
        </div>
        {/* <ViewContainer className="grid gap-6 lg:grid-cols-[30fr_70fr]">
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
      </ViewContainer> */}
      </ViewContainer>
    </SectionContainer>
  );
}

export { BookOverview };
