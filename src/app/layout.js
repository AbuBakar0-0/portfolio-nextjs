"use client";

// app/layout.tsx
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg-light dark:bg-bg-dark bg-cover bg-no-repeat bg-center">
        <MouseTrail strokeColor={"#FF8541"} lag={0} lineWidthStart={10} />

        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}




