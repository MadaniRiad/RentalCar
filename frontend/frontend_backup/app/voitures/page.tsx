import Link from "next/link";

const cars = [
  { id: "mercedes-s", nom: "Mercedes Classe S" },
  { id: "mercedes-v", nom: "Mercedes Classe V" },
  { id: "mercedes-e", nom: "Mercedes Classe E" },
  { id: "landrover-sport", nom: "Land Rover Sport" },
];

export default function VoituresPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid grid-cols-4 gap-4">
      {cars.map((car) => (
        <Link href={`/voitures/${car.id}`} key={car.id}>
          <div className="cursor-pointer border rounded shadow p-4 hover:shadow-lg">
            <h2 className="text-lg font-semibold">{car.nom}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
