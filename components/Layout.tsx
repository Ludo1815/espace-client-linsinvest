import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SignedIn>
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Espace Client LINS INVEST</h1>
          <nav className="flex gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/documents">Documents</Link>
            <Link href="/rdv">Rendez-vous</Link>
            <Link href="/patrimoine">Patrimoine</Link>
            <Link href="/contact">Contact</Link>
            <UserButton afterSignOutUrl="/" />
          </nav>
        </header>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <SignIn />
        </div>
      </SignedOut>

      <SignedIn>
        <main className="max-w-4xl mx-auto py-10 px-4">
          {children}
        </main>
      </SignedIn>
    </div>
  );
}
