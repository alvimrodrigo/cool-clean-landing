import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Phone } from "lucide-react"; // Importei o Phone para o botão de ligar
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-[90vh] flex items-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Técnico ArClean realizando manutenção de ar-condicionado em Salvador"
        className="w-full h-full object-cover object-[75%_center] md:object-center" 
        /* Explicação DevOps: O object-[75%] empurra a foto para a esquerda no mobile, 
           mantendo o rosto dele (que está na direita) centralizado na tela do celular */
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
          com qualidade e pontualidade em Salvador e Região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold shadow-xl"
            asChild
          >
            {/* Link direto para o WhatsApp já que removemos o formulário */}
            <a href="https://wa.me/5571983815959?text=Olá, vim pelo site e gostaria de um orçamento!">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          
          {/* Novo Botão Ligar Agora - Excelente para converter público mais velho */}
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 shadow-xl"
            asChild
          >
            <a href="tel:71983815959">
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