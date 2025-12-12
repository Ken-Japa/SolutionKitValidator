import { Idea } from './types';

export const ideas: Idea[] = [
  // --- LOTE 1: Operacional Varejo/Serviços ---

  // 1. Confirmador de PIX
  {
    id: 'pix',
    slug: 'confirmador-pix',
    seoTitle: 'Confirmador Automático de PIX para Balcão | SolutionKit',
    hero: {
      title: 'Pare de cair no Golpe do Pix Agendado na sua loja',
      subtitle: 'A solução automática que confirma o recebimento real na conta e avisa na TV em 1 segundo.',
    },
    pain: {
      heading: 'Você gasta tempo conferindo comprovante e ainda leva golpe?',
      description: [
        'Hoje você precisa parar o atendimento, abrir o app do banco, logar e conferir se o dinheiro caiu. Enquanto isso, a fila cresce e o cliente fica impaciente.',
        'Golpistas mostram comprovantes agendados ou telas falsas e levam sua mercadoria. O prejuízo é 100% seu.',
      ],
    },
    solution: {
      heading: 'Sua TV pisca verde: Dinheiro na conta. Fim da fraude.',
      description: [
        'O Confirmador Pix conecta diretamente com seu banco via API segura. Quando o cliente paga, nosso sistema valida a transação real em milissegundos.',
        'Basta colocar um tablet ou monitor no balcão. Piscou verde, pode liberar a mercadoria. Sem senha de banco na mão de funcionário.',
      ],
    },
    features: [
      { title: 'Alerta Visual e Sonoro', description: 'Tela verde e som de caixa quando o dinheiro cai de verdade.', icon: 'zap' },
      { title: 'Zero Acesso à Conta', description: 'Sistema de leitura apenas. Ninguém movimenta seu dinheiro.', icon: 'shield' },
      { title: 'Fim das Filas', description: 'Confirmação em 1 segundo. Atenda o próximo cliente mais rápido.', icon: 'clock' },
      { title: 'Relatório Diário', description: 'Saiba exatamente quanto entrou via Pix no fechamento do caixa.', icon: 'check' },
    ],
    pricing: {
      value: '39,90',
      period: 'mês',
      comparison: 'Menos que o prejuízo de um único golpe',
    },
    cta: 'PROTEGER MEU CAIXA AGORA',
  },

  // 2. Ponto Doméstica
  {
    id: 'maid-point',
    slug: 'ponto-domestica',
    seoTitle: 'Ponto Eletrônico Simples para Empregada Doméstica | SolutionKit',
    hero: {
      title: 'Evite processos trabalhistas com sua empregada doméstica',
      subtitle: 'Controle de horas, folgas e extras pelo WhatsApp. 100% Seguro e dentro da lei (PEC das Domésticas).',
    },
    pain: {
      heading: 'O caderninho de ponto não te protege na justiça',
      description: [
        'Você confia na anotação manual? Se houver um processo trabalhista, o "eu acho" não vale nada. O risco de pagar horas extras indevidas retroativas é gigante.',
        'Planilhas são chatas de preencher e sistemas de RH corporativos são caros e complexos demais para uma única funcionária.',
      ],
    },
    solution: {
      heading: 'Ponto batido pelo WhatsApp com localização verificada',
      description: [
        'Sua funcionária envia um "Oi" no WhatsApp do sistema ao chegar e sair. Nós registramos hora e local (GPS).',
        'No final do mês, você recebe o PDF pronto para assinatura, já com cálculo de banco de horas, atrasos e eSocial.',
      ],
    },
    features: [
      { title: 'Registro via WhatsApp', description: 'Não precisa baixar app nem ter celular moderno.', icon: 'zap' },
      { title: 'Cálculo Automático', description: 'Banco de horas e extras calculados sem erro matemático.', icon: 'clock' },
      { title: 'Segurança Jurídica', description: 'Histórico digital auditável em caso de dúvidas.', icon: 'shield' },
      { title: 'Lembretes de Ponto', description: 'O sistema avisa se ela esquecer de bater o ponto.', icon: 'check' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Preço de um café por dia',
    },
    cta: 'TESTAR POR 7 DIAS GRÁTIS',
  },

  // 3. Orçamento Reforma (Pedreiro)
  {
    id: 'construction-quote',
    slug: 'gerador-orcamento-obra',
    seoTitle: 'Gerador de Orçamento de Reforma e Construção PDF | SolutionKit',
    hero: {
      title: 'Pare de perder obras por enviar orçamento no WhatsApp',
      subtitle: 'Crie orçamentos profissionais em PDF em 2 minutos e feche mais serviços.',
    },
    pain: {
      heading: 'Orçamento "de boca" passa desconfiança',
      description: [
        'O cliente pede um orçamento e você manda um texto bagunçado no Zap. Ele visualiza e não responde. Você perdeu o serviço para alguém mais organizado.',
        'Sem formalização, o cliente pede coisas a mais no meio da obra e se recusa a pagar. Você trabalha de graça.',
      ],
    },
    solution: {
      heading: 'Profissionalismo que justifica seu preço',
      description: [
        'Preencha os itens da obra no celular e nosso sistema gera um PDF lindo, com sua logo (ou nome) e termos de garantia.',
        'Envie um link profissional. O cliente sente segurança e fecha com você, mesmo cobrando um pouco mais.',
      ],
    },
    features: [
      { title: 'PDF Profissional', description: 'Gera um documento automático pronto para enviar.', icon: 'check' },
      { title: 'Lista de Materiais', description: 'Calcula e lista o que o cliente precisa comprar.', icon: 'clock' },
      { title: 'Termos de Garantia', description: 'Texto jurídico básico protegendo seu serviço.', icon: 'shield' },
      { title: 'Histórico de Clientes', description: 'Saiba exatamente quanto cobrou na última obra.', icon: 'zap' },
    ],
    pricing: {
      value: '19,90',
      period: 'mês',
      comparison: 'Se fechar uma obra a mais, já pagou 10 anos',
    },
    cta: 'CRIAR MEU PRIMEIRO ORÇAMENTO',
  },

  // 4. Placa de Obra (Compliance)
  {
    id: 'construction-sign',
    slug: 'gerador-placa-obra',
    seoTitle: 'Gerador de Placa de Obra Padrão Prefeitura | SolutionKit',
    hero: {
      title: 'Sua obra embargada por causa de uma placa?',
      subtitle: 'Gere a placa obrigatória no padrão da sua prefeitura em 30 segundos. Baixe e imprima.',
    },
    pain: {
      heading: 'A fiscalização adora multar falta de sinalização',
      description: [
        'Você precisa iniciar a obra, mas não sabe o layout exigido, o tamanho da fonte ou as informações do CREA/CAU obrigatórias.',
        'Contratar um designer para fazer a arte custa caro e demora. A multa da prefeitura é imediata e a obra para.',
      ],
    },
    solution: {
      heading: 'Preencha, Baixe, Imprima na Gráfica da Esquina',
      description: [
        'Selecione sua cidade, digite os dados do RT (Responsável Técnico) e o número do alvará.',
        'O sistema gera o arquivo em alta resolução (PDF/Vetor) no padrão exato da lei. É só levar na gráfica de banners.',
      ],
    },
    features: [
      { title: 'Padrão Atualizado', description: 'Modelos de acordo com o código de obras local.', icon: 'check' },
      { title: 'QR Code Incluso', description: 'Geração automática se a prefeitura exigir.', icon: 'zap' },
      { title: 'Alta Resolução', description: 'Arquivo pronto para impressão em lona grande.', icon: 'shield' },
      { title: 'Multiprofissional', description: 'Insira Eng., Arquiteto e Empreiteira na mesma placa.', icon: 'check' },
    ],
    pricing: {
      value: '29,90',
      period: 'placa',
      comparison: 'Pagamento único. 10x mais barato que designer',
    },
    cta: 'GERAR MINHA PLACA AGORA',
  },

  // 5. Otimizador Fotos Marketplace
  {
    id: 'photo-optimizer',
    slug: 'otimizador-fotos-marketplace',
    seoTitle: 'Redimensionar Fotos para Mercado Livre e Shopee | SolutionKit',
    hero: {
      title: 'Seus anúncios pausados por "má qualidade" da foto?',
      subtitle: 'Adequação automática de fundo branco e dimensões para Mercado Livre, Shopee e Amazon.',
    },
    pain: {
      heading: 'Você perde vendas enquanto edita fotos',
      description: [
        'Tirar foto, passar pro PC, abrir editor, recortar fundo, ajustar pixels... você gasta 20 minutos por produto.',
        'O marketplace rejeita seu anúncio porque o fundo não é 100% branco ou a resolução está errada. Sua exposição cai a zero.',
      ],
    },
    solution: {
      heading: 'Arraste, Solte e Venda',
      description: [
        'Jogue as fotos cruas do celular no sistema. Nossa IA remove o fundo, centraliza o produto e ajusta para 1200x1200px (padrão ouro).',
        'Baixe tudo em lote e suba no marketplace. Seus anúncios ganham relevância imediata.',
      ],
    },
    features: [
      { title: 'Fundo Branco Puro', description: 'Remoção automática de cenário sem falhas (RGB 255,255,255).', icon: 'zap' },
      { title: 'Zoom Obrigatório', description: 'Resolução otimizada para ativar o zoom na plataforma.', icon: 'check' },
      { title: 'Processamento em Lote', description: 'Faça 50 fotos de uma vez enquanto toma café.', icon: 'clock' },
      { title: 'Sem Marca D\'água', description: 'Imagens limpas prontas para vender.', icon: 'shield' },
    ],
    pricing: {
      value: '49,90',
      period: 'mês',
      comparison: 'Fotos ilimitadas',
    },
    cta: 'OTIMIZAR MEUS ANÚNCIOS',
  },

  // 6. Agendamento Pet Shop
  {
    id: 'pet-schedule',
    slug: 'agendamento-banho-tosa',
    seoTitle: 'Sistema de Agendamento Banho e Tosa Simples | SolutionKit',
    hero: {
      title: 'Chega de confusão na agenda do Banho e Tosa',
      subtitle: 'Pare de usar caderno e WhatsApp. Agenda online que envia lembretes automáticos para o dono do pet.',
    },
    pain: {
      heading: 'O cliente esquece e você perde o horário (No-Show)',
      description: [
        'Você marca no caderno, o cliente não aparece. Você perde dinheiro e tempo ocioso que não volta mais.',
        'Atender WhatsApp para marcar horário interrompe o banho dos animais e molha o celular. É o caos operacional.',
      ],
    },
    solution: {
      heading: 'Agenda cheia e zero furos',
      description: [
        'Envie seu link para o cliente. Ele escolhe o horário livre e agenda sozinho.',
        'O sistema manda um Zap automático 2 horas antes lembrando: "O Bob tem banho hoje!". O cliente não esquece.',
      ],
    },
    features: [
      { title: 'Lembrete Automático', description: 'Reduz as faltas em até 80% via WhatsApp.', icon: 'zap' },
      { title: 'Histórico do Pet', description: 'Saiba quando foi a última tosa e vacina.', icon: 'check' },
      { title: 'Financeiro Simples', description: 'Saiba quanto faturou no dia/semana.', icon: 'clock' },
      { title: 'Link de Agendamento', description: 'Coloque na bio do Instagram e pare de digitar.', icon: 'check' },
    ],
    pricing: {
      value: '39,90',
      period: 'mês',
      comparison: 'Recupere o valor em 1 banho salvo',
    },
    cta: 'ORGANIZAR MINHA AGENDA',
  },

  // 7. Termo Consentimento LGPD
  {
    id: 'aesthetic-consent',
    slug: 'termo-lgpd-estetica',
    seoTitle: 'Gerador de Termo Consentimento Clínica Estética | SolutionKit',
    hero: {
      title: 'Proteja sua clínica de processos por "erro" estético',
      subtitle: 'Gere termos de consentimento e LGPD blindados para Botox, Laser e Micropigmentação.',
    },
    pain: {
      heading: 'O cliente diz que "não sabia do risco" e te processa',
      description: [
        'Procedimentos estéticos têm riscos biológicos. Se o cliente tiver uma reação e não assinou um termo específico, você paga a indenização.',
        'Usar modelo genérico da internet não tem validade jurídica real e não cobre a LGPD (uso de fotos antes/depois).',
      ],
    },
    solution: {
      heading: 'Documentação Jurídica em 1 Clique',
      description: [
        'Selecione o procedimento. O sistema gera o termo detalhado, explicando riscos, cuidados pós e autorização de imagem.',
        'O cliente assina na tela do tablet ou celular. Fica salvo na nuvem. Você está juridicamente coberta.',
      ],
    },
    features: [
      { title: 'Assinatura Digital', description: 'Sem papel. Assina na tela e recebe cópia no email.', icon: 'zap' },
      { title: 'Modelos Específicos', description: 'Termos para Harmonização, Laser, Tatuagem, etc.', icon: 'check' },
      { title: 'Autorização de Imagem', description: 'Regra clara para postar o Antes/Depois no Insta.', icon: 'shield' },
      { title: 'Conformidade LGPD', description: 'Dados sensíveis de saúde tratados corretamente.', icon: 'check' },
    ],
    pricing: {
      value: '59,90',
      period: 'mês',
      comparison: 'Uma consulta jurídica custa R$ 500,00',
    },
    cta: 'BLINDAR MINHA CLÍNICA',
  },

  // 8. Calculadora Frete Transportadora
  {
    id: 'freight-calc',
    slug: 'calculadora-frete-fracionado',
    seoTitle: 'Calculadora de Frete para Transportadoras | SolutionKit',
    hero: {
      title: 'Cotação de frete em 5 segundos, não 5 horas',
      subtitle: 'Elimine planilhas complexas. Deixe seu vendedor (ou cliente) calcular o frete exato instantaneamente.',
    },
    pain: {
      heading: 'A demora na cotação mata a venda',
      description: [
        'O cliente liga pedindo preço. Você precisa abrir 3 planilhas de Excel (cubagem, taxa gris, pedágio) para calcular.',
        'Se errar a conta, o prejuízo do transporte sai do seu lucro. Se demorar, o cliente fecha com outro.',
      ],
    },
    solution: {
      heading: 'Tabelas Complexas, Interface Simples',
      description: [
        'Cadastre suas tabelas de peso/faixa de CEP uma vez. O sistema cruza os dados automaticamente.',
        'Digite CEP origem, destino e peso. O valor sai na hora, com impostos e taxas inclusas.',
      ],
    },
    features: [
      { title: 'Cálculo de Cubagem', description: 'Considera peso real x peso cubado automaticamente.', icon: 'check' },
      { title: 'Taxas Extras', description: 'Inclui GRIS, Ad Valorem e Pedágio no custo final.', icon: 'clock' },
      { title: 'Link para Cliente', description: 'Deixe o próprio cliente simular no seu site.', icon: 'zap' },
      { title: 'Multi-Tabela', description: 'Gerencie preços diferentes por cliente ou região.', icon: 'check' },
    ],
    pricing: {
      value: '89,90',
      period: 'mês',
      comparison: 'Para pequenas transportadoras',
    },
    cta: 'TESTAR CALCULADORA',
  },

  // 9. Gestão Chaves Condomínio
  {
    id: 'key-control',
    slug: 'controle-chaves-condominio',
    seoTitle: 'Sistema de Controle de Chaves para Condomínios | SolutionKit',
    hero: {
      title: 'Quem está com a chave do Salão de Festas?',
      subtitle: 'Fim do livro de protocolo ilegível. Controle empréstimos de chaves e acessos do condomínio pelo celular.',
    },
    pain: {
      heading: 'Chaves perdidas e falta de responsabilidade',
      description: [
        'A chave da casa de máquinas sumiu. O porteiro do turno da noite não anotou quem pegou. O síndico fica no escuro.',
        'Livros de papel rasgam, somem e ninguém entende a letra. A segurança do condomínio fica comprometida.',
      ],
    },
    solution: {
      heading: 'Check-in e Check-out Digital',
      description: [
        'O porteiro seleciona a chave e o morador/prestador. O sistema registra a hora da retirada.',
        'Se não devolver em X horas, o sistema alerta o porteiro e o síndico. Histórico completo de quem pegou o que.',
      ],
    },
    features: [
      { title: 'Registro com Foto', description: 'Fotografe quem pegou a chave (prestadores).', icon: 'shield' },
      { title: 'Alerta de Atraso', description: 'Notifica se a chave não voltou no fim do dia.', icon: 'clock' },
      { title: 'Histórico Completo', description: 'Saiba quem usou a chave mestra mês passado.', icon: 'check' },
      { title: 'Sem Instalação', description: 'Roda no PC da portaria ou celular do porteiro.', icon: 'zap' },
    ],
    pricing: {
      value: '49,90',
      period: 'mês',
      comparison: 'Custo irrisório por unidade',
    },
    cta: 'ORGANIZAR PORTARIA',
  },

  // 10. Contador de Peças (Estoque)
  {
    id: 'stock-counter',
    slug: 'contador-estoque-rapido',
    seoTitle: 'App de Contagem de Estoque e Inventário | SolutionKit',
    hero: {
      title: 'Inventário de estoque sem perder a conta (e a paciência)',
      subtitle: 'App de contagem rápida para varejo e almoxarifado. Bipou, contou, exportou.',
    },
    pain: {
      heading: '1, 2, 3... perdi a conta!',
      description: [
        'Fazer inventário anual com prancheta é o pesadelo de qualquer lojista. Erros de contagem geram furos de estoque e prejuízo contábil.',
        'Sistemas de ERP são lentos para contar. Você precisa de agilidade no chão de loja.',
      ],
    },
    solution: {
      heading: 'Seu celular vira um Coletor de Dados',
      description: [
        'Use a câmera para ler o código de barras ou botões rápidos (+1, +10, +50) na tela.',
        'Terminou a prateleira? Exporte para Excel/CSV e atualize seu sistema principal. Simples e brutalmente rápido.',
      ],
    },
    features: [
      { title: 'Leitor de Barcode', description: 'Usa a câmera do celular com foco rápido.', icon: 'zap' },
      { title: 'Modo Offline', description: 'Conte no fundo do galpão sem internet.', icon: 'shield' },
      { title: 'Exportação Excel', description: 'Planilha pronta para importar no seu ERP.', icon: 'check' },
      { title: 'Múltiplas Contagens', description: 'Separe por setor (Prateleira A, Gaveta B).', icon: 'clock' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Mais barato que alugar coletor',
    },
    cta: 'COMEÇAR CONTAGEM',
  },

  // --- LOTE 2: Compliance e Logística ---

  // 11. Gerador de Contrato de Freelance
  {
    id: 'freelance-contract',
    slug: 'gerador-contrato-freelance',
    seoTitle: 'Gerador de Contrato de Prestação de Serviços PJ | SolutionKit',
    hero: {
      title: 'Contrate freelancers sem risco de processo trabalhista',
      subtitle: 'Gere contratos de prestação de serviço PJ juridicamente seguros em 3 minutos.',
    },
    pain: {
      heading: 'O "acordo de boca" ou contrato genérico cria Vínculo Empregatício',
      description: [
        'Usar modelos da internet que não especificam a não-subordinação cria risco imediato de vínculo empregatício e processos caros.',
        'Advogados cobram caro para redigir um contrato simples de frila ou prestador de serviço recorrente.',
      ],
    },
    solution: {
      heading: 'Contratos blindados contra vínculo CLT',
      description: [
        'Responda perguntas simples (objeto, prazo, valor) e geramos um contrato focado em resultado, não em horário.',
        'Cláusulas atualizadas com a nova lei de terceirização. Baixe em PDF pronto para assinatura digital.',
      ],
    },
    features: [
      { title: 'Cláusulas Anti-Vínculo', description: 'Texto jurídico focado na autonomia do prestador.', icon: 'shield' },
      { title: 'Assinatura Digital', description: 'Integração pronta para assinar via link.', icon: 'zap' },
      { title: 'Modelos Variados', description: 'TI, Marketing, Design, Consultoria.', icon: 'check' },
      { title: 'Histórico na Nuvem', description: 'Guarde todos os contratos em um só lugar.', icon: 'clock' },
    ],
    pricing: {
      value: '39,90',
      period: 'mês',
      comparison: 'Mais barato que 1 hora de advogado',
    },
    cta: 'GERAR CONTRATO PJ',
  },

  // 12. Conciliador de Vendas de Maquininhas
  {
    id: 'card-reconciler',
    slug: 'conciliador-taxas-cartao',
    seoTitle: 'Conciliação de Cartão de Crédito para Pequenos | SolutionKit',
    hero: {
      title: 'Sua maquininha está roubando seu lucro?',
      subtitle: 'Confira automaticamente se as taxas cobradas e os depósitos na conta estão corretos.',
    },
    pain: {
      heading: 'Taxas escondidas comem 5% a 10% do seu faturamento',
      description: [
        'Você vende R$ 100,00, a máquina diz que a taxa é 2%, mas deposita só R$ 96,00. No fim do mês, a diferença é enorme.',
        'Conferir extrato de venda papelzinho por papelzinho é impossível humanamente.',
      ],
    },
    solution: {
      heading: 'Auditoria automática das operadoras',
      description: [
        'Conectamos na sua conta da Stone, Cielo, Rede ou PagSeguro. O sistema cruza venda x depósito.',
        'Se a taxa cobrada for maior que o contratado, te avisamos o valor exato para pedir reembolso.',
      ],
    },
    features: [
      { title: 'Detecção de Erro', description: 'Alerta se a operadora cobrou taxa indevida.', icon: 'zap' },
      { title: 'Agenda de Recebíveis', description: 'Saiba exatamente quanto vai cair amanhã.', icon: 'clock' },
      { title: 'Multimarcas', description: 'Centralize todas as maquininhas num painel só.', icon: 'check' },
      { title: 'Relatório de Reembolso', description: 'Prova pronta para enviar ao suporte da máquina.', icon: 'shield' },
    ],
    pricing: {
      value: '49,90',
      period: 'mês',
      comparison: 'Recupere dinheiro todo mês',
    },
    cta: 'AUDITAR MINHAS TAXAS',
  },

  // 13. Validador de CEP/Área de Entrega (Motoboy)
  {
    id: 'delivery-area',
    slug: 'validador-area-entrega-moto',
    seoTitle: 'Calculadora de Taxa de Entrega por CEP | SolutionKit',
    hero: {
      title: 'Pare de ter prejuízo na entrega do Delivery',
      subtitle: 'Defina sua área de atuação e calcule a taxa justa de motoboy automaticamente pelo CEP.',
    },
    pain: {
      heading: 'Entregar longe demais mata seu lucro',
      description: [
        'O cliente pergunta "entrega no bairro X?". O atendente chuta um valor. O motoboy cobra mais caro e você paga a diferença.',
        'Apps de marketplace cobram taxas altas. Ter seu delivery próprio exige saber cobrar o frete certo.',
      ],
    },
    solution: {
      heading: 'Mapa Inteligente de Logística Local',
      description: [
        'Desenhe sua área de entrega no mapa. Defina taxas por raio (km) ou por bairro.',
        'Ao digitar o CEP no telefone ou WhatsApp, o sistema diz: "Área atendida, Taxa R$ 12,00". Sem erro.',
      ],
    },
    features: [
      { title: 'Busca por CEP', description: 'Resposta imediata de valor e disponibilidade.', icon: 'zap' },
      { title: 'Desenho no Mapa', description: 'Interface visual para definir onde você atende.', icon: 'check' },
      { title: 'Cálculo de KM', description: 'Preço baseado na distância real da loja.', icon: 'clock' },
      { title: 'Bloqueio de Risco', description: 'Marque áreas perigosas onde não entrega.', icon: 'shield' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Evite corridas no prejuízo',
    },
    cta: 'DEFINIR MINHAS TAXAS',
  },

  // 14. Gestão de Fichas de Anamnese
  {
    id: 'anamnesis-form',
    slug: 'ficha-anamnese-digital',
    seoTitle: 'Ficha de Anamnese Digital Estética e Saúde | SolutionKit',
    hero: {
      title: 'Jogue fora o arquivo de papel da sua clínica',
      subtitle: 'Fichas de anamnese digitais, seguras e organizadas para Estética, Nutrição e Fisioterapia.',
    },
    pain: {
      heading: 'Ficha de papel perde dados e risco LGPD',
      description: [
        'Achar a ficha da cliente que veio ano passado demora horas. Papéis amassam e ocupam espaço.',
        'Deixar dados de saúde em gavetas destrancadas é uma violação grave da lei de proteção de dados (LGPD).',
      ],
    },
    solution: {
      heading: 'Histórico do paciente na palma da mão',
      description: [
        'Preencha a anamnese no tablet ou envie o link para o cliente preencher antes de chegar.',
        'Adicione fotos da evolução do tratamento, anotações e assinatura digital. Tudo criptografado.',
      ],
    },
    features: [
      { title: 'Envio por Link', description: 'Cliente preenche em casa, você ganha tempo.', icon: 'zap' },
      { title: 'Fotos Antes/Depois', description: 'Anexe fotos ilimitadas ao prontuário.', icon: 'check' },
      { title: 'Busca Rápida', description: 'Encontre qualquer paciente em 2 segundos.', icon: 'clock' },
      { title: 'Backup Seguro', description: 'Seus dados protegidos contra perda ou roubo.', icon: 'shield' },
    ],
    pricing: {
      value: '59,90',
      period: 'mês',
      comparison: 'Sua clínica organizada',
    },
    cta: 'DIGITALIZAR MINHAS FICHAS',
  },

  // 15. Gerador de Rótulos de Alergênicos (ANVISA)
  {
    id: 'food-label',
    slug: 'rotulador-alimentos-anvisa',
    seoTitle: 'Gerador de Rótulo Nutricional e Alergênicos | SolutionKit',
    hero: {
      title: 'Venda seus doces e pães dentro da nova lei da ANVISA',
      subtitle: 'Gere rótulos com tabela nutricional e alerta de alergênicos obrigatórios em minutos.',
    },
    pain: {
      heading: 'A multa por rotulagem errada fecha seu negócio',
      description: [
        'A nova legislação (RDC 429) exige alertas claras e tabelas precisas. Fazer isso no Excel é difícil e arriscado.',
        'Pequenos produtores artesanais perdem pontos de venda por não terem código de barras e rótulo profissional.',
      ],
    },
    solution: {
      heading: 'Nutricionista Digital Automática',
      description: [
        'Cadastre sua receita (ex: 500g farinha, 200g açúcar). O sistema calcula as calorias e macros.',
        'Gera o rótulo pronto para imprimir, já com os alertas "CONTÉM GLÚTEN", "ALÉRGICOS: CONTÉM LEITE" em destaque.',
      ],
    },
    features: [
      { title: 'Cálculo Nutricional', description: 'Base de dados oficial (TACO/IBGE).', icon: 'check' },
      { title: 'Alertas Automáticos', description: 'Identifica glúten, lactose e castanhas sozinho.', icon: 'shield' },
      { title: 'Padrão RDC 429', description: 'Layout, fontes e lupa frontal atualizados.', icon: 'check' },
      { title: 'Impressão Térmica', description: 'Exporte para impressoras de etiquetas comuns.', icon: 'zap' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Rótulos ilimitados',
    },
    cta: 'CRIAR MEUS RÓTULOS',
  },

  // 16. Organizador de Notas Fiscais de Entrada
  {
    id: 'xml-organizer',
    slug: 'organizador-xml-nfe',
    seoTitle: 'Gestão e Download de XML NFe de Entrada | SolutionKit',
    hero: {
      title: 'Nunca mais perca uma Nota Fiscal de compra',
      subtitle: 'Baixe e organize automaticamente os XMLs de tudo que emitiram contra seu CNPJ.',
    },
    pain: {
      heading: 'A contabilidade cobra documentos que você não tem',
      description: [
        'Fornecedores enviam notas por email que vão pro spam. No fim do mês, seu contador fica te cobrando XMLs faltantes.',
        'Sem o XML, você não consegue dar entrada no estoque corretamente e corre risco fiscal.',
      ],
    },
    solution: {
      heading: 'Central de Documentos Fiscais',
      description: [
        'O sistema monitora a SEFAZ 24h. Emitiram nota contra você? O XML aparece no painel e baixa automático.',
        'Encaminhamento automático mensal para seu contador. Você não precisa fazer nada.',
      ],
    },
    features: [
      { title: 'Captura Automática', description: 'Baixa direto da Receita sem captcha.', icon: 'zap' },
      { title: 'Manifesto do Destinatário', description: 'Diga se recebeu ou desconhece a compra com 1 clique.', icon: 'shield' },
      { title: 'Backup de 5 Anos', description: 'Guarda legal obrigatória garantida.', icon: 'clock' },
      { title: 'Envio ao Contador', description: 'Integração direta com o email da contabilidade.', icon: 'check' },
    ],
    pricing: {
      value: '39,90',
      period: 'mês',
      comparison: 'Paz com a contabilidade',
    },
    cta: 'ORGANIZAR MEUS XMLS',
  },

  // 17. Lembrete de Renovação de Alvarás
  {
    id: 'cert-expiry',
    slug: 'gestor-validade-certificados',
    seoTitle: 'Controle de Validade de Alvarás e Certificados | SolutionKit',
    hero: {
      title: 'Não deixe sua empresa parar por um certificado vencido',
      subtitle: 'Monitoramento de validade de Certificado Digital, Alvará e Licença de Bombeiros.',
    },
    pain: {
      heading: 'Esquecer uma renovação custa multas e dias parados',
      description: [
        'Se o Certificado Digital (e-CNPJ) vence, você não emite nota fiscal. A loja para. O prejuízo é imediato.',
        'Renovar licenças em cima da hora gera taxas de urgência e estresse desnecessário.',
      ],
    },
    solution: {
      heading: 'Seu Compliance Officer Pessoal',
      description: [
        'Cadastre seus documentos vitais. O sistema cria uma linha do tempo.',
        'Receba avisos agressivos (Email, SMS, WhatsApp) 60, 30 e 7 dias antes do vencimento. Impossível esquecer.',
      ],
    },
    features: [
      { title: 'Alertas Multicanal', description: 'Te avisa onde você estiver antes de vencer.', icon: 'zap' },
      { title: 'Dashboard Visual', description: 'Semáforo: Verde (ok), Amarelo (atenção), Vermelho (venceu).', icon: 'check' },
      { title: 'Gestão de Filiais', description: 'Controle os documentos de várias lojas num só lugar.', icon: 'shield' },
      { title: 'Checklist de Renovação', description: 'Saiba quais documentos precisa para renovar cada item.', icon: 'clock' },
    ],
    pricing: {
      value: '19,90',
      period: 'mês',
      comparison: 'Seguro contra burocracia',
    },
    cta: 'MONITORAR VENCIMENTOS',
  },

  // 18. Agendamento de Espaços Compartilhados
  {
    id: 'coworking-booking',
    slug: 'reserva-salas-coworking',
    seoTitle: 'Sistema de Reserva de Salas para Coworking | SolutionKit',
    hero: {
      title: 'Quem reservou a sala de reunião?',
      subtitle: 'Acabe com os conflitos de agenda no seu coworking ou escritório compartilhado.',
    },
    pain: {
      heading: 'Planilhas geram "double booking" e brigas',
      description: [
        'Duas pessoas marcam reunião na mesma sala no mesmo horário porque a planilha não estava atualizada.',
        'Controlar quem usou quantas horas para cobrar no final do mês é um pesadelo manual.',
      ],
    },
    solution: {
      heading: 'Calendário Visual em Tempo Real',
      description: [
        'Cada membro tem seu login. Abre o app, vê a sala livre e reserva. O bloqueio é instantâneo para os outros.',
        'Relatório mensal de horas de uso por usuário para facilitar o faturamento.',
      ],
    },
    features: [
      { title: 'Check-in por QR Code', description: 'Cole na porta da sala para confirmar presença.', icon: 'zap' },
      { title: 'Limite de Horas', description: 'Defina créditos de uso por plano do cliente.', icon: 'shield' },
      { title: 'Painel de TV', description: 'Mostre na recepção quem está em cada sala.', icon: 'check' },
      { title: 'Google Agenda', description: 'Sincroniza com a agenda pessoal do usuário.', icon: 'clock' },
    ],
    pricing: {
      value: '49,90',
      period: 'mês',
      comparison: 'Para até 5 salas',
    },
    cta: 'ORGANIZAR MEU ESPAÇO',
  },

  // 19. Calculadora de Imposto Simples Nacional
  {
    id: 'tax-simulator',
    slug: 'simulador-imposto-simples',
    seoTitle: 'Simulador de Cálculo do Simples Nacional | SolutionKit',
    hero: {
      title: 'Quanto vou pagar de imposto mês que vem?',
      subtitle: 'Simulador preciso de DAS para prever seu fluxo de caixa e evitar surpresas.',
    },
    pain: {
      heading: 'A surpresa do dia 20 quebra seu caixa',
      description: [
        'O Simples Nacional varia conforme seu faturamento acumula (RBT12). Se mudar de faixa, o imposto dobra.',
        'Esperar a guia chegar do contador é tarde demais para planejar o financeiro.',
      ],
    },
    solution: {
      heading: 'Previsibilidade Financeira Real',
      description: [
        'Lance suas notas fiscais conforme emite. O sistema recalcula a alíquota efetiva em tempo real.',
        'Saiba exatamente quanto reservar para o DAS do dia 20. Simule cenários: "E se eu faturar mais 10k?"',
      ],
    },
    features: [
      { title: 'Anexos Atualizados', description: 'Tabelas de Comércio, Serviço e Indústria 2024.', icon: 'check' },
      { title: 'Alerta de Mudança de Faixa', description: 'Avisa se você está prestes a pagar mais caro.', icon: 'shield' },
      { title: 'Fator R', description: 'Calcula se compensa aumentar o Pró-Labore para reduzir imposto.', icon: 'zap' },
      { title: 'Planejamento Anual', description: 'Projeção de impostos para o ano todo.', icon: 'clock' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Planejamento financeiro simples',
    },
    cta: 'SIMULAR MEUS IMPOSTOS',
  },

  // 20. CRM de Contatos de Imprensa
  {
    id: 'pr-crm',
    slug: 'crm-assessoria-imprensa',
    seoTitle: 'CRM e Mailing para Assessoria de Imprensa | SolutionKit',
    hero: {
      title: 'Seu mailing de jornalistas organizado e atualizado',
      subtitle: 'O CRM simples para pequenas agências de PR e assessores freelancers.',
    },
    pain: {
      heading: 'Excel com emails antigos queima seu filme',
      description: [
        'Enviar release para jornalista que já mudou de redação é amadorismo. Planilhas desatualizam rápido.',
        'Ferramentas grandes (Comunique-se, Maxpress) custam milhares de reais, inviável para freelancers.',
      ],
    },
    solution: {
      heading: 'Relacionamento com a mídia focado em nicho',
      description: [
        'Cadastre seus contatos e categorize por editoria (Tech, Moda, Política).',
        'Registre quem publicou, quem pediu pauta e quem ignorou. Historial completo do relacionamento.',
      ],
    },
    features: [
      { title: 'Histórico de Pitch', description: 'Saiba quando foi o último email enviado para o repórter.', icon: 'clock' },
      { title: 'Categorização por Tags', description: 'Filtre "Influencers Tech" em 1 segundo.', icon: 'check' },
      { title: 'Validador de Email', description: 'Testa se o email da redação ainda existe.', icon: 'zap' },
      { title: 'LGPD para Dados', description: 'Gestão segura de dados pessoais de jornalistas.', icon: 'shield' },
    ],
    pricing: {
      value: '69,90',
      period: 'mês',
      comparison: '10x mais barato que os grandes',
    },
    cta: 'ORGANIZAR MEU MAILING',
  },

  // --- LOTE 3: RH, Imóveis e Financeiro de Nicho ---

  // 21. Rastreador Simples de Férias e Ausências
  {
    id: 'vacation-tracker',
    slug: 'rastreador-ferias-ausencias',
    seoTitle: 'Controle de Férias e Ausências de Equipe | SolutionKit',
    hero: {
      title: 'Acabe com os conflitos de férias na sua equipe',
      subtitle: 'Calendário visual de ausências que evita "buracos" na escala e multas do eSocial.',
    },
    pain: {
      heading: 'Dois pedem férias juntos e a equipe fica desfalcada',
      description: [
        'Sem controle visual, você aprova férias na mesma data e sua operação para. O prejuízo é certo.',
        'Esquecer de avisar a contabilidade para programar o pagamento gera multa de férias em dobro (CLT).',
      ],
    },
    solution: {
      heading: 'Quem pede primeiro, leva (se você aprovar)',
      description: [
        'Cada funcionário consulta o calendário e solicita a folga. O sistema bloqueia datas já ocupadas por colegas críticos.',
        'Visualização em linha do tempo clara. Saiba quem vai estar fora mês que vem com 1 olhar.',
      ],
    },
    features: [
      { title: 'Alerta de eSocial', description: 'Avisa se o funcionário está perto de vencer a segunda férias.', icon: 'shield' },
      { title: 'Calendário de Equipe', description: 'Visão unificada de quem está trabalhando hoje.', icon: 'clock' },
      { title: 'Aprovação Rápida', description: 'Gestor aprova ou reprova com 1 clique no email.', icon: 'check' },
      { title: 'Saldo de Dias', description: 'Controle automático de quantos dias ainda restam.', icon: 'zap' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Para até 10 funcionários',
    },
    cta: 'ORGANIZAR FÉRIAS AGORA',
  },

  // 22. Gerador de Declaração de Horas (Profissionais)
  {
    id: 'timesheet',
    slug: 'gerador-declaracao-horas',
    seoTitle: 'Gerador de Timesheet e Declaração de Horas | SolutionKit',
    hero: {
      title: 'Comprove seu trabalho e receba sem briga',
      subtitle: 'Gere relatórios de horas (Timesheets) oficiais e profissionais em PDF para anexar à sua fatura.',
    },
    pain: {
      heading: 'O cliente questiona o valor da fatura',
      description: [
        'Você trabalhou o mês todo, mas o cliente diz que "não viu" e pede desconto. Sua palavra contra a dele.',
        'Enviar uma planilha de Excel feia passa amadorismo e desorganização.',
      ],
    },
    solution: {
      heading: 'Transparência total gera confiança',
      description: [
        'Dê play no cronômetro ou preencha o bloco de horas. Descreva a atividade (ex: "Correção de Bug").',
        'No dia 30, gere um PDF elegante com sua logo, lista de tarefas e total a pagar.',
      ],
    },
    features: [
      { title: 'Cronômetro Simples', description: 'Botão Start/Stop no navegador ou celular.', icon: 'clock' },
      { title: 'Exportação PDF', description: 'Relatório blindado contra edições do cliente.', icon: 'check' },
      { title: 'Multi-Projetos', description: 'Separe as horas do Cliente A e do Cliente B.', icon: 'zap' },
      { title: 'Taxa Horária', description: 'Calcula o valor final (Horas x Sua Taxa) automático.', icon: 'shield' },
    ],
    pricing: {
      value: '19,90',
      period: 'mês',
      comparison: 'Seu tempo vale dinheiro',
    },
    cta: 'COMEÇAR A CRONOMETRAR',
  },

  // 23. Calculadora de Reajuste de Aluguel (IGP-M/IPCA)
  {
    id: 'rent-calc',
    slug: 'calculadora-reajuste-aluguel',
    seoTitle: 'Calculadora de Reajuste de Aluguel IGP-M IPCA | SolutionKit',
    hero: {
      title: 'Reajuste o aluguel sem discussão com o inquilino',
      subtitle: 'Calculadora oficial que puxa o índice correto e gera a carta de notificação pronta.',
    },
    pain: {
      heading: 'Fazer a conta na mão gera desconfiança',
      description: [
        'Você manda o valor novo pelo WhatsApp, o inquilino acha que está errado e cria um clima chato.',
        'Esquecer a data de aniversário do contrato significa perder dinheiro para a inflação por meses.',
      ],
    },
    solution: {
      heading: 'Dados oficiais do Banco Central',
      description: [
        'Selecione o índice (IGP-M ou IPCA) e a data de início. O sistema busca a taxa acumulada oficial.',
        'Gera o PDF da carta de notificação formal, com o cálculo discriminado mês a mês. Profissional e indiscutível.',
      ],
    },
    features: [
      { title: 'Índices Oficiais', description: 'Conectado direto com a fonte de dados do governo.', icon: 'check' },
      { title: 'Carta de Notificação', description: 'Modelo jurídico pronto para enviar ou imprimir.', icon: 'shield' },
      { title: 'Gestão de Contratos', description: 'Cadastre vários imóveis e inquilinos.', icon: 'zap' },
      { title: 'Lembrete de Aniversário', description: 'Avisa 30 dias antes do reajuste.', icon: 'clock' },
    ],
    pricing: {
      value: '14,90',
      period: 'imóvel',
      comparison: 'Preço único por ano',
    },
    cta: 'CALCULAR REAJUSTE',
  },

  // 24. Gerador de Recibo de Pagamento (Avulso)
  {
    id: 'receipt-gen',
    slug: 'gerador-recibo-pagamento',
    seoTitle: 'Gerador de Recibo de Pagamento Autônomo (RPA) | SolutionKit',
    hero: {
      title: 'Pague freelancers e diárias dentro da lei',
      subtitle: 'Gerador de Recibo de Pagamento de Autônomo (RPA) e recibos simples com cálculo de impostos.',
    },
    pain: {
      heading: 'Pagar no PIX sem recibo é um risco enorme',
      description: [
        'Sem documento, o prestador pode processar alegando vínculo empregatício. O recibo de papelaria não protege sua empresa.',
        'Calcular INSS e IRRF de autônomo na mão é difícil e se errar, a Receita multa.',
      ],
    },
    solution: {
      heading: 'Recibo Legal e Cálculo Automático',
      description: [
        'Preencha o valor bruto acordado. O sistema desconta os impostos (INSS/ISS/IR) automaticamente.',
        'Emite um recibo PDF pronto para assinatura digital ou envio no WhatsApp. Tudo calculado.',
      ],
    },
    features: [
      { title: 'Cálculo de Impostos', description: 'Tabela INSS e IRRF sempre atualizada.', icon: 'check' },
      { title: 'Assinatura na Tela', description: 'Peça para o prestador assinar no seu celular.', icon: 'zap' },
      { title: 'Envio por WhatsApp', description: 'PDF leve gerado na hora.', icon: 'clock' },
      { title: 'Base Legal', description: 'Recibo com validade jurídica comprovada.', icon: 'shield' },
    ],
    pricing: {
      value: '29,90',
      period: 'mês',
      comparison: 'Recibos ilimitados',
    },
    cta: 'GERAR RECIBO AGORA',
  },

  // 25. Organizador de Credenciais de Acesso (Micro-Agência)
  {
    id: 'password-manager',
    slug: 'organizador-senhas-agencia',
    seoTitle: 'Gerenciador de Senhas para Agências Digitais | SolutionKit',
    hero: {
      title: 'Qual é a senha do Instagram desse cliente mesmo?',
      subtitle: 'Cofre de senhas criptografado feito para agências compartilharem acessos com a equipe com segurança.',
    },
    pain: {
      heading: 'Planilha de senhas no Drive é um perigo',
      description: [
        'Um vazamento de dados pode custar sua agência. Se sua planilha vaza, seus clientes são hackeados. É irresponsável manter senhas em texto puro.',
        'Quando um funcionário sai da agência, você tem o trabalho insano de trocar 50 senhas manualmente.',
      ],
    },
    solution: {
      heading: 'Compartilhe o acesso, não a senha',
      description: [
        'Centralize tudo no cofre. Compartilhe o acesso com o estagiário via extensão, sem que ele veja os caracteres da senha.',
        'Revogue o acesso de ex-funcionários com um clique. Auditoria completa de quem acessou o quê.',
      ],
    },
    features: [
      { title: 'Criptografia de Ponta', description: 'Nível bancário. Nem nós temos acesso.', icon: 'shield' },
      { title: 'Grupos de Clientes', description: 'Organize senhas por conta/projeto.', icon: 'check' },
      { title: 'Extensão de Browser', description: 'Preenchimento automático (Autofill).', icon: 'zap' },
      { title: 'Log de Acesso', description: 'Saiba que horas fulano entrou no Facebook do cliente.', icon: 'clock' },
    ],
    pricing: {
      value: '59,90',
      period: 'mês',
      comparison: 'Para até 5 usuários',
    },
    cta: 'PROTEGER MEUS ACESSOS',
  },
];