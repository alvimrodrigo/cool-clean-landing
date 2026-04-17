import ServicePageLayout from "@/components/ServicePageLayout";

const ClimatizacaoIndustrial = () => (
  <ServicePageLayout
    slug="climatizacao-industrial-salvador"
    category="refrigeracao"
    title="Climatização Industrial e Comercial em Salvador | PMOC — ArClean"
    metaDescription="Refrigeração industrial em Salvador: câmaras frias, balcões frigoríficos, ilhas de congelados e PMOC ANVISA. Evite paradas e perdas. Consultoria no WhatsApp."
    h1="Climatização Industrial e Comercial em Salvador"
    intro="Manutenção e climatização industrial em Salvador para supermercados, restaurantes, padarias, indústrias e clínicas. Atendimento técnico que evita paradas e prejuízos."
    whatsAppMessage="Olá, gostaria de uma consultoria/orçamento para refrigeração industrial/comercial"
    sections={[
      {
        heading: "Refrigeração industrial em Salvador: sua produção não pode parar",
        paragraphs: [
          "No comércio e na indústria, refrigeração não é luxo — é a diferença entre lucro e prejuízo. Uma câmara fria parada pode comprometer toneladas de mercadoria. Um balcão frigorífico falhando significa cliente comprando do concorrente. Por isso, manutenção preventiva é investimento, não custo.",
          "A ArClean atende empresas em Salvador e Região Metropolitana com soluções completas em refrigeração comercial e industrial. Trabalhamos com supermercados, mercearias, restaurantes, padarias, açougues, peixarias, indústrias alimentícias, farmácias, laboratórios e clínicas.",
        ],
      },
      {
        heading: "Manutenção de câmara fria, balcão frigorífico e mais",
        paragraphs: [
          "Cada equipamento exige conhecimento técnico específico. Nossa equipe é treinada em sistemas de média e baixa temperatura, com certificação para manuseio de gases refrigerantes industriais.",
        ],
        bullets: [
          "Manutenção de câmara fria e câmara frigorífica",
          "Conserto de balcão frigorífico e expositor",
          "Ilhas de congelados e freezers comerciais",
          "Sistemas de ar-condicionado central (chillers, VRF)",
          "Self-service e pista quente/fria",
          "Refrigeração para indústria farmacêutica",
          "Climatização de data centers e salas técnicas",
          "Atendimento emergencial 24h para empresas",
        ],
      },
      {
        heading: "PMOC em Salvador: cumpra a exigência da ANVISA",
        paragraphs: [
          "O Plano de Manutenção, Operação e Controle (PMOC) é uma exigência legal da ANVISA para todos os ambientes de uso coletivo com climatização artificial — escolas, hospitais, hotéis, escritórios, shoppings e empresas em geral.",
          "Elaboramos e executamos o PMOC do seu estabelecimento em Salvador, com toda a documentação técnica necessária para fiscalização. Isso protege a saúde de funcionários e clientes — e evita multas pesadas.",
          "Nosso plano inclui cronograma de manutenções, registro de procedimentos, qualidade do ar interno e responsabilidade técnica de profissional habilitado.",
        ],
      },
    ]}
    process={[
      {
        step: "Diagnóstico operacional",
        desc: "Avaliamos cada equipamento, identificamos riscos e propomos um plano sob medida.",
      },
      {
        step: "Plano de manutenção preventiva",
        desc: "Cronograma personalizado para sua operação, com previsão de custos.",
      },
      {
        step: "Atendimento corretivo prioritário",
        desc: "Quando algo falha, sua empresa entra na fila prioritária para minimizar paradas.",
      },
      {
        step: "Relatórios técnicos e PMOC",
        desc: "Documentação completa para auditoria, ANVISA e seu controle interno.",
      },
    ]}
    faq={[
      {
        q: "Vocês fazem contrato de manutenção mensal?",
        a: "Sim, oferecemos contratos personalizados de manutenção preventiva mensal, trimestral ou semestral, com valores especiais e atendimento prioritário.",
      },
      {
        q: "Atendem fora do horário comercial?",
        a: "Sim. Sabemos que muitas operações só podem fazer manutenção fora do expediente. Atendemos noites, finais de semana e feriados.",
      },
      {
        q: "Vocês emitem ART (responsabilidade técnica)?",
        a: "Sim, emitimos ART para os serviços que exigem responsável técnico habilitado.",
      },
      {
        q: "Quanto custa um PMOC em Salvador?",
        a: "O valor depende do número e tipo de equipamentos da sua empresa. Faça uma consultoria gratuita pelo WhatsApp.",
      },
    ]}
    closing="Sua operação merece um parceiro técnico de confiança. Fale com um especialista no WhatsApp."
  />
);

export default ClimatizacaoIndustrial;
