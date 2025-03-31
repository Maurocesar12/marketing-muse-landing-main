
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, Search, Globe, MessageSquare, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "SEO",
      description: "Otimização do seu site para os motores de busca, aumentando seu tráfego orgânico e visibilidade online."
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Marketing de Performance",
      description: "Campanhas de anúncios focadas em resultados mensuráveis para maximizar seu retorno sobre investimento."
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Gestão de Mídias Sociais",
      description: "Estratégia e gerenciamento completo de suas redes sociais para engajar seu público e construir autoridade."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Marketing de Conteúdo",
      description: "Criação de conteúdo relevante e otimizado para atrair e converter seu público-alvo em clientes fiéis."
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-600" />,
      title: "Análise de Dados",
      description: "Análise profunda de métricas para otimizar suas estratégias e focar nos canais mais eficientes."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Consultoria Estratégica",
      description: "Orientação personalizada para direcionar suas decisões de marketing e alcançar seus objetivos de negócio."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Soluções Completas em Marketing Digital
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
                <Button variant="link" className="text-blue-600 p-0 mt-4 hover:text-blue-800">
                  Saiba mais →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-base">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
