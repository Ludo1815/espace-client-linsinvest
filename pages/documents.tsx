import React from 'react';
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function Documents() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedIn>
        <h1>📁 Mes documents</h1>
        <ul>
          <li><a href="#">📄 Contrat d'accompagnement.pdf</a></li>
          <li><a href="#">📄 Feuille de route stratégie.pdf</a></li>
          <li><a href="#">📄 Déclaration fiscale - Simulation.xlsx</a></li>
        </ul>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
