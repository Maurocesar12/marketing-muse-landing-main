
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../image/logoTop_cortada.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#Sobre Mim", label: "Sobre Mim" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-400">
           <img src={logo} alt="Logo" className="h-14 w-auto max-h-16" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>
          
          <a
          href="https://wa.me/+5521985552587"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Button className="hidden md:block bg-blue-500 hover:bg-blue-700">          
            Entrar em contato         
          </Button>
          </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
            href="https://wa.me/+5521985552587"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              Agendar Consulta
            </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
