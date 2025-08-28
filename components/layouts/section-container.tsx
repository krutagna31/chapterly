import { cn } from "@/lib/utils";

function SectionContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn(className, "py-6")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
