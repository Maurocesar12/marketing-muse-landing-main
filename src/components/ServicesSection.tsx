
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, Search, Globe, MessageSquare, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Estratégia de Marketing e Conteúdo",
      description: "Minhas estratégias são guiadas por dados, não por achismos. Analiso mercado, concorrência e o comportamento do seu público para criar posicionamento autêntico e ações com propósito."
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Consultoria - Marketing e Conteúdo",
      description: "Unindo estratégia, criatividade e comportamento do consumidor, ajudo você a desenvolver ações inteligentes, inovadoras e alinhadas ao seu mercado, garantindo diferencial competitivo."
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Gestão de Mídias Sociais",
      description: "Gerencio suas redes com estratégia e intenção. O conteúdo é pensado para posicionar, engajar e vender. Atendimento próximo, testes constantes, análise de dados e otimizações para garantir resultados reais e consistentes no digital."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Diagnóstico Express",
      description: "Em poucos dias, você já tem um direcionamento claro para melhorar seu perfil. Análise  e orientações baseadas em técnicas de marketing digital e posicionamento."
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-600" />,
      title: "Consultoria - Marketing e Gestão para Negócios",
      description: "Antes de qualquer estratégia, analisamos onde sua empresa está, quais são os desafios e quais oportunidades podem ser exploradas.Focando não apenas no marketing, mas também a gestão, processos e ações estratégicas do negócio."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Storymaker - Gravação de conteúdo",
      description: "Gere desejo e transmita autoridade através de conteúdos de qualidade para o seu negócio!"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Soluções de Marketing para o seu negócio.
          </h2>
          <p className="text-gray-600">
            Ofereço serviços personalizados para atender às necessidades específicas do seu negócio,
            desde estratégia até implementação e análise de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base">
          <a
             href="https://wa.me/+5521985552587"
             target="_blank"
             rel="noopener noreferrer"
          >
            Quero saber mais!
          </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
