import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@repo/ui/styles.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Theme>{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
