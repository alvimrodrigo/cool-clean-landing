import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Wrench,
  Wind,
  SprayCan,
  Sofa,
  Droplets,
  BedDouble,
  Fan,
  ArrowRight,
} from "lucide-react";

const refrigeracao = [
  {
    icon: Snowflake,
    title: "Instalação de Ar-Condicionado",
    desc: "Especialista em todos os tipos de equipamentos de refrigeração e climatização residencial, comercial e industrial em Salvador.",
    href: "/instalacao-ar-condicionado-salvador",
  },
  {
    icon: Wrench,
    title: "Manutenção de Ar-Condicionado",
    desc: "Manutenção preventiva e corretiva para garantir eficiência energética e durabilidade dos seus equipamentos.",
    href: "/manutencao-ar-condicionado-salvador",
  },
  {
    icon: Fan,
    title: "Limpeza Preventiva e Higienização de Ar-condicionado",
    desc: "Higienização completa de Split e demais modelos, eliminando fungos e bactérias do sistema de climatização.",
    href: "/higienizacao-ar-condicionado-salvador",
  },
  {
    icon: Wind,
    title: "Manutenção Industrial",
    desc: "Manutenção especializada em câmaras frias e balcões refrigerados para o setor comercial e industrial em Salvador.",
    href: "/climatizacao-industrial-salvador",
  },
];

const higienizacao = [
  {
    icon: SprayCan,
    title: "Limpeza de Sofás em Salvador",
    desc: "Lavagem com Secagem Rápida e Profissional de sofás, eliminando ácaros, bactérias e manchas.",
    href: "/limpeza-de-sofa-salvador",
  },
  {
    icon: Sofa,
    title: "Higienização de Poltronas e Carpetes",
    desc: "Limpeza especializada de poltronas, carpetes e tapetes com produtos antialérgicos.",
    href: "/limpeza-de-poltronas-salvador",
  },
  {
    icon: BedDouble,
    title: "Lavagem de Colchões",
    desc: "Higienização profunda de colchões com foco em saúde e bem-estar — elimine ácaros e proporcione noites mais saudáveis.",
    href: "/limpeza-de-colchao-salvador",
  },
  {
    icon: Droplets,
    title: "Lavagem de Estofados",
    desc: "Serviço completo com Lavagem com Secagem Rápida e Profissional para estofados automotivos e residenciais.",
    href: "/limpeza-de-estofados-salvador",
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

type ServiceItem = {
  icon: typeof Snowflake;
  title: string;
  desc: string;
  href?: string;
};

const ServiceCard = ({ s, i }: { s: ServiceItem; i: number }) => {
  const content = (
    <>
      <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
        <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
      {s.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
          Saiba Mais
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  const className =
    "group block rounded-xl bg-card p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 border border-border h-full";

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {s.href ? (
        <Link to={s.href} className={className}>
          {content}
        </Link>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.div>
  );
};

const ServiceGroup = ({
  title,
  services,
}: {
  title: string;
  services: ServiceItem[];
}) => (
  <div className="mb-14 last:mb-0">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
      {title}
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <ServiceCard key={s.title} s={s} i={i} />
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
