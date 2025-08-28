import { cn } from "@/lib/utils";
import Link from "next/link";

function CustomLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(className, "text-sky-600 hover:underline")}
      {...props}
    >
      {children}
    </Link>
  );
}

export { CustomLink };
