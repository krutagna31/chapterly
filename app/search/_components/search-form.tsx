import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button, Input } from "@/components/ui";

function SearchForm() {
  return (
    <SectionContainer>
      <ViewContainer>
        <form className="flex gap-2">
          <Input type="search" placeholder="The Hobbit..." />
          <Button>Search</Button>
        </form>
      </ViewContainer>
    </SectionContainer>
  );
}

export { SearchForm };
