import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";


import Navbar from "../components/navbar/Navbar";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Alisson ",
  description: "Não deixe de conferir o portfólio (NextJs) de um jovem fascinado pelo mundo da tecnologia, aberto a novas aprendizagens e com grande interesse em se desenvolver como profissional e pessoa.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`} >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
