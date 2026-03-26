import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Galeria", path: "/gallery" },
    { name: "Você", path: "/you" },
    { name: "", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-[9999] bg-black/50 backdrop-blur-md">
      <div className="max-w-[1140px] mx-auto h-[60px] flex items-center justify-between px-4">
        {/* LOGO */}
        <h1 className="text-white font-bold text-lg">tadinhos</h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-3">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`px-3 py-1 rounded transition text-white ${
                location.pathname === item.path
                  ? "bg-[#5A189A]/70"
                  : "hover:bg-[#5A189A]/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-4 bg-black/90">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:text-[#5A189A] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
