"use client";

import { motion } from "framer-motion";
import { Truck, Clock, Star, Home } from "lucide-react"; // quelques icônes sympas

const services = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Location courte et longue durée",
    description:
      "Choisissez la durée qui vous convient, du jour à plusieurs mois, avec des tarifs adaptés.",
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Assistance 24/7 sur la route",
    description:
      "Une équipe disponible à tout moment pour vous accompagner lors de votre location.",
  },
  {
    id: 3,
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Service chauffeur premium",
    description:
      "Profitez d’un chauffeur professionnel pour une expérience de luxe sans stress.",
  },
  {
    id: 4,
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Livraison et récupération à domicile",
    description:
      "Nous livrons et récupérons le véhicule à l’endroit de votre choix.",
  },
];

const Services = () => {
  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Nos Services Premium
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map(({ id, icon, title, description }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
            className="bg-white rounded-lg p-6 shadow hover:shadow-xl cursor-default"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </motion.section>
  );
};

export default Services;
