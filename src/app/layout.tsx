// app/layout.tsx
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "auto",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
