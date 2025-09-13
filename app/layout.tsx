import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"; // Importăm Header
import Footer from "./components/Footer"; // Importăm Footer

export const metadata: Metadata = {
  title: "Aura - Magazin Online de Cafea Artizanală",
  description: "Un studiu de caz pentru un brand de e-commerce premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased"> {/* am scos fontul de aici pentru că l-am setat global */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}