
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import nonnaLina from "../image/logo-nonnaLina.webp";
import MMR from "../image/logo-mmr_1.webp";
import lilian from "../image/lilian.webp";
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ilka",
      role: "CEO, Nonna Lina",
      image: nonnaLina,
      quote: "Ter a Glenda ao meu lado nessa caminhada tem sido uma experiência incrível. Ela conseguiu entender minha essência, meu propósito e transformar isso em ações reais, organizadas e cheias de significado. Com sensibilidade e profissionalismo, ela me ajudou a dar mais clareza ao meu negócio e a fortalecer minha presença nas redes sociais. Sou grata por tudo que construímos juntas até aqui e animada com o que ainda está por vir!",
      stars: 5
    },
    {
      id: 2,
      name: "Raphael",
      role: "CEO e Fundador da MMR Gases",
      image: MMR,
      quote: "A consultoria da Glenda foi extremamente importante para profissionalização digital da nossa empresa, sempre buscando novas ideias e contribuindo para o crescimento profissional de cada setor na nossa empresa!",
      stars: 5
    },
    {
      id: 3,
      name: "Lilian Kelly ",
      role: "CEO da Mundo Doce da Lilian",
      image: lilian,
      quote: "Em março de 2024 nos conhecemos através de um evento e iniciamos um lindo trabalho, onde você vem ajudando muito a nossa Loja a se tornar uma Empresa diferenciada, estratégica e conhecida através do nosso trabalho. Hoje somos reconhecido, valorizado e possuímos uma  posição firme nas Mídias sociais que só foi possível devido ao seu empenho e desempenho conosco. Através do seu trabalho me sinto mas dinâmica, estratégica e criativa para criar conteúdos que antes sem sua ajuda não me sentia preparada.",
      stars: 5
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
