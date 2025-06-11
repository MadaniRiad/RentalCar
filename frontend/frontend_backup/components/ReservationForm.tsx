"use client";

import { useState } from "react";

interface ReservationFormProps {
  carName: string;
}

const ReservationForm = ({ carName }: ReservationFormProps) => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    permis: "",
    dateDebut: "",
    dateFin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      permis: form.permis,
      dateDebut: form.dateDebut,
      dateFin: form.dateFin,
      voiture: carName,
    };

    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("Réservation enregistrée !");
      setForm({
        nom: "",
        email: "",
        telephone: "",
        permis: "",
        dateDebut: "",
        dateFin: "",
      });
    } else {
      alert("Erreur lors de la réservation.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 rounded-lg p-6 mt-8 shadow-md"
    >
      <h3 className="text-xl font-bold mb-4">Réserver {carName}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          value={form.nom}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />

        <input
          type="text"
          name="permis"
          placeholder="N° de Permis de conduire"
          value={form.permis}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />

        <input
          type="date"
          name="dateDebut"
          value={form.dateDebut}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />

        <input
          type="date"
          name="dateFin"
          value={form.dateFin}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Envoyer la demande
      </button>
    </form>
  );
};

export default ReservationForm;
