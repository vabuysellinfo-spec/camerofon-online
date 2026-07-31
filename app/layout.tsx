import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://camerofon.online"),
  title: "Camerofon — перетворіть старий телефон на камеру",
  description:
    "Camerofon перетворює запасний Android-смартфон на домашню камеру спостереження з віддаленим доступом.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Camerofon — старий телефон як домашня камера",
    description:
      "Відео наживо, голосовий зв’язок і керування камерою з іншого Android-телефона.",
    url: "https://camerofon.online/",
    siteName: "Camerofon",
    locale: "uk_UA",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
