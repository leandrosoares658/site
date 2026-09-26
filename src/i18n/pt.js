// Conteúdo em português (idioma principal do site).

export default {
  profile: {
    name: 'Leandro Soares Pereira',
    shortName: 'Leandro Soares',
    email: 'leandrosoares658@gmail.com',
    whatsapp: 'https://wa.me/5538997298506',
    github: 'https://github.com/leandrosoares658',
    city: 'Montes Claros, MG',
  },

  stack: [
    'React', 'Node.js', 'Python', 'C#', 'SQL', 'FastAPI',
    'XGBoost', 'LangGraph',
  ],

  clients: [
    'Urban Fight', 'Instituto Audioclini', 'The Cookie',
    'Sozinha Nunca Mais', 'Escala Summit', 'Sistema de entregas',
  ],

  nav: {
    links: [
      ['#galeria', 'Projetos'],
      ['#servicos', 'Serviços'],
      ['#contato', 'Contato'],
    ],
    cta: 'Falar comigo',
  },

  hero: {
    introRole: 'desenvolvedor full-stack e engenheiro de automação',
    title: 'Serviços de entrega de software completos para ajudar startups a lançar, converter e escalar melhor.',
    lead: 'Entregamos desenvolvimento personalizado para empresas que querem crescer.',
    ctaPrimary: 'Contato',
    ctaSecondary: 'Falar comigo',
    stackLabel: 'Ferramentas do dia a dia',
  },

  globe: {
    home: 'Montes Claros, MG',
    legend: 'Conexões pelo mundo',
    ariaLabel: 'Globo com o Brasil em destaque e rotas para outros países, mostrando alcance internacional',
  },

  gallerySection: {
    title: 'Um retrato rápido do que já saiu do papel',
    lead: 'Telas iniciais de sites e sistemas que desenvolvi, direto do ar.',
    altPrefix: 'Tela inicial do projeto',
    soonLabel: 'print em breve',
  },

  // type: 'image' (padrão), 'video' ou 'placeholder' (ainda sem print/vídeo).
  galleryImages: [
    { id: 'sozinha', title: 'Sozinha Nunca Mais', file: 'sozinhanuncamais.jpg', type: 'image' },
    { id: 'escala', title: 'Escala Summit', file: 'escalasummit.jpg', type: 'image' },
    { id: 'audioclini', title: 'Instituto Audioclini', file: 'institutoaudioclini.jpg', type: 'image' },
    { id: 'financeiro', title: 'Sistema Financeiro', file: 'controle-financeiro.jpg', type: 'image' },
    { id: 'urbanfight', title: 'Urban Fight', file: 'urbanfight.jpg', type: 'image' },
    { id: 'thecookie', title: 'The Cookie', file: 'thecookie.jpg', type: 'image' },
    { id: 'deliver', title: 'Deliver System', file: 'deliver-system.jpg', type: 'image' },
  ],

  servicesSection: {
    badge: 'Serviços',
    title: 'O Que Podemos Fazer Pelo Seu Negócio',
  },

  services: [
    {
      title: 'Websites',
      text: 'Sites institucionais e landing pages rápidas, responsivas e prontas pra converter.',
    },
    {
      title: 'Sistemas personalizados',
      text: 'Sistemas sob medida pra automatizar processos e organizar a operação do seu negócio.',
    },
    {
      title: 'Aplicativos mobile',
      text: 'Apps para iOS e Android, do design ao lançamento nas lojas.',
    },
    {
      title: 'E-commerce',
      text: 'Lojas virtuais integradas a pagamento, estoque e envio.',
    },
    {
      title: 'Lançamentos',
      text: 'Planejamento técnico e execução pra tirar o produto do papel dentro do prazo.',
    },
  ],

  journeySection: {
    title: 'De onde vem o rigor',
    roleConnector: 'na',
    eduTitle: 'Formação e certificações',
  },

  processSection: {
    title: 'Como um projeto anda comigo',
  },

  processSteps: [
    { title: 'Entender o problema', text: 'Uma conversa para saber o que precisa funcionar, para quem e até quando.' },
    { title: 'Proposta por escrito', text: 'Escopo, prazo e entregas definidos antes de qualquer linha de código.' },
    { title: 'Entregas curtas', text: 'Você acompanha versões funcionando durante o projeto, e não só no final.' },
    { title: 'Entrega documentada', text: 'Código, instruções de uso e o necessário para manter o sistema rodando.' },
  ],

  contactSection: {
    title: 'Tem um sistema para tirar do papel?',
    lead: 'Conte o que precisa funcionar e em quanto tempo. Respondo por email com os próximos passos.',
    emailCta: 'Enviar email',
    githubCta: 'Ver GitHub',
  },
};
