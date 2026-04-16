import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5571983815959?text=" +
  encodeURIComponent(
    "Olá, vim pelo site e gostaria de solicitar um orçamento!"
  );

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.7-2.32-1.65-2.708-1.65zm-2.94 7.456c-.928 0-1.864-.13-2.764-.4l-1.97 1.187 1.224-1.93a8.93 8.93 0 0 1-3.8-7.355c0-4.964 4.04-9.005 9.005-9.005s9.005 4.04 9.005 9.005-4.04 9.005-9.005 9.005zm0-19.728c-5.91 0-10.722 4.81-10.722 10.722 0 1.95.526 3.842 1.527 5.51L4 27.495l5.18-1.703a10.66 10.66 0 0 0 5.99 1.83h.005c5.91 0 10.722-4.812 10.722-10.722 0-2.864-1.116-5.554-3.142-7.578a10.65 10.65 0 0 0-7.58-3.143z" />
  </svg>
);

const info = [
  { icon: Phone, label: "(71) 98381-5959" },
  { icon: Mail, label: "contato@arclean.com.br" },
  { icon: MapPin, label: "Salvador — Região Metropolitana" },
  { icon: Clock, label: "Seg - Sáb: 8h às 18h" },
];

const Contact = () => (
  <section id="contato" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          Fale conosco
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Solicite seu Orçamento
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
          Atendimento rápido pelo WhatsApp ou ligue diretamente. Resposta em minutos!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-card p-8 md:p-10 rounded-2xl border border-border shadow-[var(--card-shadow)]"
      >
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {info.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="flex-1 font-bold text-base md:text-lg h-14 md:h-16 bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg rounded-xl"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-2" />
              Solicitar Orçamento
            </a>
          </Button>
          <Button
            className="flex-1 font-bold text-base md:text-lg h-14 md:h-16 shadow-lg rounded-xl"
            asChild
          >
            <a href="tel:+5571983815959">
              <Phone className="w-6 h-6 mr-2" />
              Ligar Agora
            </a>
          </Button>
          <Button
            variant="outline"
            className="font-semibold h-14 md:h-16 px-5 rounded-xl"
            asChild
          >
            <a
              href="https://instagram.com/arcleanba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @arcleanba"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
