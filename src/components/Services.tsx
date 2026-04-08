import { motion } from "framer-motion";
import { Snowflake, Wrench, Wind, SprayCan, Sofa, Droplets } from "lucide-react";

const refrigeracao = [
  {
    icon: Snowflake,
    title: "Instalação de Ar-Condicionado",
    desc: "Instalação profissional de splits e multi-splits com garantia em Salvador e região.",
  },
  {
    icon: Wrench,
    title: "Manutenção de Ar-Condicionado",
    desc: "Manutenção preventiva e corretiva para garantir eficiência energética e durabilidade.",
  },
  {
    icon: Wind,
    title: "Manutenção de Geladeiras",
    desc: "Reparo e manutenção de geladeiras residenciais e comerciais em toda Salvador.",
  },
];

const higienizacao = [
  {
    icon: SprayCan,
    title: "Limpeza de Sofás em Salvador",
    desc: "Lavagem a seco profissional de sofás, eliminando ácaros, bactérias e manchas.",
  },
  {
    icon: Sofa,
    title: "Higienização de Poltronas e Carpetes",
    desc: "Limpeza especializada de poltronas, carpetes e tapetes com produtos antialérgicos.",
  },
  {
    icon: Droplets,
    title: "Lavagem de Estofados a Seco",
    desc: "Serviço completo de lavagem a seco para estofados automotivos e residenciais.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServiceGroup = ({
  title,
  services,
}: {
  title: string;
  services: typeof refrigeracao;
}) => (
  <div className="mb-14 last:mb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
      {title}
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="group rounded-xl bg-card p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 border border-border"
        >
          <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
            <s.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Services = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          O que fazemos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Nossos Serviços
        </h2>
      </div>

      <ServiceGroup
        title="Refrigeração — Manutenção de Ar-condicionado em Salvador"
        services={refrigeracao}
      />
      <ServiceGroup
        title="Higienização — Limpeza de Sofás em Salvador"
        services={higienizacao}
      />
    </div>
  </section>
);

export default Services;
