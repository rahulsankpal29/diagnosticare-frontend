import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-xl font-bold">DiagnostiCare</div>
      <ul className="flex gap-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Login</li>
        <li className="hover:underline cursor-pointer">Book Test</li>
      </ul>
    </nav>
  );
};

export default Navbar;
