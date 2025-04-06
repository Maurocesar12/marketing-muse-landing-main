import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import imagePerfil from "../image/section.png"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src= {imagePerfil}
                alt="Sobre Glenda Marketing"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-blue-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-200 rounded-full z-0"></div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Sou Glenda Carvalho, estrategista de marketing com quase 6 anos de experiência.
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
            Minha missão é ajudar empreendedoras a transformarem a essência do seu negócio em uma presença estratégica que atrai, conecta e vende de forma autêntica e intencional. <br />Aqui, você não encontra apenas posts bonitos, mas um direcionamento claro e personalizado, pensado para gerar resultados reais e posicionar o seu negócio do jeito certo.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">A estratégia é única, assim como o seu negócio.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Clareza  na comunicação.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Alinhamento genuíno com a essência da sua marca.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Foco no crescimento do seu negócio</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
