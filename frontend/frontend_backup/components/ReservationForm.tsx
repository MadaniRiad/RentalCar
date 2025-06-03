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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Réservation :", { voiture: carName, ...form });
    alert("Demande de réservation envoyée !");
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
                  id="permis"
                  value={form.permis || ""}
                  onChange={handleChange}
                  required
                  className="p-2 border rounded-md"
                  placeholder="N° de Permis de conduire"
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
