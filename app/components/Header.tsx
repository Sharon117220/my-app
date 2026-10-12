"use client";

import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <h2 className="text-xl font-bold text-blue-600">MyWebsite</h2>

        <Nav isOpen={isMenuOpen} />

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
