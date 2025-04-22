import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/documents', label: 'Documents' },
  { href: '/rdv', label: 'Rendez-vous' },
  { href: '/patrimoine', label: 'Patrimoine' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <SignedIn>
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Espace Client LINS INVEST</h1>
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 transition ${pathname === item.href ? 'bg-blue-100 text-blue-600' : ''}`}>
                  {item.label}
                </Link>
              ))}
              <UserButton afterSignOutUrl="/" />
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto flex-grow px-6 py-8">
          {children}
        </main>
      </SignedIn>

      <SignedOut>
        {/* Sign-in centered full-screen */}
        <div className="flex grow justify-center items-center bg-gray-50">
          <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
        </div>
      </SignedOut>

      <footer className="bg-white border-t py-4 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LINS INVEST. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
