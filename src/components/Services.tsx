import { motion } from "framer-motion";
import { Snowflake, Wind, SprayCan, Wrench, ShieldCheck, ThermometerSun } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Instalação de Ar-Condicionado",
    desc: "Instalação profissional de splits, multi-splits e sistemas centrais com garantia.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    desc: "Revisões periódicas para garantir eficiência energética e durabilidade do equipamento.",
  },
  {
    icon: Wind,
    title: "Higienização de Ar-Condicionado",
    desc: "Limpeza profunda com produtos antifúngicos para um ar mais saudável.",
  },
  {
    icon: SprayCan,
    title: "Higienização de Estofados",
    desc: "Limpeza especializada de sofás, colchões e poltronas, eliminando ácaros e bactérias.",
  },
  {
    icon: ThermometerSun,
    title: "Câmaras Frigoríficas",
    desc: "Instalação e manutenção de câmaras frias para comércio e indústria.",
  },
  {
    icon: ShieldCheck,
    title: "Contratos de Manutenção",
    desc: "Planos personalizados para empresas com atendimento prioritário e preços especiais.",
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
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
