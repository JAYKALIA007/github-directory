import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Directory | Home",
  description: "Welcome to the github disrectory home-page",
  keywords: ["github", "github-user", "github-directory"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 w-full`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
