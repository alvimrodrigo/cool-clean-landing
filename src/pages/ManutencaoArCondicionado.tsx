import ServicePageLayout from "@/components/ServicePageLayout";

const ManutencaoArCondicionado = () => (
  <ServicePageLayout
    slug="manutencao-ar-condicionado-salvador"
    category="refrigeracao"
    title="Manutenção de Ar-Condicionado em Salvador | Conserto Rápido — ArClean"
    metaDescription="Conserto e manutenção de ar-condicionado em Salvador. Recarga de gás, troca de capacitor, placa e motor. Atendimento rápido em domicílio. WhatsApp 24h."
    h1="Manutenção de Ar-Condicionado em Salvador: Conserto e Assistência"
    intro="Seu ar não está gelando, faz barulho ou está pingando dentro de casa? Atendimento rápido em domicílio em Salvador para diagnóstico e conserto no mesmo dia."
    whatsAppMessage="Olá, meu ar-condicionado está com defeito, preciso de uma manutenção em Salvador"
    sections={[
      {
        heading: "Conserto de ar-condicionado em Salvador no mesmo dia",
        paragraphs: [
          "O calor de Salvador não dá trégua, e quando o ar-condicionado falha, cada hora parece uma eternidade. Por isso, na ArClean priorizamos o atendimento rápido: nossos técnicos vão até sua casa ou empresa no mesmo dia, com peças e ferramentas para resolver na primeira visita sempre que possível.",
          "Atendemos todas as marcas — Samsung, LG, Daikin, Midea, Electrolux, Springer, Fujitsu, Consul, Philco e outras — em modelos Split, Window, Cassete, Inverter e Multi Split.",
        ],
      },
      {
        heading: "Sinais de que seu ar precisa de manutenção urgente",
        paragraphs: [
          "Muita gente espera o aparelho parar completamente para chamar um técnico. Isso aumenta o custo do conserto e o tempo sem refrigeração. Fique atento aos sinais:",
        ],
        bullets: [
          "Ar-condicionado não gela como antes",
          "Aparelho ligado mas não sai ar frio",
          "Barulho alto, batidas ou vibração",
          "Gotejamento de água dentro de casa",
          "Cheiro ruim saindo da evaporadora",
          "Conta de luz subiu sem motivo aparente",
          "Aparelho liga e desliga sozinho",
          "Aparece código de erro no controle",
        ],
      },
      {
        heading: "Serviços de manutenção que executamos",
        paragraphs: [
          "Trabalhamos com manutenção preventiva (para evitar problemas e prolongar a vida útil do aparelho) e corretiva (quando algo já parou de funcionar). Nosso técnico chega com os principais componentes para reposição imediata.",
        ],
        bullets: [
          "Recarga de gás refrigerante (R-410A, R-32, R-22)",
          "Detecção e conserto de vazamentos de gás",
          "Troca de capacitor de partida",
          "Conserto e troca de placa eletrônica",
          "Troca de motor da ventoinha (interna/externa)",
          "Troca de hélice e turbina",
          "Limpeza e desentupimento de dreno",
          "Diagnóstico completo com manômetros e multímetro",
        ],
      },
    ]}
    process={[
      {
        step: "Diagnóstico técnico",
        desc: "Identificamos a causa real do problema com equipamentos profissionais — sem chutes.",
      },
      {
        step: "Orçamento transparente",
        desc: "Apresentamos o custo da peça e da mão de obra antes de iniciar qualquer reparo.",
      },
      {
        step: "Conserto no local",
        desc: "Executamos o serviço no seu endereço com peças originais ou similares de qualidade.",
      },
      {
        step: "Teste e garantia",
        desc: "Testamos o aparelho funcionando e oferecemos garantia sobre o serviço executado.",
      },
    ]}
    faq={[
      {
        q: "Em quanto tempo o técnico chega na minha casa?",
        a: "No mesmo dia, sempre que possível. Em horários de pico podemos agendar para o próximo turno disponível.",
      },
      {
        q: "Por que meu ar-condicionado não está gelando?",
        a: "As causas mais comuns são: falta de gás (vazamento), filtro sujo, capacitor queimado, problema na placa eletrônica ou compressor com defeito. Só com diagnóstico no local conseguimos confirmar.",
      },
      {
        q: "Vocês cobram a visita técnica?",
        a: "A visita tem um custo simbólico que é abatido caso o serviço seja aprovado. O orçamento detalhado é gratuito.",
      },
      {
        q: "Atendem aos finais de semana?",
        a: "Sim, atendemos emergências aos sábados e domingos em Salvador.",
      },
    ]}
    closing="Não passe mais um dia no calor. Chame nosso técnico no WhatsApp e resolva hoje mesmo."
  />
);

export default ManutencaoArCondicionado;
