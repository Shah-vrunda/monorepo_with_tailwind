import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@repo/ui/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
