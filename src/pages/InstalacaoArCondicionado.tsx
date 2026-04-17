import ServicePageLayout from "@/components/ServicePageLayout";

const InstalacaoArCondicionado = () => (
  <ServicePageLayout
    slug="instalacao-ar-condicionado-salvador"
    category="refrigeracao"
    title="Instalação de Ar-Condicionado em Salvador | Split, Window e Cassete"
    metaDescription="Instalação de ar-condicionado em Salvador com técnicos certificados. Split, Window, Cassete — preserve a garantia de fábrica. Orçamento no WhatsApp."
    h1="Instalação de Ar-Condicionado em Salvador: Residencial e Comercial"
    intro="Instalação técnica de ar-condicionado em Salvador feita do jeito certo: cálculo de BTUs, materiais de qualidade e procedimento que preserva a garantia do fabricante."
    whatsAppMessage="Olá, gostaria de um orçamento para instalação de ar-condicionado em Salvador"
    sections={[
      {
        heading: "Empresa de instalação de ar-condicionado em Salvador que preserva sua garantia",
        paragraphs: [
          "Comprou um ar-condicionado novo? A instalação é tão importante quanto o equipamento. Uma instalação mal feita pode causar vazamento de gás, queda de rendimento, aumento da conta de luz e — o que muita gente não sabe — anular a garantia de fábrica do aparelho.",
          "A ArClean é uma empresa de instalação de ar-condicionado em Salvador especializada em fazer o serviço com rigor técnico. Seguimos as normas dos fabricantes (Samsung, LG, Daikin, Midea, Electrolux, Springer, Fujitsu e outras) para que sua garantia seja totalmente respeitada.",
          "Atendemos residências, apartamentos, escritórios, lojas, consultórios e indústrias em toda Salvador e Região Metropolitana — Lauro de Freitas, Camaçari, Simões Filho, Itapuã, Pituba, Barra, Costa Azul e demais bairros.",
        ],
      },
      {
        heading: "Instalação de Split, Window, Cassete e Multi Split",
        paragraphs: [
          "Cada modelo de ar-condicionado tem suas particularidades. Trabalhamos com infraestrutura para todos os tipos, com tubulação de cobre de qualidade, isolamento térmico adequado e dreno bem dimensionado.",
        ],
        bullets: [
          "Instalação de Split Hi-Wall (parede)",
          "Instalação de Split Piso-Teto",
          "Instalação de ar-condicionado Cassete (embutido no forro)",
          "Instalação de ar Window (janela)",
          "Sistema Multi Split (várias evaporadoras)",
          "Instalação de ar Inverter de alta eficiência",
          "Infraestrutura completa em obras e reformas",
          "Pontos elétricos dedicados e disjuntor adequado",
        ],
      },
      {
        heading: "Como calculamos a quantidade certa de BTUs",
        paragraphs: [
          "Um aparelho subdimensionado não vai gelar e vai ficar ligado o tempo todo, queimando antes do tempo. Um superdimensionado gasta energia desnecessariamente. Por isso, antes de qualquer instalação fazemos um cálculo técnico de BTUs.",
          "Levamos em conta o tamanho do ambiente, número de pessoas, posição do sol, quantidade de janelas, eletrodomésticos no local e o pé-direito do imóvel. Com isso, indicamos o equipamento certo — ou validamos o que você já comprou.",
        ],
      },
    ]}
    process={[
      {
        step: "Visita técnica e cálculo de BTUs",
        desc: "Avaliamos o ambiente, calculamos a capacidade ideal e definimos o melhor ponto de instalação.",
      },
      {
        step: "Infraestrutura e furação técnica",
        desc: "Furação correta da parede, passagem de tubulação de cobre isolada e dreno com caimento adequado.",
      },
      {
        step: "Vácuo no sistema",
        desc: "Procedimento obrigatório do fabricante: retiramos toda a umidade da tubulação para proteger o compressor.",
      },
      {
        step: "Teste de estanqueidade e funcionamento",
        desc: "Verificamos se não há vazamento de gás e medimos a temperatura de saída para garantir performance máxima.",
      },
    ]}
    faq={[
      {
        q: "Vocês mantêm a garantia de fábrica?",
        a: "Sim. Seguimos rigorosamente o procedimento exigido pelos fabricantes e emitimos comprovante de instalação para você apresentar em caso de garantia.",
      },
      {
        q: "Vocês vendem o ar-condicionado ou só instalam?",
        a: "Fazemos os dois. Podemos indicar o equipamento ideal para o seu ambiente ou instalar o aparelho que você já comprou.",
      },
      {
        q: "Quanto tempo demora a instalação?",
        a: "Uma instalação de Split residencial padrão leva de 3 a 5 horas. Casos com infraestrutura mais complexa podem levar mais tempo.",
      },
      {
        q: "Quanto custa instalar um ar-condicionado em Salvador?",
        a: "Depende do modelo, da metragem da tubulação, do ponto elétrico e da altura. Faça seu orçamento gratuito pelo WhatsApp em poucos minutos.",
      },
    ]}
    closing="Instalação técnica feita por quem entende. Fale agora pelo WhatsApp e garanta seu agendamento."
  />
);

export default InstalacaoArCondicionado;
