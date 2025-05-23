
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    const form = e.target as HTMLFormElement;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  try {
    const response = await fetch("https://backend-lp.vercel.app/api/trello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar mensagem");
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    alert("Erro ao enviar. Tente novamente.");
  }
};
    

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-gray-600">
            Estou disponível para ajudar seu negócio a crescer com estratégias personalizadas de marketing. Entre em contato!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input 
                  id="subject" 
                  placeholder="Qual o assunto?" 
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Como posso ajudar?" 
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-8">
                Enviar Mensagem <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">glendamrkt@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-800">Telefone</h4>
                  <p className="text-gray-600 mt-1">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-800">Localização</h4>
                  <p className="text-gray-600 mt-1">Rio De Janeiro, RJ - Brasil</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Siga-me nas redes sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/glendacarvalhomkt/?hl=pt-br" target="_blank" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Instagram className="h-6 w-6 text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/glenda-carvalho-6a5a86248/" target="_blank" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
                <a href="https://wa.me/+5521985552587" target="_blank" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </a>
              </div>
            </div>
            
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940804.1718932282!2d-44.105434308878834!3d-22.912769753886522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1743788999898!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "0.8rem" }}
                allowFullScreen
                loading="lazy"
                title="Localização"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
