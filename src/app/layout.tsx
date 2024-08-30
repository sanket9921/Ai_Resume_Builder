// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from '../components/ReduxProvider'; // Adjust the import path based on your setup

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <header>
            {/* Your header content */}
          </header>
          <main>
            {children}
          </main>
          <footer>
            {/* Your footer content */}
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
