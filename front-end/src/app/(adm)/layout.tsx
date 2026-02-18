import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import { ToastContainer, Bounce } from 'react-toastify';

import "./globals.css";
import ReCaptchaProvider from "@/src/components/recaptchaProvider/ReCaptchaProvider";
import { AuthProvider } from "../contexts/AuthContext";

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
        <ReCaptchaProvider>
          <AuthProvider>
            {children}
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
          </AuthProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
