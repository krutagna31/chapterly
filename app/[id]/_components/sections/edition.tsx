import { SectionContainer } from "@/components/layouts";
import { CustomLink, Separator } from "@/components/ui";

function Edition() {
  return (
    <SectionContainer>
      <h2>About the edition</h2>
      <div className="rounded-md border p-4 space-y-4">
        <ul className="grid grid-cols-2 gap-2">
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
        <Separator />
        <div className="text-sm">
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
          Of the five contenders for power, one is dead, another in disfavor,
          and still the wars rage. Joffrey sits on the Iron Throne, the uneasy
          ruler of the Seven Kingdoms. His most bitter rival, Lord Stannis,
          stands defeated and disgraced, victim of the sorceress who holds him
          in her thrall. Young Robb still rules the North from the fortress of
          Riverrun. Meanwhile, making her way across a blood-drenched continent
          is the exiled queen, Daenerys, mistress of the only three dragons left
          in the world. As opposing forces maneuver for the final showdown, an
          army of barbaric wildlings arrives from the outermost limits of
          civilization, accompanied by a supernatural army of the living dead.
          As the future of the land hangs in the balance, no one will rest until
          the Seven Kingdoms have exploded in a veritable storm of swords. . . .
          <br />
          <br />A GAME OF THRONES <b>•</b> A CLASH OF KINGS <b>•</b> A STORM OF
          SWORDS <b>•</b> A FEAST FOR CROWS <b>•</b> A DANCE WITH DRAGONS
        </div>
      </div>
    </SectionContainer>
  );
}

export { Edition };
