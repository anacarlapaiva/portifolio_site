import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/shared/providers/lenis-provider";

export const metadata: Metadata = {
  title: "Ana Carla",
  description:
    "Portfólio multilíngue de Ana Carla, com foco em front-end, mobile e interfaces para produtos digitais.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("theme");
                const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                document.documentElement.dataset.theme = storedTheme || systemTheme;
              } catch (error) {
                document.documentElement.dataset.theme = "dark";
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
