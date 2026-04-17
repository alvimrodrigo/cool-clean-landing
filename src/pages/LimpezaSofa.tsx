import ServicePageLayout from "@/components/ServicePageLayout";

const LimpezaSofa = () => (
  <ServicePageLayout
    slug="limpeza-de-sofa-salvador"
    category="estofados"
    title="Limpeza de Sofá em Salvador | Secagem Rápida — ArClean"
    metaDescription="Limpeza de sofá em Salvador com secagem rápida, remoção de manchas, ácaros e odores. Atendemos linho, suede, veludo e couro. Orçamento no WhatsApp!"
    h1="Limpeza de Sofá em Salvador com Secagem Rápida"
    intro="Devolvemos o aspecto de novo ao seu sofá com lavagem profissional, produtos seguros para crianças e pets, e secagem rápida. Atendimento em toda Salvador e Região Metropolitana."
    whatsAppMessage="Olá, vim pelo site e gostaria de um orçamento para LIMPEZA DE SOFÁ em Salvador!"
    sections={[
      {
        heading: "A empresa de limpeza de sofá em Salvador que você procurava",
        paragraphs: [
          "Seu sofá é um dos móveis mais usados da casa — e também o que mais acumula poeira, suor, restos de alimentos, pelos de pets e ácaros. Com o tempo, mesmo aquele estofado lindo começa a apresentar manchas, mau cheiro e perde a maciez. A boa notícia é que não precisa trocar: a higienização profissional devolve a aparência e a saúde do tecido.",
          "A ArClean é especialista em lavagem de sofá em Salvador e atende tanto residências quanto empresas, escritórios e consultórios. Trabalhamos com equipamentos de extração profissional, produtos certificados e uma equipe treinada para identificar o melhor método para cada tipo de tecido.",
        ],
      },
      {
        heading: "Higienização de sofá para todos os tipos de tecido",
        paragraphs: [
          "Cada material exige uma técnica diferente. Usar o produto errado pode encolher, manchar permanentemente ou desbotar o estofado. Por isso, antes de iniciar, fazemos uma avaliação completa para escolher o processo ideal.",
        ],
        bullets: [
          "Sofá de linho — limpeza delicada que preserva a textura natural",
          "Sofá de suede — remoção de manchas sem deixar marcas d'água",
          "Sofá de veludo — recuperação do brilho e da maciez do tecido",
          "Sofá de couro — hidratação e limpeza com produtos específicos",
          "Sofá de chenille e tecido sintético — extração profunda de sujidades",
          "Sofás retráteis e de canto — desmontagem cuidadosa e limpeza completa",
        ],
      },
      {
        heading: "Remoção de manchas, odores de pets e fungos",
        paragraphs: [
          "Sabe aquela mancha de gordura que o pano não tira? Ou o cheiro de xixi de cachorro que volta sempre? Nós resolvemos. Usamos desincrustantes específicos para gordura, café, vinho, sangue e tinta, além de produtos enzimáticos que eliminam o odor de urina de pets pela raiz — e não apenas mascaram.",
          "Também aplicamos antifúngicos profissionais, que eliminam mofo e bactérias que se proliferam em ambientes úmidos como Salvador. Isso é especialmente importante para quem sofre de rinite, asma ou alergias respiratórias.",
        ],
      },
    ]}
    process={[
      {
        step: "Aspiração profunda",
        desc: "Removemos toda a poeira, ácaros, pelos e detritos sólidos com aspirador profissional de alta potência.",
      },
      {
        step: "Pré-tratamento de manchas",
        desc: "Aplicamos produtos específicos em cada mancha, respeitando o tipo de tecido para garantir a remoção sem danos.",
      },
      {
        step: "Extração com máquina profissional",
        desc: "Equipamento de extração injeta a solução de limpeza e suga a sujeira de dentro para fora do estofado.",
      },
      {
        step: "Desinfecção e secagem rápida",
        desc: "Finalizamos com bactericida e técnicas de secagem que liberam seu sofá em poucas horas.",
      },
    ]}
    faq={[
      {
        q: "Quanto tempo o sofá demora para secar?",
        a: "Em média, de 3 a 6 horas, dependendo do tipo de tecido e da ventilação do ambiente. Em dias secos e arejados, pode liberar ainda mais rápido. Recomendamos não usar nas primeiras horas para garantir a secagem completa.",
      },
      {
        q: "Os produtos são seguros para crianças e pets?",
        a: "Sim! Usamos produtos biodegradáveis, atóxicos e sem cheiro forte. Após a secagem completa, o ambiente fica totalmente seguro para bebês, crianças e animais.",
      },
      {
        q: "Vocês conseguem tirar manchas antigas?",
        a: "Na maioria dos casos, sim. Manchas mais antigas exigem um pré-tratamento mais longo, mas conseguimos resultados excelentes em manchas de café, vinho, gordura, tinta e até urina de pet.",
      },
      {
        q: "Quanto custa a limpeza de um sofá em Salvador?",
        a: "O valor depende do número de assentos, do tipo de tecido e do estado do estofado. Faça seu orçamento gratuito pelo WhatsApp em poucos minutos.",
      },
      {
        q: "Vocês atendem em toda Salvador?",
        a: "Sim, atendemos Salvador e toda a Região Metropolitana — Lauro de Freitas, Camaçari, Simões Filho e arredores.",
      },
    ]}
    closing="Sofá limpo, casa saudável. Solicite agora seu orçamento sem compromisso pelo WhatsApp e receba resposta em minutos."
  />
);

export default LimpezaSofa;
