import ServicePageLayout from "@/components/ServicePageLayout";

const LimpezaPoltronas = () => (
  <ServicePageLayout
    slug="limpeza-de-poltronas-salvador"
    title="Limpeza de Poltronas e Carpetes em Salvador — ArClean"
    metaDescription="Limpeza de poltronas, cadeiras estofadas e carpetes em Salvador. Renove a estética dos seus móveis e remova poeira encruada. Orçamento no WhatsApp."
    h1="Limpeza de Poltronas e Carpetes em Salvador"
    intro="Renovamos a aparência de poltronas decorativas, cadeiras de jantar, tapetes e carpetes residenciais em toda Salvador, com produtos seguros e secagem rápida."
    whatsAppMessage="Olá, vim pelo site e gostaria de um orçamento para LIMPEZA DE POLTRONAS E CARPETES em Salvador!"
    sections={[
      {
        heading: "Devolva o aspecto de novo às suas poltronas",
        paragraphs: [
          "Aquela poltrona linda da sala perdeu a cor? As cadeiras de jantar estão com manchas de comida e gordura? O tapete ficou pesado e com cheiro estranho? Tudo isso tem solução — sem precisar comprar novos móveis.",
          "A ArClean faz limpeza de poltronas em Salvador com técnicas que removem a poeira encruada nas fibras, devolvem a maciez e renovam a estética. Trabalhamos com poltronas decorativas, reclináveis, papai, vovó, de leitura e até cadeiras de escritório.",
        ],
      },
      {
        heading: "Limpeza de cadeiras estofadas para residências e empresas",
        paragraphs: [
          "Cadeiras de jantar acumulam restos de comida, gordura, suco e refrigerante. Em pouco tempo, o tecido fica grudento e ganha um cheiro desagradável. Nossa lavagem profissional remove tudo isso e ainda aplica desinfetante para uma higiene completa.",
        ],
        bullets: [
          "Poltronas decorativas e de leitura",
          "Cadeiras de jantar e copa",
          "Cadeiras de escritório e gamer",
          "Tapetes e carpetes residenciais",
          "Carpetes comerciais e de escritório",
          "Puffs, banquetas e cabeceiras",
        ],
      },
      {
        heading: "Limpeza de carpetes em Salvador com extração profunda",
        paragraphs: [
          "Carpetes acumulam uma quantidade enorme de poeira, ácaros e bactérias — muito mais do que parece. A vassoura e o aspirador comum não dão conta de tirar a sujidade que fica grudada nas fibras mais profundas.",
          "Usamos máquinas de extração profissional que injetam a solução de limpeza e sugam toda a sujeira, devolvendo a cor original e eliminando alérgenos. O carpete fica pronto para uso no mesmo dia.",
        ],
      },
    ]}
    process={[
      {
        step: "Aspiração potente",
        desc: "Remoção de poeira, pelos e partículas com equipamento profissional.",
      },
      {
        step: "Tratamento de manchas",
        desc: "Aplicação localizada para gordura, comida e líquidos diversos.",
      },
      {
        step: "Lavagem por extração",
        desc: "Limpeza profunda que retira sujeira encruada nas fibras.",
      },
      {
        step: "Desinfecção e secagem",
        desc: "Bactericida final e secagem rápida para entrega no mesmo dia.",
      },
    ]}
    faq={[
      {
        q: "Quanto tempo leva para secar o carpete ou a poltrona?",
        a: "Em média, de 3 a 5 horas. Em ambientes ventilados, pode liberar antes.",
      },
      {
        q: "Vocês fazem o serviço na minha casa?",
        a: "Sim, todo o serviço é feito no local, com nossos equipamentos profissionais.",
      },
      {
        q: "É seguro para crianças e animais?",
        a: "Sim. Usamos produtos atóxicos, biodegradáveis e sem cheiro forte.",
      },
    ]}
    closing="Móveis renovados em poucas horas. Faça seu orçamento agora pelo WhatsApp."
  />
);

export default LimpezaPoltronas;
