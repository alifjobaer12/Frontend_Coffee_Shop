# Design System Inspired by The Coffee Cup

## 1. Visual Theme & Atmosphere

The Coffee Cup design system embodies warmth, craftsmanship, and artisanal quality through a sophisticated palette of rich browns, warm taupes, and cream neutrals. The aesthetic celebrates the sensory experience of coffee culture—grounded, inviting, and timeless. The design prioritizes elegant simplicity with generous whitespace, allowing premium imagery and typography to breathe. Subtle shadows and rounded corners create a welcoming, approachable feel while maintaining premium positioning. The overall mood is aspirational yet accessible, evoking specialty coffee shops and the artistry of the brewing process.

**Key Characteristics**

- Warm, earthy color palette dominated by chocolate browns and warm neutrals
- Generous whitespace and breathing room throughout
- Elegant, readable typography with clear hierarchy
- Soft shadows for depth without heaviness
- Rounded corners on interactive and container elements
- Premium yet approachable visual language
- Strong emphasis on imagery and storytelling
- High contrast for legibility and accessibility

## 2. Color Palette & Roles

### Primary

- **Primary Brown** (`#6B3E26`): Primary color for navigation, headings, links, and core interactive elements. Dominant brand color representing coffee richness and warmth.
- **Deep Brown** (`#432010`): Darker variant for high-contrast headings and emphasis when stronger visual weight is needed.
- **Darkest Brown** (`#2B1208`): Extreme contrast element for critical text or secondary emphasis.

### Accent Colors

- **Warm Tan** (`#C89B6D`): Secondary accent for highlights, interactive states, and supporting text. Creates visual interest without competing with primary.
- **Light Cream** (`#E2C8AE`): Tertiary accent for subtle backgrounds, text accents, and secondary UI elements.
- **Golden Tan** (`#C4A574`): Mid-tone accent for service highlights and decorative elements.
- **Burnt Orange** (`#DB832A`): Energetic accent for call-to-action highlights and special promotions.
- **Muted Brown** (`#8B6A47`): Neutral-brown for secondary components and muted interactive states.

### Interactive

- **Primary Button Color** (`#6B3E26`): Default state for primary action buttons and navigation links.
- **Button Hover** (`#432010`): Darker brown for button hover and active states.
- **Link Color** (`#C89B6D`): Links and secondary navigation in warm tan for distinction.
- **Link Hover** (`#6B3E26`): Links shift to primary brown on interaction.

### Neutral Scale

- **Black** (`#000000`): Primary text, strong contrast, and critical content.
- **Charcoal** (`#2B2B2B`): Secondary text and subtle hierarchy variation.
- **Off-White Background** (`#F5F2EF`): Page backgrounds and light surfaces for warmth without pure white harshness.
- **Pure White** (`#FFFFFF`): Card backgrounds, containers, and contrast elements.

### Surface & Borders

- **Card Background** (`#FFFFFF`): Primary surface for cards and contained content.
- **Page Background** (`#F5F2EF`): Warm neutral page backdrop creating cohesive warmth.
- **Border Color** (`#6B3E26`): Subtle borders maintaining brand consistency.

## 3. Typography Rules

### Font Family

**Primary:** `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Secondary:** System fonts with fallback to `ui-sans-serif`

Clean, modern sans-serif stack ensuring consistency across all platforms and devices.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | ui-sans-serif | 56px | 700 | 64px | -0.02em | Hero headlines and page titles |
| Heading / H2 | ui-sans-serif | 40px | 600 | 48px | -0.01em | Section headings and major subsections |
| Heading / H3 | ui-sans-serif | 24px | 600 | 32px | 0em | Component headings and card titles |
| Subheading / H4 | ui-sans-serif | 20px | 600 | 28px | 0em | Minor headings and emphasis |
| Body Large | ui-sans-serif | 18px | 400 | 28px | 0em | Primary body text and descriptions |
| Body Regular | ui-sans-serif | 16px | 400 | 24px | 0em | Navigation, buttons, and standard text |
| Body Small | ui-sans-serif | 14px | 400 | 20px | 0em | Captions, labels, and list items |
| Label / Button | ui-sans-serif | 16px | 500 | 24px | 0.02em | Button text and form labels |
| Caption | ui-sans-serif | 12px | 400 | 18px | 0em | Footer text, timestamps, and metadata |

### Principles

- **Clear Hierarchy:** Consistent size and weight progression creates intuitive scanning and information prioritization
- **Generous Line Height:** Line heights exceed 1.4x for optimal readability and breathing room
- **Warmth Through Scale:** Larger display text dominates hero sections while smaller text maintains premium detail
- **Accessibility First:** Minimum 16px body text on all devices; high contrast between text and background
- **Brand Voice:** Medium weights (500–600) convey confidence without aggression; regular weights maintain approachability
- **System Alignment:** Typography scales proportionally across responsive breakpoints while maintaining legibility

## 4. Component Stylings

### Buttons

#### Primary Button
```
background-color: #6B3E26
color: #FFFFFF
font-size: 16px
font-weight: 500
font-family: ui-sans-serif
padding: 12px 40px
border-radius: 40px
border: 0px solid #6B3E26
box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 40px 0px
height: auto
line-height: 24px
cursor: pointer

Hover:
background-color: #432010
color: #FFFFFF
box-shadow: rgba(0, 0, 0, 0.6) 0px 20px 50px 0px

Active:
background-color: #2B1208
```

#### Secondary Button
```
background-color: #FFFFFF
color: #6B3E26
font-size: 16px
font-weight: 500
font-family: ui-sans-serif
padding: 12px 40px
border-radius: 40px
border: 2px solid #6B3E26
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px
height: auto
line-height: 24px
cursor: pointer

Hover:
background-color: #F5F2EF
color: #432010
border-color: #432010

Active:
background-color: #E2C8AE
```

#### Ghost Button
```
background-color: transparent
color: #6B3E26
font-size: 16px
font-weight: 500
font-family: ui-sans-serif
padding: 12px 24px
border-radius: 0px
border: 0px solid transparent
box-shadow: none
height: auto
line-height: 24px
text-decoration: underline
cursor: pointer

Hover:
color: #C89B6D
text-decoration: underline

Active:
color: #432010
```

#### Icon Button
```
background-color: transparent
color: #6B3E26
font-size: 16px
font-weight: 400
font-family: ui-sans-serif
padding: 8px 8px
border-radius: 8px
border: 0px solid transparent
box-shadow: none
width: 40px
height: 40px
cursor: pointer

Hover:
background-color: #F5F2EF
color: #432010

Active:
background-color: #E2C8AE
```

### Cards & Containers

#### Service Card
```
background-color: #FFFFFF
color: #000000
padding: 48px 40px 40px 40px
border-radius: 12px
border: 0px solid transparent
box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 40px 0px
text-align: center

Inner Icon Container:
background-color: #E2C8AE
width: 80px
height: 80px
border-radius: 50%
display: flex
align-items: center
justify-content: center
margin: 0 auto 24px auto

Hover:
transform: translateY(-8px)
box-shadow: rgba(0, 0, 0, 0.6) 0px 25px 50px 0px
```

#### Hero Container
```
background-color: #F5F2EF
color: #6B3E26
padding: 80px 60px
display: flex
align-items: center
justify-content: space-between
gap: 60px
min-height: 600px
```

#### Content Card
```
background-color: #FFFFFF
padding: 32px 40px
border-radius: 12px
border: 0px solid transparent
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px
```

### Inputs & Forms

#### Text Input
```
background-color: #FFFFFF
color: #000000
font-size: 16px
font-weight: 400
font-family: ui-sans-serif
padding: 12px 16px
border-radius: 8px
border: 2px solid #C89B6D
box-shadow: none
line-height: 24px
height: 48px

Focus:
border-color: #6B3E26
box-shadow: 0 0 0 3px rgba(107, 62, 38, 0.1)

Hover:
border-color: #8B6A47
```

#### Form Label
```
color: #6B3E26
font-size: 14px
font-weight: 600
font-family: ui-sans-serif
line-height: 20px
margin-bottom: 8px
display: block
```

#### Placeholder Text
```
color: #C89B6D
font-size: 16px
font-weight: 400
font-family: ui-sans-serif
opacity: 0.7
```

### Navigation

#### Navigation Bar
```
background-color: rgba(255, 255, 255, 0.95)
color: #6B3E26
padding: 12px 40px
border-radius: 0px
border: 0px solid transparent
box-shadow: none
height: auto
line-height: 24px
display: flex
align-items: center
justify-content: space-between
gap: 40px
backdrop-filter: blur(10px)
```

#### Navigation Link
```
color: #6B3E26
font-size: 16px
font-weight: 400
font-family: ui-sans-serif
padding: 8px 12px
border-radius: 0px
border: 0px solid transparent
box-shadow: none
height: auto
line-height: 24px
cursor: pointer
text-decoration: none

Hover:
color: #C89B6D
border-bottom: 2px solid #C89B6D

Active:
color: #432010
border-bottom: 2px solid #432010
```

#### Logo / Brand
```
color: #6B3E26
font-size: 18px
font-weight: 600
font-family: ui-sans-serif
line-height: 28px
display: flex
align-items: center
gap: 8px
```

### Badges

#### Primary Badge
```
background-color: #E2C8AE
color: #432010
font-size: 12px
font-weight: 600
font-family: ui-sans-serif
padding: 6px 12px
border-radius: 40px
border: 0px solid transparent
box-shadow: none
line-height: 18px
display: inline-block
```

#### Secondary Badge
```
background-color: #F5F2EF
color: #6B3E26
font-size: 12px
font-weight: 600
font-family: ui-sans-serif
padding: 6px 12px
border-radius: 40px
border: 1px solid #C89B6D
box-shadow: none
line-height: 18px
display: inline-block
```

## 5. Layout Principles

### Spacing System

**Base Unit:** 4px

**Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px, 48px, 56px, 60px, 80px

**Usage Context:**

- **Micro (4px–8px):** Icon spacing, tight component gaps, internal button padding
- **Small (12px–16px):** Form input padding, card internal spacing, list item gaps
- **Medium (20px–32px):** Section padding, container margins, between-component spacing
- **Large (40px–60px):** Major section padding, hero containers, full-width spacing
- **Extra Large (80px+):** Section separators, page-level padding on desktop

### Grid & Container

**Max Width:** 1440px for desktop layouts

**Column Strategy:** 12-column grid on desktop, 6-column on tablet, 4-column on mobile

**Container Padding:**
- Desktop: 60px–80px horizontal padding
- Tablet: 40px horizontal padding
- Mobile: 20px horizontal padding

**Section Pattern:** Hero sections span full viewport width with centered content; feature sections use max-width containers centered on page

### Whitespace Philosophy

The design system prioritizes generous whitespace as a design element—not mere empty space but intentional breathing room that creates visual hierarchy and reduces cognitive load. Content sections are separated by 60px–80px vertical spacing on desktop, creating clear visual breaks. Within cards and containers, 32px–48px padding creates comfortable internal whitespace. Links and interactive elements maintain minimum 8px spacing around them to prevent accidental misclicks. The off-white background (`#F5F2EF`) adds warmth without harsh contrast, allowing whitespace to feel inviting rather than stark.

### Border Radius Scale

- **0px:** Navigation bars, hero sections, full-width elements
- **8px:** Form inputs, smaller containers, subtle rounding
- **12px:** Cards, service containers, primary content areas
- **40px:** Buttons, badges, pill-shaped elements requiring strong rounding
- **50%:** Icon containers, circular avatars, perfectly round elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | No shadow | Flat backgrounds, inactive states, text elements |
| Elevation 1 (sm) | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Subtle lifted cards, light interactive feedback |
| Elevation 2 (md) | `rgba(0, 0, 0, 0.5) 0px 15px 40px 0px` | Primary cards, service containers, modals |
| Elevation 3 (lg) | `rgba(0, 0, 0, 0.6) 0px 25px 50px 0px` | Button hover states, expanded modals, overlays |

**Shadow Philosophy:**

Shadows are used sparingly and purposefully to create depth without visual heaviness. The primary shadow (`0px 15px 40px`) has sufficient blur and vertical offset to appear floating and premium. Shadows are slightly darkened (`rgba(0, 0, 0, 0.5)`) to maintain sophistication while remaining approachable. Elements in elevated states (hover, focus) use slightly stronger shadows to indicate interactivity. Pure black (`#000000`) is avoided in shadows; instead, semi-transparent black creates natural, realistic depth that complements the warm color palette.

## 7. Do's and Don'ts

### Do

- Use **Primary Brown** (`#6B3E26`) as the dominant color for all primary interactive elements and brand identity
- Maintain minimum 16px font size for body text on all devices
- Include 40px+ padding in card containers to create premium, breathing feel
- Use **Warm Tan** (`#C89B6D`) for secondary actions and supporting text to create visual hierarchy
- Implement generous vertical spacing (60px–80px) between major sections for clear visual breaks
- Apply rounded corners (40px) to all buttons and primary CTAs for approachable, modern feel
- Use subtle shadows (`0px 15px 40px rgba(0, 0, 0, 0.5)`) on elevated containers for premium depth
- Group related items with 16px–24px gap spacing to create logical visual clusters
- Maintain high contrast between text and background (minimum 4.5:1 ratio) for accessibility
- Use the warm off-white background (`#F5F2EF`) on page backgrounds to add warmth without coldness
- Scale typography proportionally across breakpoints while maintaining hierarchy clarity
- Apply hover states that shift to **Deep Brown** (`#432010`) for clear interactive feedback

### Don't

- Don't use pure white (`#FFFFFF`) as the primary page background; use warm off-white (`#F5F2EF`) instead
- Don't reduce button padding below 12px vertical or 24px horizontal; maintain premium spacing
- Don't use body font sizes smaller than 16px on desktop or 14px on mobile
- Don't apply multiple shadows simultaneously (use single layer per elevation level)
- Don't use black text (`#000000`) directly on warm backgrounds; test contrast ratios first
- Don't stack more than 3 levels of heading hierarchy without breaking into new sections
- Don't reduce card border radius below 8px; maintain approachable rounding
- Don't use accent colors as primary text color; reserve for highlights and secondary actions
- Don't create interactive elements smaller than 40px × 40px (minimum touch target)
- Don't rely on color alone to convey meaning; use text labels or icons alongside color coding
- Don't apply letter spacing wider than 0.05em on body text; it reduces legibility
- Don't skip whitespace for layout density; use negative space as a design tool
- Don't apply shadows to text elements; use shadows only on lifted containers and surfaces

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single column layout, 20px padding, 32px section spacing, 14px–16px body text |
| Tablet | 768px–1023px | 2-column grid, 40px padding, 48px section spacing, 16px body text |
| Desktop | 1024px–1440px | 3+ column grid, 60px padding, 60px–80px section spacing, 18px body text |
| Wide | 1441px+ | Max-width container (1440px) centered, 80px padding, 80px section spacing |

### Touch Targets

- Minimum interactive element size: **40px × 40px** for buttons and links
- Minimum spacing between interactive elements: **8px** on all sides
- Button text area: minimum **16px font size** with **12px vertical × 24px horizontal padding**
- Navigation links: **44px height** minimum for comfortable touch
- Form inputs: **48px height** with **16px font size** for easy interaction on mobile
- Icon buttons: **40px × 40px** with centered 24px icons

### Collapsing Strategy

**Navigation:** On mobile (below 768px), primary navigation collapses into hamburger menu. Logo remains visible. Signup button stays visible and moves to icon-only state.

**Hero Section:** On mobile, hero container transitions from side-by-side to stacked vertical layout. Image moves below text. Padding reduces from 80px to 40px. Text scales down to 32px–40px.

**Cards:** On tablet (768px–1023px), cards display in 2-column grid. On mobile (below 768px), cards stack to single column with full width.

**Section Padding:** Desktop 60px–80px → Tablet 40px → Mobile 20px horizontal padding

**Typography Scaling:**
- H1: 56px desktop → 40px tablet → 28px mobile
- H2: 40px desktop → 32px tablet → 24px mobile
- H3: 24px desktop → 20px tablet → 18px mobile
- Body: 18px desktop → 16px tablet → 16px mobile

**Grid Columns:** 12-column desktop → 6-column tablet → 4-column mobile, with content wrapping to maintain readability.

**Button Sizing:** Full-width buttons on mobile (100% width with padding), inline buttons on tablet/desktop (auto width).

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Buttons:** Primary Brown (`#6B3E26`)
- **Secondary Actions / Links:** Warm Tan (`#C89B6D`)
- **Page Background:** Light Cream (`#F5F2EF`)
- **Card Background:** Pure White (`#FFFFFF`)
- **Body Text:** Black (`#000000`)
- **Heading Text:** Primary Brown (`#6B3E26`)
- **Accent Highlights:** Light Cream (`#E2C8AE`)
- **Hover State:** Deep Brown (`#432010`)
- **Borders:** Primary Brown (`#6B3E26`)
- **Icon Containers:** Light Cream (`#E2C8AE`)

### Iteration Guide

1. **All primary interactive elements (buttons, CTAs, navigation) must use Primary Brown (`#6B3E26`) as base color with Deep Brown (`#432010`) on hover**

2. **Button styling is non-negotiable: 12px vertical + 40px horizontal padding, 40px border-radius, 16px font weight 500, with shadow `rgba(0, 0, 0, 0.5) 0px 15px 40px 0px`**

3. **Typography hierarchy requires specific sizes (56px display, 40px H2, 24px H3, 18px body, 16px navigation) with matching weights (700 for display, 600 for headings, 400 for body)**

4. **Card and container padding must maintain minimum 40px on all sides; never reduce below 32px**

5. **Section spacing is vertical 60px on desktop, 48px on tablet, 32px on mobile; apply consistently between all major content blocks**

6. **Shadows follow strict elevation system: Elevation 1 uses `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px`, Elevation 2 uses `rgba(0, 0, 0, 0.5) 0px 15px 40px 0px`; do not create custom shadow values**

7. **Page background must be warm off-white (`#F5F2EF`), not pure white; card backgrounds use Pure White (`#FFFFFF`)**

8. **Text contrast must meet WCAG AA standards (minimum 4.5:1); verify Black (`#000000`) text on all background colors**

9. **Border radius follows scale: 0px flat elements, 8px form inputs, 12px cards, 40px buttons, 50% circles; never mix radii on same element type**

10. **Form inputs must be 48px height with 16px font, Warm Tan (`#C89B6D`) border by default, shifting to Primary Brown (`#6B3E26`) on focus**

11. **Responsive breakpoints trigger at 768px (tablet) and 1024px (desktop); all layout changes must be tested at both thresholds**

12. **Touch targets minimum 40px × 40px; spacing between interactive elements minimum 8px; test on actual mobile devices**

13. **Navigation bar uses semi-transparent white (`rgba(255, 255, 255, 0.95)`) with backdrop blur, height auto but minimum 60px with 12px vertical padding**

14. **Use ui-sans-serif system font stack exclusively; do not import additional font families unless explicitly required**

15. **Line heights must exceed text size by 1.3x–1.6x for readability; Body text uses 1.5x–1.75x multiplier for comfort**