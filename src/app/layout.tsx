import Providers from "@/app/providers";
import { rubik } from "@/theme/fonts/fonts";
import React from "react";
import "../theme/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={rubik.variable}>
      <head />
      <body className="bg-gray-500">
        <main className="h-screen">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
