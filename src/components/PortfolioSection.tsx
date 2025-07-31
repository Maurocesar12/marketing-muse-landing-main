
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import imagemPerfil from "../image/imagem_not.webp";

const PortfolioSection = () => {
  return (
    <section id="Sobre Mim" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Se o seu conteúdo não alcança as pessoas certas ou você se sente sobrecarregada tentando dar conta de tudo sozinha…
            </h2>
            <p className="text-xl text-grey-600 mb-6 ">Respira. Você não precisa fazer isso sem ajuda.</p>
            <p className="text-gray-600 mb-4">
            O meu serviço foi criado para te dar clareza, leveza e resultado.
            Aqui, a estratégia é feita sob medida, nada de fórmula pronta. <br />

            Eu mergulho na sua essência, entendo seu negócio de verdade e traduzo isso em uma comunicação que atrai, conecta e vende.
            Tudo com autenticidade, propósito e intenção.

            <p className="mt-1">Porque sua mensagem merece ser ouvida por quem realmente importa.</p>
            </p>
          </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src= {imagemPerfil}
              alt="Sobre Glenda Marketing"
              className="w-full h-[500px] object-cover opacity-95"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-blue-300 rounded-full z-0"></div>
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-200 rounded-full z-0"></div>
          
        </div>
       </div>
       <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base mt-8" onClick={() => window.open("https://wa.me/+5521985552587", "_blank")}>
            Precisso disso!
           </Button>

          </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
