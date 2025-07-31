
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import imagemPerfil from "../image/imagemPerfil.webp";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20 md:py-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-800">
            Transformando negócios em marcas de sucesso através do <span className="text-blue-600">marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Transformo a essência do seu negócio em uma presença autêntica que atrai, conecta e vende. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
      
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base" onClick={() => window.open("https://wa.me/5521985552587", "_blank")}>            
                Quero uma Estratégia             
              </Button>

              <a
                href="https://www.instagram.com/glendacarvalhomkt/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-base">              
                Ver Serviços<ArrowRight className="ml-2 h-4 w-4" />                
              </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl h-[400px] w-[400px] mx-auto">
              <img
                src={imagemPerfil} 
                alt="Profissional de Marketing"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
