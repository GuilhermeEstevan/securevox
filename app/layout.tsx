import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureVox — Telefonia IP em Nuvem para Empresas | PABX, URA e WhatsApp",
  description:
    "Comunicação empresarial em nuvem com PABX escalável, URA inteligente, integração WhatsApp Business e segurança AWS. Economize até 40% com Telefonia IP.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "SecureVox — Comunicação Empresarial em Nuvem",
    description:
      "Telefonia IP corporativa com PABX em nuvem, URA inteligente e integração WhatsApp. Segurança AWS e suporte humanizado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
