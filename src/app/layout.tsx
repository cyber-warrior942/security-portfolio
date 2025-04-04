import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usama Zahoor - Security Professional",
  description: "Professional portfolio of Usama Zahoor, a dedicated Penetration Tester and Security Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#0a0f1a]`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <nav className="bg-white backdrop-blur-sm border-b border-navy-200 sticky top-0 z-50">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <Link href="/" className="text-2xl font-extrabold text-[#0a0f1a] hover:text-navy-600 transition-colors">
                    Portfolio
                  </Link>
                  
                  <div className="flex space-x-6">
                    {[
                      { href: '/', label: 'Home' },
                      { href: '/about', label: 'About' },
                      { href: '/projects', label: 'Projects' },
                      { href: '/hall-of-fame', label: 'Recognitions' },
                      { href: '/blog', label: 'Blog' },
                      { href: '/contact', label: 'Contact' }
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-[#0a0f1a] font-bold hover:text-navy-600 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-white border-t border-navy-200 py-6 text-center text-[#0a0f1a]">
              <p className="font-bold">&copy; 2024 Portfolio. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
