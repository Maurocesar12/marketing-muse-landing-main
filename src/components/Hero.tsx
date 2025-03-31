
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import imagemPerfil from "../image/imagemPerfil.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-800">
              Estratégias de <span className="text-blue-600">Marketing</span> que Transformam Resultados
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Especialista em soluções personalizadas de marketing digital para
              aumentar sua presença online e convertê-la em resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base">
                Agendar Consulta
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base">
                Ver Serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl h-[400px] w-[400px] mx-auto">
              <img
                src={imagemPerfil} 
                alt="Profissional de Marketing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
