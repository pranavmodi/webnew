# Possible Minds - Design Principles

## Brand Identity

A dark, premium aesthetic with **matrix green** (#0ea472 / #00ff41) as the primary accent—evoking AI intelligence, precision, and forward-thinking technology.

---

## Core Principles

### 1. Dark, High-Contrast Foundation

- **Base background**: `#000000` (pure black)
- **Base foreground**: `#fafafa` (near white)
- **Muted text**: `#a3a3a3` (gray for secondary content)

The black foundation keeps the page premium, professional, and readable while creating visual hierarchy through contrast alone.

### 2. Matrix Green as Primary Brand Energy

- **Primary color**: `#0ea472` (main brand green)
- **Accent/glow**: `#00ff41` (electric matrix green for highlights)
- **Gradient banners**: Green → emerald → teal creates a "tech-forward" AI feel without overpowering content

The green signals intelligence, growth, and cutting-edge technology—distinct from the blue/purple saturated in enterprise SaaS.

### 3. Single, Consistent Type System

- **Font family**: Manrope (or Inter as fallback)
- **Weight range**: 200–800
- **Headings**: Large but not ultra-bold (500-600 weight)
- **Body copy**: Light/regular (300-400 weight) for a sleek, modern tone

Typography should feel precise and technical without being cold.

### 4. Structured, Spacious Layout

- **Max widths**: 1080–1440px content containers
- **Vertical rhythm**: Generous spacing (py-12/16/20 scale)
- **Grid system**: Frequent 2-column layouts to balance narrative with proof
- **White space**: Intentional breathing room reinforces premium positioning

### 5. Soft, Rounded Components

- **Border radius**: 10px+ on buttons, cards, and containers
- **Effect**: Friendly, approachable edges within a serious enterprise palette
- **Consistency**: Same radius values across all interactive elements

### 6. Proof-Driven Storytelling

Content hierarchy emphasizes credibility:

```
Hero → Outcomes → Security → Social Proof
```

- Case studies and metrics front and center
- Trust badges (SOC2, HIPAA, ISO) prominently displayed
- Client logos as validation
- Testimonials with real names and titles

### 7. Subtle Motion for Polish

- **Entrance animations**: Fade-in-up on scroll
- **Staggered reveals**: Sequential element appearance
- **Restraint**: Motion adds momentum without distraction
- **Duration**: 200-400ms transitions, ease-out timing

### 8. Muted UI Chrome

- **Navigation**: Translucent black backgrounds on hover
- **Shadows**: Soft, diffused (no harsh drop shadows)
- **Borders**: 1px with low-opacity grays
- **Approach**: Restraint over flashy effects

### 9. Imagery as Texture, Not Clutter

- **Card images**: Contained, rounded, consistent sizing
- **Icons**: Simple, monoline style
- **Illustrations**: Abstract, geometric—support structure rather than steal focus
- **Purpose**: Visual rhythm, not decoration

---

## Design Tokens

### Colors

```css
:root {
  /* Base */
  --color-background: #000000;
  --color-foreground: #fafafa;

  /* Primary - Matrix Green */
  --color-primary: #0ea472;
  --color-primary-light: #10b981;
  --color-primary-glow: #00ff41;
  --color-primary-dark: #047857;

  /* Muted */
  --color-muted: #171717;
  --color-muted-foreground: #a3a3a3;

  /* Borders */
  --color-border: #262626;
  --color-border-hover: #404040;

  /* Accent */
  --color-accent: #0ea472;
  --color-accent-foreground: #fafafa;

  /* Semantic */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

### Typography

```css
:root {
  --font-family: 'Manrope', 'Inter', system-ui, sans-serif;

  /* Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */

  /* Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Spacing

```css
:root {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 20px rgba(14, 164, 114, 0.3);
}
```

---

## Component Rules

### Buttons

```css
.button-primary {
  background: var(--color-primary);
  color: var(--color-foreground);
  border-radius: var(--radius-md);
  padding: var(--spacing-3) var(--spacing-6);
  font-weight: var(--font-weight-medium);
  transition: all 200ms ease-out;
}

.button-primary:hover {
  background: var(--color-primary-light);
  box-shadow: var(--shadow-glow);
}

.button-secondary {
  background: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.button-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

### Cards

```css
.card {
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
}

.card:hover {
  border-color: var(--color-border-hover);
}
```

### Navigation

```css
.nav-link {
  color: var(--color-muted-foreground);
  transition: color 200ms ease-out;
}

.nav-link:hover {
  color: var(--color-foreground);
}

.nav-link.active {
  color: var(--color-primary);
}
```

---

## Animation Guidelines

### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 400ms ease-out forwards;
}
```

### Stagger Children

Apply incrementing delays to sequential elements:
- First element: 0ms
- Second element: 100ms
- Third element: 200ms
- etc.

### Glow Pulse (for CTAs)

```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(14, 164, 114, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(14, 164, 114, 0.5);
  }
}
```

---

## Do's and Don'ts

### Do

- Use matrix green sparingly for maximum impact
- Maintain generous whitespace
- Keep interactions subtle and fast
- Lead with credibility (metrics, logos, certifications)
- Use consistent border radius across all components

### Don't

- Overuse the glow effect
- Add motion that delays user tasks
- Use multiple accent colors
- Clutter layouts with unnecessary imagery
- Mix rounded and sharp corners

---

## Reference Palette

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Background |
| White | `#fafafa` | Primary text |
| Gray 400 | `#a3a3a3` | Secondary text |
| Gray 800 | `#262626` | Borders |
| Gray 900 | `#171717` | Card backgrounds |
| Matrix Green | `#0ea472` | Primary accent |
| Matrix Glow | `#00ff41` | Highlights, hover states |
| Emerald | `#10b981` | Success, secondary green |

---

*Design system for Possible Minds — AI agents for healthcare and legal.*
