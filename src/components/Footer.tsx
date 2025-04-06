import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Glenda Carvalho</h3>
            <p className="text-gray-300 mb-6">
              Soluções personalizadas de marketing digital para aumentar sua presença online e convertê-la em resultados reais.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/glendacarvalhomkt/?hl=pt-br" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">glendamrkt@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">Rio de Janeiro, RJ - Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Me chame Aqui</h4>
            <p className="text-gray-300 mb-4">
              Receba mais dicas deixando seu email!
            </p>
            <div className="flex">
              <Input 
                placeholder="Seu email" 
                className="bg-gray-800 border-gray-700 text-white rounded-r-none focus:border-blue-500 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Glenda Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
