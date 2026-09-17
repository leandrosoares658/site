// Todo o texto do site fica aqui. Edite à vontade sem mexer nos componentes.

export const profile = {
  name: 'Leandro Soares Pereira',
  shortName: 'Leandro Soares',
  email: 'leandrosoares658@gmail.com',
  github: 'https://github.com/leandrosoares658',
  city: 'Montes Claros, MG',
};

export const stack = [
  'React', 'Node.js', 'Python', 'C#', 'SQL', 'FastAPI',
  'XGBoost', 'LangGraph', 'CLP Siemens', 'SCADA iFix',
];

// visual: 'clinical' | 'marketplace' | 'vibration' | 'finance'
// Quando tiver prints ou GIFs reais, troque o <ProjectVisual> por uma <img> em Projects.jsx.
export const projects = [
  {
    id: 'sda-ia',
    status: 'Em desenvolvimento na Zeltra',
    title: 'SDA-IA, apoio à decisão de alta hospitalar',
    description:
      'Sou cofundador e CTO da Zeltra. O SDA-IA ajuda equipes médicas a identificar pacientes prontos para alta e mostra quais dados sustentam cada indicação, para que a decisão continue nas mãos de quem cuida do paciente.',
    stack: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'BERTimbau', 'LangGraph', 'React'],
    visual: 'clinical',
  },
  {
    id: 'fado',
    status: 'Protótipo',
    title: 'Fado, marketplace de faxina',
    description:
      'App com duas pontas: profissionais se cadastram para oferecer o serviço e clientes encontram, contratam e pagam por PIX sem sair do aplicativo.',
    stack: ['React', 'PIX'],
    visual: 'marketplace',
  },
  {
    id: 'preditiva',
    status: 'Pesquisa acadêmica, Unimontes',
    title: 'Manutenção preditiva de motores industriais',
    description:
      'Pipeline em Python que analisa a vibração de motores com filtragem adaptativa, detecta falhas em rolamentos e classifica alertas antes que a parada aconteça.',
    stack: ['Python', 'Análise de vibração', 'Regressão linear'],
    visual: 'vibration',
  },
  {
    id: 'financas',
    status: 'Projeto pessoal',
    title: 'Finanças pessoais em PWA',
    description:
      'Aplicativo instalável para controlar várias contas, acompanhar boletos com pagamento parcial e calcular descontos da folha de pagamento brasileira.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'SQLite', 'Recharts'],
    visual: 'finance',
  },
];

export const smallProjects = [
  { title: 'Controle de volume por gestos', detail: 'Python, OpenCV e MediaPipe' },
  { title: 'Site institucional Audioclini', detail: 'Desenvolvimento web' },
];

export const services = [
  {
    title: 'Produtos web e aplicativos',
    text: 'Do protótipo ao sistema em produção: interface em React, APIs em Node.js, Python ou C#, banco de dados e publicação. Código organizado para que outra pessoa consiga continuar depois.',
    examples: ['Sistemas internos', 'SaaS e MVPs', 'PWAs', 'Integrações entre sistemas'],
  },
  {
    title: 'Dados e IA aplicada',
    text: 'Modelos de machine learning e agentes com LLM encaixados no seu processo, com explicação para cada resultado e cuidado com dados sensíveis desde o desenho, conforme a LGPD.',
    examples: ['Modelos preditivos', 'Agentes com LLM', 'Transcrição e extração de documentos'],
  },
  {
    title: 'Software para a indústria',
    text: 'Coleta de dados do chão de fábrica, indicadores de OEE, integração com CLP e SCADA e a documentação que ambientes regulados exigem.',
    examples: ['Servidores OPC', 'Painéis de produção', 'Validação GAMP 5'],
  },
];

export const industry = {
  role: 'Analista de Automação Avançada',
  company: 'Novo Nordisk',
  summary:
    'Na indústria farmacêutica, um erro de software pode parar uma linha ou comprometer um lote. Foi onde aprendi a documentar, testar e validar cada mudança.',
  highlights: [
    {
      title: 'Retrofit de máquina de enchimento',
      text: 'Troca dos controladores PacDrive M por PacDrive 3, alterações no CLP Siemens e novas telas no SCADA iFix. O OEE da máquina subiu de 85% para 93%.',
    },
    {
      title: 'Filtro de insulina conforme o Anexo 1',
      text: 'Liderei a parte de automação da instalação do filtro na mesma máquina, com mudanças de código no CLP e no SCADA para atender ao GMP europeu.',
    },
    {
      title: 'Projeto global de máquinas de inspeção',
      text: 'Lidero como WPO a implantação de duas máquinas de inspeção. O FAT na Itália terminou antes do prazo.',
    },
    {
      title: 'Coleta de dados e OEE',
      text: 'Implantação de coleta de dados industriais com Kepware como servidor OPC, integrada ao POinT.',
    },
    {
      title: 'Validação de sistemas computadorizados',
      text: 'Elaboração e execução de IQ, OQ, PQ, FAT e SAT, com trilhas de auditoria, controle de acesso e backup testado conforme o FDA 21 CFR Part 11.',
    },
  ],
};

export const education = [
  { year: 'Em andamento', title: 'Engenharia Elétrica', place: 'Unimontes' },
  { year: 'Concluída', title: 'Ciência de Dados', place: 'Cruzeiro do Sul' },
  { year: '2023', title: 'Elau PacDrive 3 Motion Control', place: 'Schneider Electric' },
  { year: '2022', title: 'Gestão de Riscos', place: 'FGV' },
  { year: '2016', title: 'Técnico em Informática', place: 'IFNMG' },
];

export const processSteps = [
  { title: 'Entender o problema', text: 'Uma conversa para saber o que precisa funcionar, para quem e até quando.' },
  { title: 'Proposta por escrito', text: 'Escopo, prazo e entregas definidos antes de qualquer linha de código.' },
  { title: 'Entregas curtas', text: 'Você acompanha versões funcionando durante o projeto, e não só no final.' },
  { title: 'Entrega documentada', text: 'Código, instruções de uso e o necessário para manter o sistema rodando.' },
];
