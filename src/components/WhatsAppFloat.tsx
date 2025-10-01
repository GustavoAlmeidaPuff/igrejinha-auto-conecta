import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "5551997188572";
  const whatsappMessage = "Olá! Vim através do site e gostaria de agendar um serviço.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <Button
        size="icon"
        variant="whatsapp"
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse" />
    </div>
  );
};

export default WhatsAppFloat;
