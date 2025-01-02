import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "もしも〇〇やってたら〜",
  description: "SNS画面を作ろう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className={"fixed top-0 left-0 right-0 z-10"}>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
