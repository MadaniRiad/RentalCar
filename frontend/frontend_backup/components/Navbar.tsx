'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo + Nom */}
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <Image src="/logo.png" alt="logo" width={48} height={48} />
        KSR Limousine
      </Link>

      {/* Liens de navigation */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-blue-600 transition duration-200"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/voitures"
            className="hover:text-blue-600 transition duration-200"
          >
            Voitures
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
