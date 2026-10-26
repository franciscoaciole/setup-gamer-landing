# Setup Gamer Landing

Landing page de alto impacto para divulgação de um setup gamer completo, focada em conversão por WhatsApp e apresentação premium do produto.

## Visão geral

Este projeto foi desenvolvido em Next.js para vender um setup gamer com:

- hero section forte e visualmente impactante
- galeria com imagens do equipamento
- especificações técnicas em blocos organizados
- performance estimada por jogo
- diferenciais do produto
- CTA para contato direto via WhatsApp
- melhoras de SEO, acessibilidade e segurança básica de produção

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics

## Requisitos

- Node.js 20+
- npm, pnpm, yarn ou bun

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

Acesse a aplicação em:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev   # inicia o ambiente em desenvolvimento
npm run build # gera a build de produção
npm run start # inicia a app em produção localmente
npm run lint # executa a checagem de lint
```

## Estrutura principal

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    manifest.ts
    robots.ts
    sitemap.ts
  components/
    Hero.tsx
    Gallery.tsx
    Specs.tsx
    Performance.tsx
    Differentials.tsx
    FinalCTA.tsx
    Footer.tsx
  data/
    specs.ts
public/
  images/
  icon.svg
```

## Personalização

Os dados do produto e do CTA ficam em `src/data/specs.ts`, incluindo:

- título do setup
- headline do hero
- texto de venda
- WhatsApp para contato
- especificações técnicas
- desempenho estimado por jogo
- diferenciais e mensagens de conversão

## SEO e produção

A landing page já conta com:

- metadata Open Graph
- Twitter Card
- sitemap
- robots.txt via rotas do Next
- manifest para instalação em dispositivos
- headers de segurança básicos

## Deploy

O projeto pode ser implantado facilmente no Vercel ou em qualquer ambiente compatível com Next.js.

```bash
npm run build
```

## Observações finais

Esta versão já está pronta para uso como landing page funcional de venda direta, com foco em apresentação visual, conversão e presença digital básica.
