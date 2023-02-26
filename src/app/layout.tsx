import { manrope } from "@/app/fonts";
import Providers from "@/app/providers";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={manrope.variable}>
      <head />
      <body>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
