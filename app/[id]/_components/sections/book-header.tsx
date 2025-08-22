import Image from "next/image";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button, CustomLink } from "@/components/ui";

function BookHeader() {
  return (
    <SectionContainer>
      <ViewContainer className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col justify-center gap-2 text-center md:text-left">
          <h1 className="text-5xl font-bold">A Storm of Swords</h1>
          <p>
            By <CustomLink href="#">George R.R Martin</CustomLink>
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button size="lg">Want to Read</Button>
            <Button variant="secondary" size="lg">
              Preview
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/a-storm-of-swords.jpeg"
            alt="a storm of swords"
            width="128"
            height="192"
          />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

export { BookHeader };
