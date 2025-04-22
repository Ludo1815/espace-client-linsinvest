import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SignedIn>
        {/* Header with container for proper centering */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Espace Client LINS INVEST</h1>
            <nav className="flex gap-6 items-center">
              <Link href="/" className="hover:text-blue-600">Accueil</Link>
              <Link href="/documents" className="hover:text-blue-600">Documents</Link>
              <Link href="/rdv" className="hover:text-blue-600">Rendez-vous</Link>
              <Link href="/patrimoine" className="hover:text-blue-600">Patrimoine</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
              <UserButton afterSignOutUrl="/" />
            </nav>
          </div>
        </header>

        {/* Main content centered in container */}
        <main className="container mx-auto py-10 px-4">
          {children}
        </main>
      </SignedIn>

      <SignedOut>
        {/* Centered SignIn for unauthenticated users */}
        <div className="flex justify-center items-center h-screen">
          <SignIn />
        </div>
      </SignedOut>
    </div>
  );
}
