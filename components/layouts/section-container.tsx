import clsx from "clsx";

function SectionContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={clsx(className, "py-6")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
