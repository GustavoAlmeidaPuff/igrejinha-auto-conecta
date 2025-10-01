import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-drp.png";

const Hero = () => {
  const whatsappNumber = "5551997188572";
  const whatsappMessage = "Olá! Gostaria de agendar um serviço na DRP Mecânica.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-64 md:w-80 animate-fade-in">
            <img src={logo} alt="DRP Mecânica Automotiva" className="w-full h-auto drop-shadow-2xl" />
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Seu Carro em Boas Mãos
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Mecânica automotiva de confiança em Igrejinha, RS
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Serviços completos com qualidade e garantia
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="xl"
              variant="hero"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Agende Seu Serviço Agora
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/90">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
