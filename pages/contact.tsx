import React from 'react';
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function Contact() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedIn>
        <h1>📞 Contact & Support</h1>
        <p>Si vous avez une question ou besoin de support, vous pouvez :</p>
        <ul>
          <li>
            👉 <a href="https://calendly.com/linsinvest/rendez-vous" target="_blank">Réserver un appel via Calendly</a>
          </li>
          <li>
            👉 <a href="https://wa.me/41799169160" target="_blank">Nous écrire sur WhatsApp</a>
          </li>
        </ul>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
