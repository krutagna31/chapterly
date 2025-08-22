import clsx from "clsx";

function SectionContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={clsx(className, "py-2")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
