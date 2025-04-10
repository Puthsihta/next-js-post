// app/[locale]/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import NextTopLoader from "nextjs-toploader";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <ReactQueryProvider>
        {/* navbar */}
        <main className="flex mx-auto min-h-screen bg-paper">
          <NextTopLoader
            showSpinner={false}
            color="#024F87"
            easing="ease"
            height={5}
            speed={1000}
          />
          {children}
        </main>
        {/* footer */}
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
