import { cn } from "@/lib/utils";

function SectionContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-6", className)} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
