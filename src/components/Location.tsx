import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const whatsappNumber = "5551997188572";
  const whatsappMessage = "Olá! Vi o site e gostaria de mais informações.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Onde Estamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nossa oficina em Igrejinha e confira nossos serviços de perto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Igrejinha, RS<br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">
                      (51) 99718-8572
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h - 18h<br />
                      Sábado: 8h - 12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button
                  size="lg"
                  variant="whatsapp"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full"
                >
                  Entre em Contato pelo WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27716.29157145491!2d-50.7958!3d-29.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95193d46e4e4a8f9%3A0x4d32f1c6dbf0d45a!2sIgrejinha%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização DRP Mecânica Automotiva - Igrejinha, RS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
