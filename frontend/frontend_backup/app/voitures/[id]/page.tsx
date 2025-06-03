import { notFound } from "next/navigation";

type CarId = "mercedes-s" | "mercedes-v" | "mercedes-e" | "landrover-sport";

const cars: Record<CarId, { nom: string; prix: string }> = {
  "mercedes-s": { nom: "Mercedes Classe S", prix: "120€/jour" },
  "mercedes-v": { nom: "Mercedes Classe V", prix: "110€/jour" },
  "mercedes-e": { nom: "Mercedes Classe E", prix: "100€/jour" },
  "landrover-sport": { nom: "Land Rover Sport", prix: "130€/jour" },
};

export default function VoitureDetail({ params }: { params: { id: CarId } }) {
  const car = cars[params.id];

  if (!car) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{car.nom}</h1>
      <p className="text-lg text-gray-700 mb-2">Prix : {car.prix}</p>
      <p>Description détaillée à venir...</p>
    </div>
  );
}

