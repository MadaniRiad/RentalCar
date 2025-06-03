"use client";

import Image from "next/image";
import Link from "next/link";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src="/cars/ms4.jpg"
        alt="Voiture de location"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-start h-full text-center px-4 pt-24 md:pt-32">
        
        {/* Titre animé */}
        <motion.h2
          className="text-blue-300 text-3xl md:text-4xl font-bold mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trouvez votre voiture idéale
        </motion.h2>

        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          À la recherche d’un véhicule de luxe ?
          <br />
          Vous êtes au bon endroit.
        </motion.h1>

        {/* Avantages */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 text-white mt-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[
            "Qualité supérieure à petit prix",
            "Services premium inclus",
            "Assistance routière 24h/24",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="text-blue-400 w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bouton animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <Link
            href="#recherche"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition shadow-lg"
          >
            Voir les voitures
          </Link>
        </motion.div>

        

      </div>
    </section>
  );
};

export default Hero;
