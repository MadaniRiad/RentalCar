import Image from "next/image";
import Link from "next/link";

const cars = [
  
  {
    id: "mercedes-s",
    marque: "Mercedes",
    modele: "Classe S",
    image: "/cars/ms1.jpg",
    prix: "120€/jour",
  },
  {
    id: "mercedes-v",
    marque: "Mercedes",
    modele: "Classe V",
    image: "/cars/v2.jpg",
    prix: "110€/jour",
  },
  {
    id: "mercedes-e",
    marque: "Mercedes",
    modele: "Classe E",
    image: "/cars/me1.jpg",
    prix: "100€/jour",
  },
  {
    id: "landrover-sport",
    marque: "Range Rover",
    modele: "Sport",
    image: "/cars/rang1.jpg",
    prix: "130€/jour",
  },


  
];

const TopCars = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Voitures les plus demandées
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Link
           
          href={`/voitures/${car.id}`} 
          key={car.id}
          className="block bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">

            <div className="relative w-full h-48">
              <Image
                src={car.image}
                alt={`${car.marque} ${car.modele}`}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-900">
                {car.marque} {car.modele}
              </h4>
              <p className="text-blue-600 font-bold">{car.prix}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCars;
