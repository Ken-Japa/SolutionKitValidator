# SolutionKit - Validador de Ideias Micro-SaaS

Este projeto é uma plataforma de **Validação de Mercado** (Fake Door Testing) projetada para testar a demanda por ideias de Micro-SaaS e ferramentas digitais antes de investir recursos no desenvolvimento do produto final.

O objetivo é medir a "Dor Real" e a "Intenção de Compra" através de Landing Pages otimizadas para conversão e SEO orgânico (Long-Tail Keywords).

## 🚀 Funcionalidades

- **Multilíngue Real:** Suporte nativo com URLs localizadas para melhor SEO.
  - 🇧🇷 `/ideia/confirmador-pix`
  - 🇺🇸 `/en/instant-pix-confirmer`
  - 🇪🇸 `/es/confirmador-transferencias`
- **Arquitetura Data-Driven:** Todas as páginas de vendas são geradas dinamicamente a partir de arquivos de dados estruturados (`data.ts`), facilitando a adição de novas ideias sem mexer no código React.
- **Tracking de Conversão:** Integração nativa com Google Analytics 4 (GA4) para rastrear o evento crítico de clique no botão de compra (`fake_purchase_attempt`), segmentado por ideia e idioma.
- **SEO Técnico:** Meta tags dinâmicas (Title e Description), Sitemap XML automático e HTML semântico.
- **Design Premium:** Interface limpa, rápida e responsiva construída com Tailwind CSS e tipografia Inter, transmitindo segurança e profissionalismo.

## 🛠️ Tecnologias

- **Core:** React 19, TypeScript, Vite.
- **Estilização:** Tailwind CSS, Lucide React (Ícones).
- **Roteamento:** React Router Dom v7.
- **Analytics:** Google Analytics 4 (gtag.js).
- **Testes:** Vitest (para garantir integridade dos dados entre idiomas).

## 📂 Estrutura do Projeto

```bash
/
├── src/
│   ├── data.ts          # Dados em Português (com IDs únicos)
│   ├── data-en.ts       # Traduções em Inglês (Slugs localizados)
│   ├── data-es.ts       # Traduções em Espanhol (Slugs localizados)
│   ├── pages/           # Componentes de Página (Landing, Home, Obrigado, 404)
│   ├── components/      # Componentes UI reutilizáveis (Header, Footer, Cards)
│   ├── utils/           # Lógica de Tracking (GA4) e Helpers
│   └── App.tsx          # Configuração de Rotas e Layout Base
├── public/              # Assets estáticos
├── scripts/             # Scripts de build (Geração de Sitemap.xml)
└── index.html           # Entry point com configuração do GA4
```

## 🚦 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/solutionkit.git
   cd solutionkit
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse:** `http://localhost:5173`

## 📊 Configuração do Analytics (Crucial)

Para que a validação funcione e você receba os dados de intenção de compra:

1. Abra o arquivo `index.html`.
2. Localize a tag do Google Analytics no `<head>`.
3. Substitua `G-XXXXXXXXXX` pelo seu ID de Medição do GA4.

## 📝 Como Adicionar Uma Nova Ideia

O sistema foi desenhado para escalabilidade. Para testar uma nova hipótese:

1. Abra `src/data.ts`.
2. Adicione um novo objeto `Idea` com um **ID único** (ex: `my-new-idea`).
3. Adicione as traduções em `src/data-en.ts` e `src/data-es.ts` usando o **mesmo ID** mas com o **slug traduzido**.

## 🚀 Deploy (Vercel)

Este projeto está otimizado para deploy na Vercel.

1. Faça push para o GitHub.
2. Importe o projeto no Dashboard da Vercel.
3. As configurações de build (`npm run build`) serão detectadas automaticamente.
4. O script de `sitemap` roda automaticamente no build para garantir que o Google indexe suas novas URLs.

## 🧪 Testes de Integridade

Como o projeto depende de dados sincronizados em 3 idiomas, use os testes para garantir que IDs batem e slugs estão corretos:

```bash
npm run test
```

## 📄 Licença

Proprietário - Todos os direitos reservados.
