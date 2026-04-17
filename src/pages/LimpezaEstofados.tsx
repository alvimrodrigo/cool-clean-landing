import ServicePageLayout from "@/components/ServicePageLayout";

const LimpezaEstofados = () => (
  <ServicePageLayout
    slug="limpeza-de-estofados-salvador"
    category="estofados"
    title="Limpeza de Estofados em Salvador | Residências e Veículos — ArClean"
    metaDescription="Limpeza de estofados em Salvador: bancos de carro, sofás, puffs, carrinhos de bebê e cabeceiras. Pacote completo para casa toda. Orçamento no WhatsApp."
    h1="Limpeza de Estofados em Salvador para Residências e Veículos"
    intro="Lavagem completa de estofados residenciais e automotivos em Salvador. Ideal para quem quer renovar a casa toda de uma vez ou higienizar o carro com qualidade profissional."
    whatsAppMessage="Olá, vim pelo site e gostaria de um orçamento para LIMPEZA DE ESTOFADOS em Salvador!"
    sections={[
      {
        heading: "O pacote completo de higienização para sua casa e seu carro",
        paragraphs: [
          "Quer aquela sensação de casa nova sem precisar reformar? A limpeza de estofados em Salvador é o caminho mais rápido e econômico. A ArClean cuida de tudo — sofá, poltronas, colchões, cabeceiras, puffs, carrinho do bebê e até os bancos do seu carro.",
          "Trabalhamos com pacotes personalizados: você nos diz o que precisa e montamos um orçamento sob medida, com desconto progressivo para múltiplos itens. Tudo feito no mesmo dia, no seu endereço.",
        ],
      },
      {
        heading: "O que higienizamos",
        paragraphs: [
          "Atendemos uma ampla variedade de estofados, sempre com o método e o produto adequado para cada tipo de tecido e situação.",
        ],
        bullets: [
          "Bancos de carro (carro popular, SUV, utilitário)",
          "Sofás de todos os tamanhos e tecidos",
          "Poltronas decorativas e reclináveis",
          "Cabeceiras de cama estofadas",
          "Puffs, banquetas e ottomans",
          "Carrinhos de bebê e bebê conforto",
          "Cadeirinhas infantis para carro",
          "Cadeiras de escritório e gamer",
        ],
      },
      {
        heading: "Higienização automotiva profissional em Salvador",
        paragraphs: [
          "O interior do seu carro acumula poeira, suor, restos de comida, areia de praia e até mofo (principalmente em Salvador, com nosso clima úmido). Uma limpeza profunda nos bancos, teto e carpete deixa o carro com aquele cheirinho de novo e elimina ácaros que podem causar alergias.",
          "Trabalhamos com produtos automotivos específicos, que respeitam os materiais originais sem desbotar ou ressecar.",
        ],
      },
    ]}
    process={[
      {
        step: "Avaliação e diagnóstico",
        desc: "Identificamos os tecidos, manchas e melhor método para cada item.",
      },
      {
        step: "Aspiração completa",
        desc: "Remoção de toda sujidade sólida, poeira, pelos e areia.",
      },
      {
        step: "Lavagem por extração",
        desc: "Equipamento profissional que injeta e suga a solução de limpeza.",
      },
      {
        step: "Desinfecção e finalização",
        desc: "Aplicação de bactericida e secagem rápida em todos os itens.",
      },
    ]}
    faq={[
      {
        q: "Vocês fazem pacote para a casa toda?",
        a: "Sim! Quanto mais itens, melhor o desconto. Monte seu pacote e fale com a gente no WhatsApp.",
      },
      {
        q: "Atendem higienização de carros?",
        a: "Sim, fazemos limpeza completa do interior automotivo: bancos, teto, carpete, porta-malas e cadeirinha infantil.",
      },
      {
        q: "Em quanto tempo libera o uso?",
        a: "Em média de 3 a 6 horas, dependendo do item e da ventilação local.",
      },
      {
        q: "Atendem em toda Salvador?",
        a: "Sim, atendemos Salvador e toda a Região Metropolitana com agendamento flexível.",
      },
    ]}
    closing="Casa e carro renovados num único dia. Solicite seu pacote agora pelo WhatsApp."
  />
);

export default LimpezaEstofados;
