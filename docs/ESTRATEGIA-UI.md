# Estratégia de UI - Design System

**Referência:** https://uiacademy.com.br/
**Estilo:** Dark Mode, Moderno, Premium

---

# ANÁLISE DA REFERÊNCIA

## Características Principais
- Design dark com alto contraste
- Tipografia bold e impactante
- Espaçamentos generosos (breathing room)
- Cards com bordas sutis
- Animações suaves no scroll e hover
- Layout limpo e organizado

---

# 1. PALETA DE CORES

## Cores Principais

```css
:root {
  /* Backgrounds */
  --bg-primary: #06080a;      /* Fundo principal - quase preto */
  --bg-secondary: #0e1114;    /* Fundo cards/seções alternadas */
  --bg-tertiary: #1f2630;     /* Fundo hover/elementos */
  --bg-light: #ffffff;        /* Seções claras (se houver) */
  --bg-light-alt: #f0f4f5;    /* Cards em fundo claro */

  /* Texto */
  --text-primary: #ffffff;    /* Texto principal */
  --text-secondary: #ced4d7;  /* Texto secundário/descrições */
  --text-muted: #9aa0ac;      /* Texto menos importante */
  --text-dark: #06080a;       /* Texto em fundo claro */

  /* Acento */
  --accent: #61be99;          /* Verde - CTAs, destaques */
  --accent-hover: #4fa882;    /* Verde hover (10% mais escuro) */

  /* Bordas */
  --border-light: #ced4d7;    /* Bordas em fundo escuro */
  --border-dark: #3a3e46;     /* Bordas sutis */

  /* Estados */
  --success: #61be99;
  --error: #e74c3c;
  --warning: #f39c12;
}
```

## Aplicação das Cores

| Elemento | Cor | Token |
|----------|-----|-------|
| Body background | #06080a | --bg-primary |
| Cards escuros | #0e1114 | --bg-secondary |
| Texto títulos | #ffffff | --text-primary |
| Texto descrição | #ced4d7 | --text-secondary |
| Botão primário | #61be99 | --accent |
| Bordas cards | #ced4d7 | --border-light |
| Bordas botões | #3a3e46 | --border-dark |

---

# 2. TIPOGRAFIA

## Fontes

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

## Escala Tipográfica

### Desktop

| Elemento | Tamanho | Peso | Line-Height | Fonte |
|----------|---------|------|-------------|-------|
| H1 (Hero) | 56px | 600 | 1.1 | Space Grotesk |
| H2 (Seção) | 48px | 600 | 1.15 | Space Grotesk |
| H3 (Card título) | 32px | 500 | 1.2 | Space Grotesk |
| H4 (Subtítulo) | 24px | 500 | 1.25 | Space Grotesk |
| Body Large | 20px | 400 | 1.5 | Inter |
| Body | 16px | 400 | 1.6 | Inter |
| Body Small | 14px | 400 | 1.5 | Inter |
| Caption | 12px | 500 | 1.4 | Inter |
| Button | 16px | 500 | 1 | Inter |

### Mobile

| Elemento | Tamanho | Peso | Line-Height |
|----------|---------|------|-------------|
| H1 (Hero) | 36px | 600 | 1.15 |
| H2 (Seção) | 28px | 600 | 1.2 |
| H3 (Card título) | 22px | 500 | 1.25 |
| H4 (Subtítulo) | 18px | 500 | 1.3 |
| Body Large | 18px | 400 | 1.5 |
| Body | 16px | 400 | 1.6 |
| Body Small | 14px | 400 | 1.5 |

## Configuração CSS

```css
h1 {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

p {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

@media (max-width: 768px) {
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }
}
```

---

# 3. ESPAÇAMENTOS

## Escala de Spacing

```css
:root {
  /* Escala base: 4px */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-50: 200px;
}
```

## Aplicação

| Contexto | Valor Desktop | Valor Mobile |
|----------|---------------|--------------|
| Padding seção (vertical) | 120-150px | 64-80px |
| Padding seção (horizontal) | 112px | 24px |
| Gap entre seções | 0 (seamless) | 0 |
| Gap cards grid | 32px | 16px |
| Padding interno card | 40px | 24px |
| Gap elementos card | 24px | 16px |
| Gap texto (título-descrição) | 16px | 12px |
| Max-width container | 1216px | 100% |

## Seções - Estrutura

```css
.section {
  padding: 150px 112px;
  max-width: 1440px;
  margin: 0 auto;
}

.section__container {
  max-width: 1216px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section {
    padding: 64px 24px;
  }
}
```

---

# 4. COMPONENTES

## 4.1 Botões

### Botão Primário (CTA)

```css
.btn-primary {
  background: var(--accent);
  color: var(--bg-primary);
  padding: 12px 24px;
  border-radius: 100px;  /* Pill shape */
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}
```

| Estado | Background | Transform |
|--------|------------|-----------|
| Normal | #61be99 | none |
| Hover | #4fa882 | translateY(-2px) |
| Active | #3d9470 | translateY(0) |

### Botão Secundário (Outline)

```css
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid var(--border-dark);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
}
```

### Tamanhos

| Tamanho | Padding | Font-size | Border-radius |
|---------|---------|-----------|---------------|
| Small | 8px 16px | 14px | 20px |
| Medium | 12px 24px | 16px | 24px |
| Large | 16px 32px | 18px | 28px |

---

## 4.2 Cards

### Card Padrão

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .card {
    padding: 24px;
    gap: 16px;
  }
}
```

### Card de Serviço

```css
.service-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-dark);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}

.service-card__icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  color: var(--accent);
}

.service-card__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.service-card__description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}
```

### Especificações Cards

| Propriedade | Valor |
|-------------|-------|
| Border-radius | 16px |
| Border | 1px solid |
| Padding desktop | 40px |
| Padding mobile | 24px |
| Gap interno | 24px |
| Hover transform | translateY(-4px) |

---

## 4.3 Header/Navegação

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(6, 8, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.header__container {
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  height: 32px;
}

.header__nav {
  display: flex;
  gap: 32px;
}

.header__link {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.header__link:hover {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .header {
    padding: 0 24px;
    height: 64px;
  }

  .header__nav {
    display: none; /* Menu hamburguer */
  }
}
```

---

## 4.4 Botão Flutuante WhatsApp

```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  z-index: 99;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
}

.whatsapp-float svg {
  width: 28px;
  height: 28px;
  color: white;
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
  }

  .whatsapp-float svg {
    width: 24px;
    height: 24px;
  }
}
```

---

## 4.5 Formulário

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 480px;
}

.form__input {
  background: var(--bg-secondary);
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 16px;
  color: var(--text-primary);
  transition: border-color 0.2s ease;
}

.form__input:focus {
  outline: none;
  border-color: var(--accent);
}

.form__input::placeholder {
  color: var(--text-muted);
}

.form__textarea {
  min-height: 120px;
  resize: vertical;
}

.form__submit {
  margin-top: 8px;
}
```

---

# 5. ANIMAÇÕES

## Transições Padrão

```css
:root {
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
  --transition-slower: 0.5s ease;
}
```

## Hover States

```css
/* Botões */
.btn {
  transition: all var(--transition-normal);
}

.btn:hover {
  transform: translateY(-2px);
}

/* Cards */
.card {
  transition: all var(--transition-slow);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

/* Links */
.link {
  transition: color var(--transition-fast);
}
```

## Scroll Animations (Framer Motion)

```javascript
// Fade up ao entrar na viewport
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale on hover
const scaleVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};
```

## Animações Sugeridas por Seção

| Seção | Animação | Trigger |
|-------|----------|---------|
| Hero | Fade in + slide up | Page load |
| Hero badge | Pulse sutil | Loop |
| Cards serviços | Fade up staggered | Scroll into view |
| Comparativo | Slide from sides | Scroll into view |
| Timeline/Processo | Sequential reveal | Scroll into view |
| Formulário | Fade in | Scroll into view |
| WhatsApp button | Bounce sutil | Loop (a cada 5s) |

---

# 6. LAYOUT / GRID

## Container Principal

```css
.container {
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0;
  }
}
```

## Grid de Cards

```css
.grid {
  display: grid;
  gap: 32px;
}

/* 2 colunas */
.grid--2 {
  grid-template-columns: repeat(2, 1fr);
}

/* 3 colunas */
.grid--3 {
  grid-template-columns: repeat(3, 1fr);
}

/* 4 colunas - serviços */
.grid--4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Responsivo */
@media (max-width: 1024px) {
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid--4,
  .grid--3,
  .grid--2 {
    grid-template-columns: 1fr;
  }

  .grid {
    gap: 16px;
  }
}
```

## Layout Serviços (10 cards)

```
Desktop (1200px+):
┌─────┬─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │  5  │
├─────┼─────┼─────┼─────┼─────┤
│  6  │  7  │  8  │  9  │ 10  │
└─────┴─────┴─────┴─────┴─────┘

Tablet (768px - 1199px):
┌─────┬─────┐
│  1  │  2  │
├─────┼─────┤
│  3  │  4  │
├─────┼─────┤
│ ... │ ... │
└─────┴─────┘

Mobile (< 768px):
┌─────────┐
│    1    │
├─────────┤
│    2    │
├─────────┤
│   ...   │
└─────────┘
```

---

# 7. BREAKPOINTS

```css
:root {
  --breakpoint-sm: 640px;   /* Mobile large */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Tablet large / Desktop small */
  --breakpoint-xl: 1280px;  /* Desktop */
  --breakpoint-2xl: 1440px; /* Desktop large */
}
```

## Media Queries

```css
/* Mobile first approach */

/* Small devices (phones, 640px+) */
@media (min-width: 640px) { }

/* Medium devices (tablets, 768px+) */
@media (min-width: 768px) { }

/* Large devices (desktops, 1024px+) */
@media (min-width: 1024px) { }

/* Extra large devices (large desktops, 1280px+) */
@media (min-width: 1280px) { }

/* 2XL devices (1440px+) */
@media (min-width: 1440px) { }
```

---

# 8. ÍCONES

## Estilo
- Ícones line/outline (não filled)
- Stroke width: 1.5px - 2px
- Cor padrão: var(--accent) ou var(--text-secondary)
- Tamanho nos cards: 48px
- Tamanho em botões: 20px

## Biblioteca Sugerida
- **Lucide Icons** (open source, consistente)
- Ou **Phosphor Icons**

## Ícones por Serviço

| Serviço | Ícone Sugerido |
|---------|----------------|
| Landing Pages | Layout / Target |
| Sites Institucionais | Building2 / Globe |
| E-commerce | ShoppingCart / Store |
| Chatbot | Bot / MessageSquare |
| Agendamento | Calendar / CalendarCheck |
| WhatsApp | MessageCircle / Phone |
| Email Marketing | Mail / Send |
| CRM | Users / UserCheck |
| Orçamentos | FileText / Calculator |
| Automação | Cog / Workflow / Zap |

---

# 9. IMAGENS E ASSETS

## Estilo Visual
- Ilustrações minimalistas ou 3D sutis
- Mockups de dispositivos (opcional)
- Gradientes sutis como decoração
- Formas geométricas abstratas

## Decorações

```css
/* Glow effect atrás de elementos */
.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(97, 190, 153, 0.15) 0%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: -1;
}

/* Grid pattern sutil */
.grid-pattern {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

# 10. SOMBRAS

## Escala de Sombras (Dark Mode)

```css
:root {
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);

  /* Glow para accent */
  --shadow-accent: 0 4px 20px rgba(97, 190, 153, 0.3);
}
```

**Nota:** No design dark, sombras são menos visíveis. Preferir bordas e diferenças de background.

---

# 11. Z-INDEX

```css
:root {
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-header: 40;
  --z-modal-backdrop: 50;
  --z-modal: 60;
  --z-popover: 70;
  --z-tooltip: 80;
  --z-toast: 90;
  --z-whatsapp: 95;
  --z-max: 100;
}
```

---

# RESUMO - TOKENS PRINCIPAIS

```css
:root {
  /* Cores */
  --bg-primary: #06080a;
  --bg-secondary: #0e1114;
  --accent: #61be99;
  --text-primary: #ffffff;
  --text-secondary: #ced4d7;
  --border-light: #ced4d7;
  --border-dark: #3a3e46;

  /* Tipografia */
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Espaçamentos */
  --section-padding-y: 150px;
  --section-padding-x: 112px;
  --container-max: 1216px;
  --card-padding: 40px;
  --card-radius: 16px;
  --btn-radius: 100px;

  /* Animações */
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```
