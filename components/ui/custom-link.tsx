import { cn } from "@/lib/utils";
import Link from "next/link";

function CustomLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={cn("text-sky-600 hover:underline", className)} {...props}>
      {children}
    </Link>
  );
}

export { CustomLink };
