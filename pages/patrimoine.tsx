import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function Patrimoine() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <SignedIn>
        <h1>🏘️ Mon patrimoine</h1>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Bien</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Ville</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Appartement locatif</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Lausanne</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>CHF 460’000</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Studio</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Sion</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>CHF 210’000</td>
            </tr>
          </tbody>
        </table>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
