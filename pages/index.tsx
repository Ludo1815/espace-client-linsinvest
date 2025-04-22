import React from 'react';
import Layout from '../components/Layout';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Bonjour {user?.firstName || 'Client'} 👋</h2>
      <p>Bienvenue sur votre espace client. Choisissez une section dans le menu ci-dessus pour commencer.</p>
    </Layout>
  );
}
