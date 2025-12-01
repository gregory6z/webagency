# Web Agence - Site Institucional

## Project Overview

Site/Landing page moderna para agência web na região de Marseille/Aubagne, França.
Foco em captar clientes locais através de presença digital profissional.

**Objetivo:** Gerar leads qualificados (sem preços no site)

**Público-alvo:** Empresas de construção, profissionais de saúde, profissionais liberais, comércios locais

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Biome (linter/formatter)
- next-intl (i18n)
- Framer Motion (animações)
- pnpm (package manager)

## Project Structure

```txt
src/
├── app/
│   ├── layout.tsx              # Root layout (fontes, metadata)
│   ├── globals.css             # CSS global + design tokens
│   └── [locale]/               # Rotas dinâmicas por idioma
│       ├── layout.tsx          # Provider next-intl
│       └── page.tsx            # Homepage
├── components/
│   ├── ui/                     # Componentes base (Button, Card, Input)
│   ├── sections/               # Seções da landing (Hero, Services, etc)
│   └── layout/                 # Header, Footer, WhatsAppFloat
├── i18n/                       # Internacionalização (ver seção abaixo)
├── lib/                        # Utilitários e helpers
├── hooks/                      # Custom React hooks
└── types/                      # TypeScript types/interfaces
```

## Code Style

- Usar pnpm para todos os comandos
- Usar Biome para lint/format (nunca ESLint/Prettier)
- Sem semicolons (asNeeded)
- Double quotes
- 2 espaços de indentação
- Preferir Server Components (padrão do App Router)
- Usar "use client" apenas quando necessário (interatividade, hooks)

## Internationalization

- 4 idiomas: FR (padrão), EN, PT, ES
- Detecção automática pelo navegador
- Ao adicionar textos, sempre criar em todos os 4 idiomas
- Server Components: usar `getTranslations` de "next-intl/server"
- Client Components: usar `useTranslations` de "next-intl"

### Estrutura i18n

```txt
src/i18n/
├── config.ts           # Locales e defaultLocale
├── routing.ts          # Configuração de rotas
├── navigation.ts       # Link, useRouter, etc.
├── request.ts          # Carrega mensagens no server
└── messages/
    ├── fr/
    │   ├── common.json     # Nav, Footer, CTAs
    │   ├── hero.json       # Seção Hero
    │   ├── services.json   # Seção Serviços
    │   └── index.ts        # Barrel export
    ├── en/
    ├── pt/
    └── es/
```

### Adicionar novo módulo de tradução

1. Criar `{modulo}.json` em cada pasta de idioma (fr/, en/, pt/, es/)
2. Importar e exportar no `index.ts` de cada idioma
3. Usar com `getTranslations("{modulo}")` ou `useTranslations("{modulo}")`

## Next.js Best Practices

### Server vs Client Components

**Server Components (padrão) - usar para:**

- Buscar dados de APIs/banco de dados
- Acessar secrets e variáveis de ambiente
- Componentes sem interatividade
- Reduzir JavaScript no cliente

**Client Components ("use client") - usar para:**

- Interatividade (onClick, onChange, forms com state local)
- Hooks (useState, useEffect, useContext)
- APIs do navegador (localStorage, window, geolocation)
- Animações com Framer Motion

### Padrões de Composição

- Server Component busca dados → passa como props para Client Component
- Client Component pode receber Server Component como children
- Marcar "use client" apenas no componente que precisa, não no pai
- Providers de contexto devem ser Client Components separados

### DO's

- Chamar funções async diretamente em Server Components
- Usar `cookies()`, `headers()`, `searchParams` em Server Components
- Colocar Suspense boundaries acima dos componentes async
- Revalidar cache após mutations com `revalidatePath()`
- Usar composição: Client Component wrapper com Server Component children

### DON'Ts

- Não usar Context em Server Components (não suportado)
- Não fazer fetch para Route Handlers do mesmo servidor em Server Components
- Não usar `useSearchParams` em Server Components (usar `searchParams` prop)
- Não colocar Suspense dentro de componentes async
- Não usar `redirect()` dentro de try/catch
- Não marcar componentes com "use client" desnecessariamente

### Data Fetching

- Server Components: buscar dados diretamente (async/await)
- Client Components: usar Server Actions para mutations
- Route Handlers GET são cached por padrão (cuidado!)
- Usar `revalidatePath()` ou `revalidateTag()` para invalidar cache

### Performance

- Turbopack é o bundler padrão (mais rápido)
- Minimizar "use client" para reduzir bundle JS
- Usar `loading.tsx` para streaming/Suspense
- Considerar Partial Prerendering (PPR) para páginas híbridas

## Design System

Consultar `docs/ESTRATEGIA-UI.md` para:

- Paleta de cores (dark theme com accent verde #61be99)
- Tipografia (Space Grotesk para títulos, Inter para corpo)
- Espaçamentos e breakpoints
- Componentes (botões, cards, formulários)
- Animações

## Landing Page Sections

Consultar `docs/PLANO-ESTRATEGICO.md` para conteúdo detalhado:

1. Hero - Headline + CTA
2. Problema - Dores do cliente
3. Diferencial - Next.js vs WordPress
4. Serviços - 10 cards
5. Processo - 4 steps
6. Por que nós - Diferenciais
7. Social Proof - Depoimentos/Stats
8. CTA + Formulário
9. Footer

## Development Workflow

### 1. Analysis

- Consultar docs/PLANO-ESTRATEGICO.md para requisitos de conteúdo
- Consultar docs/ESTRATEGIA-UI.md para design system
- Verificar componentes existentes antes de criar novos
- Verificar estrutura de mensagens i18n

### 2. Planning

- Usar TodoWrite para tarefas complexas
- Quebrar UI em componentes pequenos (atomic design)
- Planejar mobile-first
- Considerar os 4 idiomas

### 3. Validation

- Validar abordagem com usuário antes de mudanças significativas
- Discutir decisões de arquitetura
- Confirmar breaking changes

### 4. Implementation

- Trabalhar um componente por vez
- Marcar tarefas como completas no TodoWrite
- Manter componentes pequenos e focados
- Seguir padrões existentes no código

### 5. Simplicity

- Componentes simples e pequenos
- Evitar abstrações prematuras
- Mudanças com impacto mínimo
- Hierarquia de componentes rasa
- **Simplicidade acima de tudo**

### 6. Review

- Verificar TypeScript sem erros
- Rodar `pnpm lint` antes de commitar
- Testar responsividade (mobile, tablet, desktop)
- Verificar traduções nos 4 idiomas

## IMPORTANT - Regras Críticas

- **YOU MUST** usar pnpm (nunca npm/yarn)
- **YOU MUST** manter traduções em todos os 4 idiomas
- **YOU MUST** seguir o design system
- **YOU MUST** criar componentes em `src/components/`
- **NEVER** adicionar preços no site
- **NEVER** usar ESLint ou Prettier

## Agentes Obrigatórios

### @smart-search - Buscas Web
**SEMPRE usar o agente `smart-search` para buscas na web.**

Invocar com Task tool (subagent_type: "smart-search") quando:
- Pesquisar documentação, tutoriais, exemplos
- Buscar inspiração de design ou UI
- Verificar informações técnicas atualizadas
- Extrair conteúdo de URLs
- Qualquer busca na internet

O agente gerencia automaticamente as quotas:
- Brave: 2.000/mês
- Tavily: 1.000/mês
- Firecrawl: 500/mês

### @translator - Traduções i18n
**SEMPRE usar o agente `translator` para traduções.**

Invocar com Task tool (subagent_type: "translator") quando:
- Adicionar novos textos ao site
- Criar novas chaves de tradução
- Atualizar textos existentes
- Criar novo módulo de tradução

O agente garante:
- Tradução para os 4 idiomas (FR, EN, PT, ES)
- Mesma estrutura JSON em todos os arquivos
- Tom adequado para agência web
- Atualização do index.ts quando necessário

### Context7 - Documentação de Libs
**Usar Context7 ANTES de buscar na web** para documentação de:
- Next.js, React, TypeScript
- Tailwind CSS, Framer Motion
- next-intl, outras libs do projeto

Context7 não consome quota de busca e tem docs atualizadas.

## Documentation

- `docs/PLANO-ESTRATEGICO.md` - Conteúdo e estratégia por seção
- `docs/ESTRATEGIA-UI.md` - Design system completo
