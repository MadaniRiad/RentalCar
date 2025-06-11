// app/api/reservations/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  console.log('Nouvelle réservation reçue :', data);

  // Simuler un enregistrement (tu pourras le remplacer par une DB plus tard)
  // Ex: enregistrer dans un fichier ou juste afficher dans le terminal pour le moment

  return NextResponse.json({ success: true, message: 'Réservation enregistrée' });
}
