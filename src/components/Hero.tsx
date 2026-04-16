import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/5571983815959?text=" +
  encodeURIComponent(
    "Olá, vim pelo site e gostaria de solicitar um orçamento!"
  );

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Técnico ArClean realizando manutenção de ar-condicionado em Salvador"
        className="w-full h-full object-cover object-[70%_20%] md:object-center"
      />
      {/* Overlay duplo para máximo contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="container relative z-10 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 text-sm text-primary-foreground mb-6 border border-primary-foreground/20">
          <Snowflake className="w-4 h-4" />
          Refrigeração &amp; Higienização Profissional
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
        >
          Ar puro e ambiente{" "}
          <span className="text-secondary">saudável</span> para sua família
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/95 mb-8 max-w-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
        >
          Instalação, manutenção e higienização de ar-condicionado e estofados
          com qualidade e pontualidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold shadow-xl"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicite um Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            className="text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
            asChild
          >
            <a href="tel:+5571983815959">
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
