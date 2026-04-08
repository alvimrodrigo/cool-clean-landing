import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Equipe técnica qualificada e certificada",
  "Atendimento rápido, pontual e confiável",
  "Produtos de alta qualidade e segurança",
  "Garantia em todos os serviços",
  "Orçamento sem compromisso",
  "Atendimento em toda a Região Metropolitana de Salvador",
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
            Quem Somos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a ArClean
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A ArClean é referência em refrigeração e higienização de estofados
            em Salvador e toda a Região Metropolitana. Atuamos com compromisso,
            confiança e pontualidade para garantir o melhor resultado em cada
            serviço.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nossos técnicos são qualificados e utilizam equipamentos de última
            geração, assegurando ambientes mais saudáveis e equipamentos
            funcionando com máxima eficiência para residências e empresas.
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
