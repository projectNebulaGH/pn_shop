'use client'

import "@/app/globals.css";
import Navbar from "@/components/Navbar/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
