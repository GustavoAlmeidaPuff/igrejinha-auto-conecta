import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const CTA = () => {
  const whatsappNumber = "5551997188572";
  const whatsappMessage = "Olá! Gostaria de agendar um horário na DRP Mecânica.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Seu Carro Precisa de Atenção?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Não espere! Entre em contato agora e agende seu serviço com os melhores profissionais de Igrejinha
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="xl"
              variant="hero"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group min-w-[280px]"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Fale Conosco Agora
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">Atendimento Rápido</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">Preços Justos</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium">Garantia de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
