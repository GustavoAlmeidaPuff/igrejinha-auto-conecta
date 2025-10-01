import { Wrench, Zap, Settings, Droplet } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Manutenção Preventiva",
    description: "Troca de óleo, filtros e revisões completas para manter seu veículo em perfeito estado.",
  },
  {
    icon: Zap,
    title: "Sistema Elétrico",
    description: "Diagnóstico e reparo de sistemas elétricos, bateria, alternador e injeção eletrônica.",
  },
  {
    icon: Wrench,
    title: "Suspensão e Freios",
    description: "Manutenção e troca de componentes de suspensão, freios e alinhamento.",
  },
  {
    icon: Droplet,
    title: "Troca de Óleo",
    description: "Serviço rápido de troca de óleo com produtos de qualidade e preço justo.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços automotivos com qualidade e compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
