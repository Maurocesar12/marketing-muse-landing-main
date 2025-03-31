
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import img1 from "../image/Logo.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mariana Silva",
      role: "CEO, Empresa de Tecnologia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Contratar a Amanda foi a melhor decisão que tomamos para nosso marketing. Em apenas 3 meses, nossas vendas aumentaram em 40% com as estratégias que ela implementou.",
      stars: 5
    },
    {
      id: 2,
      name: "Rafael Oliveira",
      role: "Fundador, Startup de Saúde",
      image: img1,
      quote: "A estratégia de SEO desenvolvida pela Amanda transformou completamente nossa visibilidade online. Hoje estamos na primeira página do Google para as palavras-chave mais importantes do nosso mercado.",
      stars: 5
    },
    {
      id: 3,
      name: "Carla Mendes",
      role: "Diretora de Marketing, E-commerce",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Profissional extremamente dedicada e criativa. Nossas campanhas nas redes sociais nunca tiveram tanto engajamento e conversão desde que a Amanda assumiu a gestão.",
      stars: 5
    },
    {
      id: 4,
      name: "Pedro Gomes",
      role: "Proprietário, Restaurante",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "As estratégias de marketing local implementadas pela Amanda trouxeram um aumento significativo de clientes para nosso restaurante. Sua visão estratégica é impressionante.",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-medium">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            O Que Meus Clientes Dizem
          </h2>
          <p className="text-gray-600">
            Conheça a experiência de quem já transformou seus resultados com nossas estratégias de marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-md overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < testimonial.stars
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
