import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "../lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
