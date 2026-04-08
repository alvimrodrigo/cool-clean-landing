import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const info = [
  { icon: Phone, label: "(00) 00000-0000" },
  { icon: Mail, label: "contato@arclean.com.br" },
  { icon: MapPin, label: "Sua Cidade - Estado" },
  { icon: Clock, label: "Seg - Sáb: 8h às 18h" },
];

const Contact = () => (
  <section id="contato" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
          Fale conosco
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Solicite seu Orçamento
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 bg-card p-8 rounded-xl border border-border shadow-[var(--card-shadow)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input placeholder="Seu nome" className="bg-muted/50" />
          <Input placeholder="Telefone / WhatsApp" className="bg-muted/50" />
          <Input placeholder="E-mail" type="email" className="bg-muted/50" />
          <Textarea placeholder="Descreva o serviço desejado..." rows={4} className="bg-muted/50" />
          <Button type="submit" className="w-full font-semibold" size="lg">
            Enviar Mensagem
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-center gap-6"
        >
          {info.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-foreground font-medium">{item.label}</span>
            </div>
          ))}

          <div className="mt-4">
            <Button variant="secondary" size="lg" className="font-semibold" asChild>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
