import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/lib/styles/global.css";
import { Providers } from "@/components/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getQueryClient } from "@/lib/utils/get-query-client";
import { PRODUCTS } from "@/lib/constants/query-keys";
import api from "@/lib/queries/api";
import { API } from "@/lib/constants/api";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Solarity",
    default: "Solarity",
  },
  description: "Solarity",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale || "ua"}>
      <body className={sourceSans.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
