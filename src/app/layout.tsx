import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/lib/styles/global.css";
import { Providers } from "@/components/providers";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Solarity",
    default: "Solarity",
  },
  description: "Solarity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
