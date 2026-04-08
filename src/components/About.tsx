import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Equipe técnica certificada",
  "Atendimento rápido e pontual",
  "Produtos de alta qualidade",
  "Garantia em todos os serviços",
  "Orçamento sem compromisso",
  "Atendimento residencial e comercial",
];

const About = () => (
  <section id="sobre" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Quem somos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compromisso com qualidade e confiança
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A ArClean é especialista em refrigeração e higienização de estofados,
            atuando há anos no mercado com foco em excelência, pontualidade e
            satisfação do cliente. Nossos técnicos são qualificados e utilizam
            equipamentos de última geração para garantir o melhor resultado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center p-12">
            <div className="text-center text-primary-foreground">
              <p className="text-7xl md:text-8xl font-extrabold">10+</p>
              <p className="text-xl font-medium mt-2">Anos de experiência</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-extrabold">5k+</p>
              <p className="text-xs font-medium">Clientes atendidos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
