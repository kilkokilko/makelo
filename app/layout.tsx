import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makelo-agency.de"),
  title: {
    default: "makelo · Websites für lokale Betriebe ab 39 € im Monat",
    template: "%s · makelo",
  },
  description:
    "Ich baue deine Website fertig, bevor du dich entscheidest. Gefällt sie dir nicht, zahlst du nichts. Gefällt sie dir: 39 Euro im Monat, Hosting, Domain und Änderungen inklusive.",
  keywords: [
    "Website für lokale Betriebe",
    "Website Handwerker",
    "Website Zahnarztpraxis",
    "Website Fahrschule",
    "günstige Website mit Hosting",
    "Webdesign Hamburg",
    "makelo",
  ],
  openGraph: {
    title: "makelo · Deine neue Website steht schon",
    description:
      "Fertig gebaut, bevor du dich entscheidest. 39 Euro im Monat, alles inklusive, keine Anfangszahlung.",
    type: "website",
    locale: "de_DE",
    siteName: "makelo",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
