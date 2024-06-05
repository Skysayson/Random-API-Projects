import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-screen flex-col">
      <NavBar />
        {children}
    </main>
  );
}