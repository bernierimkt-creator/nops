# Copy Instantânea para WhatsApp

Um website de vendas moderno e responsivo para o produto **Copy Instantânea para WhatsApp** — 3 frases prontas que geram respostas instantâneas em até 60 segundos.

## 🚀 Características

- **Design Futurista** — Tema escuro com cores neon (laranja e ciano)
- **Responsivo** — Funciona perfeitamente em desktop, tablet e mobile
- **Animações Minimalistas** — Efeitos suaves e elegantes
- **Contador Regressivo** — Cria urgência com oferta por tempo limitado
- **Integração com GG Checkout** — Links de pagamento diretos aos botões CTA
- **SEO Otimizado** — Estrutura semântica e meta tags
- **Performance** — Build otimizado com Vite

## 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm 10.4.1+ (gerenciador de pacotes)

## 🛠️ Instalação Local

1. **Clone o repositório:**
```bash
git clone https://github.com/bernierimkt-creator/Copy-instantanea-para-whatsapp.git
cd Copy-instantanea-para-whatsapp
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
pnpm build
```

Isso gera a pasta `dist/` com os arquivos estáticos prontos para deploy.

## 📦 Estrutura do Projeto

```
Copy-instantanea-para-whatsapp/
├── client/                    # Código React frontend
│   ├── public/               # Imagens e assets estáticos
│   │   ├── hero-icon.png
│   │   ├── problem-section.png
│   │   ├── solution-section.png
│   │   └── offer-mockup.png
│   └── src/
│       ├── pages/
│       │   └── Home.tsx      # Página principal do website
│       ├── components/       # Componentes React reutilizáveis
│       ├── App.tsx           # Componente raiz
│       ├── main.tsx          # Entry point
│       └── index.css         # Estilos globais
├── dist/                      # Build de produção (gerado)
├── package.json              # Dependências e scripts
├── vite.config.ts            # Configuração do Vite
├── tsconfig.json             # Configuração TypeScript
├── tailwind.config.ts        # Configuração Tailwind CSS
└── README.md                 # Este arquivo
```

## 🌐 Deploy no GitHub Pages

### Opção 1: Deploy Automático com GitHub Actions

1. **Habilite GitHub Pages** no repositório:
   - Vá em Settings → Pages
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/ (root)`

2. **Crie o arquivo de workflow** (já incluído):
   - `.github/workflows/deploy.yml` — Deploy automático a cada push

3. **Faça push do código:**
```bash
git add .
git commit -m "Deploy inicial"
git push origin main
```

O site será publicado automaticamente em: `https://bernierimkt-creator.github.io/Copy-instantanea-para-whatsapp/`

### Opção 2: Deploy Manual

1. **Build o projeto:**
```bash
pnpm build
```

2. **Faça push da pasta `dist/`:**
```bash
git add dist/
git commit -m "Build para produção"
git push origin main
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (não será commitado):

```env
# Links de checkout GG Checkout
VITE_CHECKOUT_BASIC=https://www.ggcheckout.com/checkout/v2/VC7orS6gWVhQlSmgPjkY
VITE_CHECKOUT_PREMIUM=https://www.ggcheckout.com/checkout/v2/41fCputvnbMYc8ZeuDo2
```

## 📝 Editar Conteúdo

Todos os textos, imagens e links estão no arquivo `client/src/pages/Home.tsx`. Para fazer alterações:

1. Edite o arquivo `Home.tsx`
2. As mudanças aparecerão em tempo real no servidor de desenvolvimento
3. Faça commit e push para atualizar o site em produção

## 🎨 Customização

### Cores Neon
As cores principais estão definidas em `client/src/index.css`:
- **Laranja**: `#FF6B35`
- **Ciano**: `#00D9FF`

### Tipografia
Fontes e estilos globais estão em `client/src/index.css` e `tailwind.config.ts`

### Imagens
As imagens estão em `client/public/`:
- `hero-icon.png` — Ícone WhatsApp com cronômetro
- `problem-section.png` — Visualização do problema
- `solution-section.png` — Visualização da solução
- `offer-mockup.png` — Mockup do produto

## 🔗 Links Importantes

- **Site ao vivo**: (será atualizado após deploy)
- **GitHub**: https://github.com/bernierimkt-creator/Copy-instantanea-para-whatsapp
- **GG Checkout**: https://www.ggcheckout.com/

## 📊 Seções do Website

1. **Navbar** — Logo e botão "Comprar Agora"
2. **Hero Section** — Headline principal e CTAs
3. **Problema** — Identificação do pain point
4. **Solução** — Visão da transformação
5. **Oferta** — Apresentação do produto
6. **Secret Sauce** — Diferencial competitivo
7. **Benefícios** — FAB (Features, Advantages, Benefits)
8. **Depoimentos** — Prova social com 6 clientes
9. **Preços** — 2 planos (R$ 1,99 e R$ 7,99)
10. **Garantia** — 15 dias sem risco
11. **FAQ** — 7 perguntas frequentes
12. **Autoridade** — Apresentação do criador
13. **CTA Final** — Chamada para ação
14. **Rodapé** — Links e informações legais

## 🚀 Performance

- **Vite** — Build ultra-rápido
- **React 18** — Renderização otimizada
- **Tailwind CSS 4** — Estilos otimizados
- **Code Splitting** — Carregamento eficiente

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔐 Segurança

- Nenhuma informação sensível no código
- Links de checkout seguros
- HTTPS obrigatório em produção

## 📄 Licença

MIT — Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**Marco Bernieri** — Especialista em vendas no WhatsApp

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

## 📧 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Última atualização**: Novembro 2025
