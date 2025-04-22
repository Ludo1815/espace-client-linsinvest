import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function RendezVous() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedIn>
        <h1>📅 Mes rendez-vous</h1>
        <ul>
          <li>✅ 12 mars 2025 — Analyse stratégique</li>
          <li>✅ 22 mars 2025 — Structure juridique</li>
          <li>🔜 2 mai 2025 — Plan d’action final</li>
        </ul>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
