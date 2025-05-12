import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "Deploy your static Next.js site to GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href="/test" prefetch={false}>
          Test
        </Link>
        <Link href="/" prefetch={false}>
          Home
        </Link>
        {children}
      </body>
    </html>
  );
}
