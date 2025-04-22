import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider localization={{
      signIn: {
        start: {
          title: "Connexion à votre espace",
          subtitle: "Entrez votre adresse email pour continuer",
          actionText: "Continuer",
        },
        alternativeMethods: {
          title: "Ou utilisez une autre méthode",
        },
      },
      signUp: {
        start: {
          title: "Créer un compte",
          subtitle: "Saisissez votre email pour créer un compte",
          actionText: "S'inscrire",
        },
      }
    }}>
      <Component {...pageProps} key={pathname} />
    </ClerkProvider>
  );
}
