import ServicePageLayout from "@/components/ServicePageLayout";

const LimpezaColchao = () => (
  <ServicePageLayout
    slug="limpeza-de-colchao-salvador"
    title="Limpeza de Colchão em Salvador | Higienização Profunda — ArClean"
    metaDescription="Higienização de colchão em Salvador: elimine ácaros, fungos e bactérias. Alívio para alergia e rinite, noites de sono saudáveis. Orçamento no WhatsApp."
    h1="Limpeza de Colchão em Salvador com Higienização Profunda"
    intro="Você passa cerca de um terço da vida em cima do colchão. Higienizar é cuidar da sua saúde respiratória — eliminamos ácaros, fungos e bactérias para você dormir melhor."
    whatsAppMessage="Olá, vim pelo site e gostaria de um orçamento para LIMPEZA DE COLCHÃO em Salvador!"
    sections={[
      {
        heading: "Acorde sem espirros, sem coceira e sem nariz entupido",
        paragraphs: [
          "Se você acorda espirrando, com olhos coçando ou nariz congestionado, o problema pode estar bem debaixo do seu corpo. Um colchão acumula milhões de ácaros, células mortas da pele, suor, fungos e bactérias — e nada disso sai com aspirador comum.",
          "A higienização de colchão em Salvador feita pela ArClean elimina esses agentes invisíveis e devolve um ambiente saudável para você e sua família. É indicado especialmente para quem sofre de rinite alérgica, asma, bronquite, dermatite ou qualquer alergia respiratória.",
        ],
      },
      {
        heading: "Por que higienizar o colchão regularmente",
        paragraphs: [
          "Em Salvador, o clima quente e úmido acelera a proliferação de ácaros e mofo. Por isso, especialistas recomendam a limpeza profissional do colchão pelo menos uma vez por ano.",
        ],
        bullets: [
          "Eliminação de até milhares de ácaros por colchão",
          "Remoção de manchas de suor, urina e líquidos diversos",
          "Neutralização de odores impregnados",
          "Alívio comprovado para rinite, asma e dermatite",
          "Mais conforto e qualidade de sono para toda a família",
          "Ideal para colchões de bebês, crianças e idosos",
        ],
      },
      {
        heading: "Limpeza profissional para todos os tipos de colchão",
        paragraphs: [
          "Atendemos colchões de molas, espuma, viscoelástico, látex e híbridos. Em todos os casos, usamos produtos antialérgicos, biodegradáveis e seguros para o contato com a pele depois da secagem.",
          "O processo é rápido e prático: vamos até sua casa, higienizamos no local e seu colchão fica pronto para uso no mesmo dia.",
        ],
      },
    ]}
    process={[
      {
        step: "Aspiração de alta potência",
        desc: "Remoção de ácaros, poeira, células de pele e detritos com aspirador profissional.",
      },
      {
        step: "Pré-tratamento de manchas",
        desc: "Aplicação de produtos específicos para urina, suor, sangue e outras manchas.",
      },
      {
        step: "Extração e desinfecção",
        desc: "Lavagem por extração com bactericida e antifúngico que penetram nas fibras.",
      },
      {
        step: "Secagem rápida",
        desc: "Técnicas que liberam o colchão para uso em poucas horas, sem encharcar.",
      },
    ]}
    faq={[
      {
        q: "Em quanto tempo posso usar o colchão depois da limpeza?",
        a: "Em geral, entre 4 e 6 horas. O colchão não fica encharcado — usamos extração profissional que retira a maior parte da umidade ainda no processo.",
      },
      {
        q: "A higienização ajuda mesmo quem tem rinite e alergia?",
        a: "Sim. Os ácaros são uma das principais causas de crises alérgicas, e a limpeza profunda reduz drasticamente a quantidade desses agentes, trazendo alívio rápido.",
      },
      {
        q: "Os produtos são seguros para crianças e bebês?",
        a: "Totalmente. Trabalhamos com produtos antialérgicos, atóxicos e sem cheiro forte, ideais para colchões de bebês e crianças.",
      },
      {
        q: "Com que frequência devo higienizar o colchão?",
        a: "O recomendado é a cada 6 a 12 meses. Em casas com pets, alérgicos ou crianças pequenas, o ideal é a cada 6 meses.",
      },
    ]}
    closing="Durma melhor a partir desta semana. Chame no WhatsApp e agende a higienização do seu colchão em Salvador."
  />
);

export default LimpezaColchao;
