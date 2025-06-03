"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- importe le router

const SearchSection = () => {
  const router = useRouter(); // <-- instancie le router

  const [filters, setFilters] = useState({
    marque: "",
    type: "",
    dateDebut: "",
    dateFin: "",
  });

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (filters.marque) queryParams.append("marque", filters.marque);
    if (filters.type) queryParams.append("type", filters.type);
    if (filters.dateDebut) queryParams.append("dateDebut", filters.dateDebut);
    if (filters.dateFin) queryParams.append("dateFin", filters.dateFin);

    router.push(`/voitures?${queryParams.toString()}`);
  };

  return (
    <section id="recherche" className="w-full bg-white py-10 px-4">
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
          Trouvez votre voiture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Marque"
            value={filters.marque}
            onChange={(e) =>
              setFilters({ ...filters, marque: e.target.value })
            }
            className="p-2 rounded-md border w-full"
          />

          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
            className="p-2 rounded-md border w-full"
          >
            <option value="">Type</option>
            <option value="SUV">SUV</option>
            <option value="Citadine">Citadine</option>
            <option value="Berline">Berline</option>
            <option value="Cabriolet">Cabriolet</option>
          </select>

          <input
            type="date"
            value={filters.dateDebut}
            onChange={(e) =>
              setFilters({ ...filters, dateDebut: e.target.value })
            }
            className="p-2 rounded-md border w-full"
          />

          <input
            type="date"
            value={filters.dateFin}
            onChange={(e) =>
              setFilters({ ...filters, dateFin: e.target.value })
            }
            className="p-2 rounded-md border w-full"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Voir les voitures
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
