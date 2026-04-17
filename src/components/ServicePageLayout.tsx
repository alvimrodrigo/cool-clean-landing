import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export type ServicePageProps = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatsAppMessage: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  process?: { step: string; desc: string }[];
  faq?: { q: string; a: string }[];
  closing: string;
};

const otherServices = [
  { slug: "limpeza-de-sofa-salvador", label: "Limpeza de Sofá em Salvador" },
  {
    slug: "limpeza-de-poltronas-salvador",
    label: "Limpeza de Poltronas e Carpetes em Salvador",
  },
  {
    slug: "limpeza-de-colchao-salvador",
    label: "Limpeza de Colchão em Salvador",
  },
  {
    slug: "limpeza-de-estofados-salvador",
    label: "Limpeza de Estofados em Salvador",
  },
];

const ServicePageLayout = ({
  slug,
  title,
  metaDescription,
  h1,
  intro,
  whatsAppMessage,
  sections,
  process,
  faq,
  closing,
}: ServicePageProps) => {
  const whatsappUrl =
    "https://wa.me/5571983815959?text=" + encodeURIComponent(whatsAppMessage);
  const canonical = `https://arclean.com.br/${slug}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <Header />

      <main className="pt-24 md:pt-28">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/30 py-14 md:py-20 border-b border-border">
          <div className="container max-w-4xl">
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{h1}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="font-bold text-base md:text-lg h-14 md:h-16 bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg rounded-xl"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Falar no WhatsApp Agora
                </a>
              </Button>
              <Button
                variant="outline"
                className="font-bold text-base md:text-lg h-14 md:h-16 rounded-xl"
                asChild
              >
                <a href="tel:+5571983815959">
                  <Phone className="w-5 h-5 mr-2" />
                  (71) 98381-5959
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container max-w-4xl space-y-12">
            {sections.map((s) => (
              <article key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
                  {s.heading}
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 bg-accent/40 p-4 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {process && (
              <article>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Nosso Processo Profissional
                </h2>
                <ol className="grid md:grid-cols-2 gap-5">
                  {process.map((p, i) => (
                    <li
                      key={p.step}
                      className="bg-card border border-border rounded-xl p-6 shadow-[var(--card-shadow)]"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <h3 className="font-bold text-lg text-foreground">
                          {p.step}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">{p.desc}</p>
                    </li>
                  ))}
                </ol>
              </article>
            )}

            {faq && (
              <article>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faq.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            )}

            {/* CTA final */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Peça seu orçamento agora!
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                {closing}
              </p>
              <Button
                className="font-bold text-base md:text-lg h-14 md:h-16 bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg rounded-xl px-8"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* OUTROS SERVIÇOS */}
        <section className="py-14 md:py-20 bg-accent/30 border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Outros Serviços de Higienização em Salvador
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherServices
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="group flex items-center justify-between gap-3 bg-card p-5 rounded-xl border border-border hover:border-primary hover:shadow-[var(--card-shadow-hover)] transition-all"
                  >
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {s.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ServicePageLayout;
