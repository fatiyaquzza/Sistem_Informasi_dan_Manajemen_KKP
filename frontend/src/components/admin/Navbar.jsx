import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa'; // Contoh menggunakan FontAwesome

const Navbar = () => {

  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center h-16 px-4 md:px-16">
          <Link to="/dashboard" className="text-xl font-Poppins font-bold text-black">
            Admin LKBH Sata Al-Faqih
          </Link>

          <div className="flex items-center">
            <p className="text-black rounded capitalize font-semibold mr-2">
              Halo, {user && user.name}
            </p>
            <FaUser className="text-gray-600 text-lg" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;