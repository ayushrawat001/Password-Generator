import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900  text-gray-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <h1 className="text-xl font-bold">🛡️ CipherSafe</h1>
        <p className="text-2xl italic  text-gray-400">Strong. Simple. Secure.</p>
        
        <div className="space-x-4 hidden sm:block">
          <a href="#" className="hover: text-gray-400 transition duration-300 ">Home</a>
          <a href="#" className="hover: text-gray-400 transition-colors">About</a>
          <a href="#" className="hover: text-gray-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
