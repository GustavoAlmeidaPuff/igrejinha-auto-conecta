import { useEffect, useRef, useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const works = [
  {
    title: "Revisão Completa e Troca de Óleo",
    description: "Serviço completo de revisão com troca de óleo, filtros e verificação de todos os sistemas do veículo. Cliente saiu satisfeito com o carro funcionando perfeitamente.",
    image: work1,
  },
  {
    title: "Manutenção de Freios e Suspensão",
    description: "Troca completa do sistema de freios incluindo discos, pastilhas e calibradores. Também realizamos manutenção na suspensão para melhor dirigibilidade.",
    image: work2,
  },
  {
    title: "Diagnóstico Eletrônico Avançado",
    description: "Utilizamos equipamentos de última geração para diagnóstico preciso de falhas eletrônicas. Identificamos e corrigimos problemas no sistema de injeção.",
    image: work3,
  },
];

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Alguns Trabalhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos serviços que realizamos com excelência e dedicação
          </p>
        </div>

        <div className="space-y-16">
          {works.map((work, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] transition-all duration-700 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {work.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
