# Setup Gamer Landing

Landing page moderna para divulgação de um setup gamer completo, com foco em conversão para WhatsApp e apresentação visual premium.

## Sobre o projeto

Este projeto foi desenvolvido em Next.js para apresentar um setup gamer com:

- hero section impactante
- galeria de imagens do equipamento
- especificações técnicas em blocos
- performance estimada por jogo
- diferenciais do produto
- call-to-action para contato via WhatsApp

A estrutura foi pensada para funcionar como uma landing page comercial para venda direta de um setup gamer.

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

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev   # inicia o ambiente de desenvolvimento
npm run build # gera a build de produção
npm run start # inicia a aplicação em produção
npm run lint # executa a checagem de lint
```

## Estrutura principal

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
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
```

## Personalização

Os dados do produto estão em `src/data/specs.ts`, incluindo:

- nome e subtítulo do setup
- WhatsApp para contato
- especificações técnicas
- performance estimada por jogo
- diferenciais e mensagens de venda

## Deploy

O projeto pode ser implantado facilmente em plataformas como Vercel.

```bash
npm run build
```

Em seguida, faça o deploy no ambiente da sua escolha.

## Observações

Este README foi adaptado para a landing page do setup gamer do projeto atual, substituindo o template padrão do Next.js.
