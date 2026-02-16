# Schmid Busreisen Brand Color Palette

**Extracted:** 2026-02-16
**Sources:** 3 production websites analyzed with Playwright MCP

## 🎨 Core Brand Colors

### Primary Brand Red (Burgundy)
The signature Schmid red is the strongest brand identifier across all websites.

| Color | Hex | Usage | Sites |
|-------|-----|-------|-------|
| **Primary Burgundy** | `#ac031c` | Main brand color (referenced in docs) | All |
| **Dark Burgundy** | `#ad1730` | Links, navigation, CTAs | schmid-nauders.com |
| **Bright Burgundy** | `#b51621` | Links, text highlights | bikeshuttle-schmid.at |
| **Light Burgundy** | `#c5271a` | Text accents | schmid-nauders.com |

**Recommendation:** Use `#ac031c` as the primary brand color with `#ad1730` for interactive elements.

---

## 🖤 Dark Neutrals

### Dark Gray/Charcoal
Used for body text, footers, and dark backgrounds.

| Color | Hex | Usage | Sites |
|-------|-----|-------|-------|
| **Primary Dark** | `#22272a` | Footer, dark text | schmid-nauders.com |
| **Near Black** | `#1b1c1b` | Body backgrounds | bikeshuttle-schmid.at |
| **Charcoal** | `#282828` | Text, links | e5-fernwanderweg |
| **Dark Gray** | `#2b2b2b` | Backgrounds | schmid-nauders.com |

**Recommendation:** Use `#22272a` for primary dark text and footer backgrounds.

---

## 🤍 Light Neutrals

### Light Gray/Off-White
Clean backgrounds and button styles.

| Color | Hex | Usage | Sites |
|-------|-----|-------|-------|
| **Light Mint** | `#f2f8f7` | Page backgrounds | schmid-nauders.com |
| **Light Gray** | `#d9d9d7` | Button backgrounds | schmid-nauders.com |
| **Off-White** | `#eeedeb` | Section backgrounds | schmid-nauders.com |
| **Warm Gray** | `#d4d3cc` | Subtle backgrounds | schmid-nauders.com |
| **Pale Gray** | `#eaeae9` | Backgrounds | bikeshuttle-schmid.at |
| **Bright White** | `#f6f6f6` | Clean sections | e5-fernwanderweg |

**Recommendation:** Use `#f2f8f7` for main backgrounds, `#d9d9d7` for buttons.

---

## 🎨 Accent Colors

### Site-Specific Accents
Colors used for specific site identities.

| Color | Hex | Usage | Site |
|-------|-----|-------|------|
| **Olive** | `#948b6b` | Footer background | e5-fernwanderweg |
| **Dark Olive** | `#474335` | Backgrounds | e5-fernwanderweg |
| **Blue** | `#147fa9` | Accents | e5-fernwanderweg |
| **Pink** | `#da8b90` | Light accents | bikeshuttle-schmid.at |

---

## 🎯 Recommended Core Palette

For the new Schmid design system, use these colors as the foundation:

```css
:root {
  /* Primary Brand */
  --color-primary: #ac031c;           /* Main burgundy */
  --color-primary-dark: #ad1730;      /* Hover states */
  --color-primary-light: #c5271a;     /* Light accents */

  /* Dark Neutrals */
  --color-dark: #22272a;              /* Text, footer */
  --color-gray-dark: #666666;         /* Secondary text */
  --color-gray: #808080;              /* Muted text */

  /* Light Neutrals */
  --color-background: #f2f8f7;        /* Page background */
  --color-surface: #ffffff;           /* Cards, sections */
  --color-border: #d9d9d7;            /* Borders, dividers */

  /* Interactive */
  --color-button-bg: #d9d9d7;         /* Button background */
  --color-button-text: #22272a;       /* Button text */
  --color-link: #ad1730;              /* Links */
}
```

---

## 📸 Screenshots

Visual reference for each site:

- **schmid-nauders.com**: `schmid-nauders-homepage.png`
- **bikeshuttle-schmid.at**: `bikeshuttle-schmid-homepage.png`
- **e5-fernwanderweg-oberstdorf-meran.com**: `e5-fernwanderweg-homepage.png`

---

## 🔍 Analysis Notes

### Consistency
- **Strong brand red** (#ac031c family) is used consistently as the primary brand color
- **Dark grays** provide professional, readable text
- **Light backgrounds** create clean, spacious layouts

### Variations
- E5 site uses olive/earth tones (unique identity for hiking)
- Bikeshuttle uses pink accent (softer, bike-friendly vibe)
- Main site is the most classic (burgundy + gray + white)

### Recommendations
1. Keep `#ac031c` as the primary brand color (strongest identifier)
2. Use `#22272a` for all dark text (consistency)
3. Use `#f2f8f7` as the default page background (subtle warmth)
4. Reserve olive/blue/pink accents for sub-brand differentiation
5. Maintain high contrast between burgundy and backgrounds for accessibility
