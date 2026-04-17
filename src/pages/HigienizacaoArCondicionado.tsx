import ServicePageLayout from "@/components/ServicePageLayout";

const HigienizacaoArCondicionado = () => (
  <ServicePageLayout
    slug="higienizacao-ar-condicionado-salvador"
    category="refrigeracao"
    title="Limpeza e Higienização de Ar-Condicionado em Salvador — ArClean"
    metaDescription="Higienização de ar-condicionado em Salvador: elimine fungos, bactérias e economize até 30% na conta de luz. Limpeza profunda de Split. Orçamento no WhatsApp."
    h1="Limpeza e Higienização de Ar-Condicionado em Salvador"
    intro="Higienização profunda de Split em Salvador para eliminar fungos, bactérias e o cheiro de mofo. Mais saúde para sua família e até 30% de economia na conta de luz."
    whatsAppMessage="Olá, quero agendar a higienização do meu ar-condicionado para mais saúde e economia"
    sections={[
      {
        heading: "Seu ar-condicionado pode estar deixando você doente",
        paragraphs: [
          "Aquele cheirinho ruim que sai do ar quando você liga? Não é frescura: é colônia de fungos, bactérias e ácaros se proliferando dentro do aparelho. Cada vez que o ar-condicionado é ligado, esses microrganismos são jogados no ar que você e sua família respiram durante horas.",
          "O resultado aparece como rinite que não passa, crises de asma, alergia respiratória, sinusite, dor de garganta ao acordar e tosse seca. Em Salvador, com o calor e a umidade, a proliferação é ainda mais rápida.",
          "A higienização de ar-condicionado em Salvador é o procedimento profissional que elimina esses agentes — e não tem nada a ver com a 'limpeza' básica que se faz em manutenções rápidas.",
        ],
      },
      {
        heading: "Limpeza profunda que economiza até 30% na conta de luz",
        paragraphs: [
          "Quando o filtro, a serpentina e o condensador acumulam sujeira, o ar-condicionado precisa trabalhar muito mais para resfriar o mesmo ambiente. Isso significa mais tempo ligado, compressor sob estresse e conta de luz nas alturas.",
          "Estudos mostram que um Split sujo pode consumir até 30% a mais de energia. Após a higienização profissional, o aparelho volta a refrigerar com eficiência máxima — e você sente no bolso já no próximo mês.",
        ],
        bullets: [
          "Eliminação de fungos, mofo e bactérias",
          "Remoção do cheiro ruim ao ligar o aparelho",
          "Alívio de rinite, asma e alergias respiratórias",
          "Economia de até 30% na conta de energia",
          "Aumento da vida útil do compressor",
          "Refrigeração mais rápida e eficiente",
          "Ambiente mais saudável para crianças e idosos",
          "Aplicação de bactericida e fungicida certificados",
        ],
      },
      {
        heading: "Higienização completa: evaporadora e condensadora",
        paragraphs: [
          "Muita gente acha que basta lavar o filtro. Não é. Uma higienização profissional desmonta o aparelho com cuidado e limpa profundamente as duas unidades — a evaporadora (que fica dentro de casa) e a condensadora (a unidade externa).",
          "Removemos a hélice, a turbina, a serpentina, a bandeja e os componentes internos para uma limpeza completa, com uso de produtos específicos para refrigeração que não atacam o alumínio nem o cobre.",
        ],
      },
    ]}
    process={[
      {
        step: "Proteção do ambiente",
        desc: "Cobrimos móveis, piso e parede com lonas e bag específico para coleta da água da limpeza.",
      },
      {
        step: "Desmontagem técnica",
        desc: "Removemos filtros, turbina e componentes internos para acesso à serpentina.",
      },
      {
        step: "Lavagem química profunda",
        desc: "Aplicação de detergente neutralizante, bactericida e fungicida em toda a estrutura.",
      },
      {
        step: "Remontagem e teste",
        desc: "Recolocamos tudo no lugar, testamos o aparelho e medimos a temperatura de saída.",
      },
    ]}
    faq={[
      {
        q: "Com que frequência devo higienizar o ar-condicionado?",
        a: "O recomendado é a cada 6 meses para uso residencial e a cada 3 meses para ambientes comerciais ou casas com pets/alérgicos.",
      },
      {
        q: "Quanto tempo leva o serviço?",
        a: "Em média 1h30 a 2h por aparelho, dependendo do modelo e do nível de sujidade.",
      },
      {
        q: "Os produtos são seguros para crianças e pets?",
        a: "Sim, usamos produtos específicos para refrigeração, certificados e seguros após a aplicação e secagem.",
      },
      {
        q: "Vocês fazem desconto para mais de um aparelho?",
        a: "Sim! Quanto mais aparelhos, melhor o desconto. Casas com vários Splits têm condições especiais.",
      },
    ]}
    closing="Respire ar puro e economize na conta de luz. Agende sua higienização agora pelo WhatsApp."
  />
);

export default HigienizacaoArCondicionado;
