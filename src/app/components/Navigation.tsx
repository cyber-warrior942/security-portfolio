'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300';
  };

  return (
    <nav className="bg-navy-600/50 backdrop-blur-sm border-b border-navy-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-navy-300 transition-colors">
            Security Portfolio
          </Link>
          
          <div className="flex space-x-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-navy-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 