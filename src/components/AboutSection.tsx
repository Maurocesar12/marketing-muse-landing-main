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
                Especialista em Marketing Digital com Foco em Resultados
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Há mais de 5 anos, tenho ajudado empresas a transformarem sua presença digital e alcançarem seus objetivos de negócio. Com formação em Marketing e especialização em estratégias digitais, trago uma abordagem analítica e criativa para cada projeto.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Certificada em Google Ads e Facebook Ads</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Experiência em análise de dados e otimização de campanha</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Especialista em SEO e estratégias de conteúdo</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="ml-3 text-gray-600">Foco em crescimento sustentável e ROI positivo</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
