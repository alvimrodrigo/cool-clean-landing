import { motion } from "framer-motion";
import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
    </div>

    <div className="container relative z-10 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 text-sm text-primary-foreground mb-6">
          <Snowflake className="w-4 h-4" />
          Refrigeração &amp; Higienização Profissional
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Ar puro e ambiente{" "}
          <span className="text-secondary">saudável</span> para sua família
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
          Instalação, manutenção e higienização de ar-condicionado e estofados
          com qualidade e pontualidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold"
            asChild
          >
            <a href="#contato">
              Solicite um Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="#servicos">Nossos Serviços</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
