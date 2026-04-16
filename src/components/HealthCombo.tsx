import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartPulse, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Livre de Ácaros",
    desc: "Eliminação profunda de ácaros em estofados e ar-condicionado.",
  },
  {
    icon: Sparkles,
    title: "Livre de Vírus",
    desc: "Sanitização que neutraliza vírus em superfícies e no ar.",
  },
  {
    icon: HeartPulse,
    title: "Livre de Bactérias",
    desc: "Ambientes 100% higienizados para sua saúde e bem-estar.",
  },
];

const HealthCombo = () => (
  <section id="saude" className="py-20 md:py-28 bg-accent/40">
    <div className="container">
      {/* Bloco saúde */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          Saúde &amp; Bem-Estar
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ambiente Saudável e Livre de Ameaças
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Nossos serviços garantem um ambiente livre de ácaros, vírus e bactérias —
          proporcionando mais qualidade de vida para sua família e equipe.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center border border-border shadow-[var(--card-shadow)]"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Banner Pacotes Combinados */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary to-secondary p-8 md:p-12 shadow-xl"
      >
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-3 py-1 text-xs font-semibold mb-4">
              <Package className="w-4 h-4" />
              PACOTES COMBINADOS
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
              Cuide da sua saúde e do seu conforto em um único lugar
            </h3>
            <p className="text-primary-foreground/90 max-w-xl">
              Descontos exclusivos para clientes que contratam serviços de{" "}
              <strong>Refrigeração</strong> e <strong>Higienização de Estofados</strong> juntos.
              Mais economia, mais saúde, mais praticidade.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold text-base shadow-xl whitespace-nowrap"
            asChild
          >
            <a href="#contato">Quero o Combo</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HealthCombo;
