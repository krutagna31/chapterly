import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { BooksProvider } from "@/context/books-provider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chapterly",
  description: "A minimalist book tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BooksProvider>
            <Header />
            <main>{children}</main>
          </BooksProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
