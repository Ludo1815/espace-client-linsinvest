import React from 'react';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedIn>
        <h1>Bonjour {user?.firstName || 'Client'} 👋</h1>
        <p>Bienvenue sur votre espace personnel.</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
