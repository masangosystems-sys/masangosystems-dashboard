import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Masango Systems Projects Dashboard",
  description: "Internal project dashboard for Masango Systems.",
};

const themeScript = `
  (function() {
    var themes = ['dark', 'light', 'techy', 'villain'];
    try {
      var theme = localStorage.getItem('ms-theme');
      var activeTheme = themes.indexOf(theme) === -1 ? 'dark' : theme;
      for (var i = 0; i < themes.length; i++) {
        document.documentElement.classList.remove(themes[i]);
      }
      document.documentElement.classList.add(activeTheme);
    } catch (error) {
      for (var j = 0; j < themes.length; j++) {
        document.documentElement.classList.remove(themes[j]);
      }
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
