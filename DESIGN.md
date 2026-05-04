# ☕ Coffee Cup Landing Page — Design System

## 📌 Overview

This document defines all design elements required to build the Coffee Cup landing page UI. It includes colors, typography, layout, components, and assets.

---

# 🎨 Color System

## Primary Colors

* `--primary`: #6B3E26 (Coffee Brown)
* `--primary-dark`: #4B2A1A
* `--accent`: #C89B6D (Light Coffee)
* `--bg`: #F5F2EF (Main Background)

## Neutral Colors

* `--white`: #FFFFFF
* `--text-main`: #2B2B2B
* `--text-light`: #7A7A7A
* `--border`: #E5E5E5

---

# 🔤 Typography

## Font Family

* Heading: `"Playfair Display", serif`
* Body: `"Poppins", sans-serif`

## Font Scale

| Element | Size | Weight    |
| ------- | ---- | --------- |
| H1      | 48px | Bold      |
| H2      | 32px | Semi-bold |
| H3      | 24px | Medium    |
| Body    | 16px | Regular   |
| Small   | 12px | Light     |

---

# 📐 Layout System

## Container

* Max Width: 1200px
* Padding: 0 20px
* Centered layout

## Spacing Scale

* 8px (xs)
* 16px (sm)
* 32px (md)
* 64px (lg)
* 100px+ (section spacing)

## Grid

* 12-column grid (desktop)
* 2-column (tablet)
* 1-column (mobile)

---

# 🧩 Components

## 1. Navbar

### Elements:

* Logo (left)
* Navigation links (center)
* Icons (search, cart)
* CTA button (Signup)

### Style:

* Height: 70px
* Background: transparent
* Sticky top

---

## 2. Hero Section

### Elements:

* Heading (large serif)
* Description text
* CTA button ("Order Now")
* Stats (3 items)
* Hero image (coffee splash)

### Layout:

* 2 columns (text + image)

---

## 3. Stats Section

### Items:

* Reviews (1K+)
* Best Sell (3K+)
* Menu (150K+)

### Style:

* Horizontal flex
* Bold numbers
* Small labels

---

## 4. Services Section

### Title:

"OUR DELICIOUS SERVICES"

### Cards (3 items):

* Coffee Types
* Different Beans
* Cold Coffee

### Card Style:

* Background: white
* Padding: 24px
* Border radius: 16px
* Shadow: soft
* Icon (top center)

---

## 5. Coffee Beans Divider

* Full-width image (coffee beans)
* Acts as visual separator

---

## 6. Products Section

### Title:

"ENJOY A NEW BLEND OF COFFEE STYLE"

### Product Card:

* Image (top)
* Title
* Price
* Buy button

### Grid:

* 3 columns (desktop)
* 2 columns (tablet)
* 1 column (mobile)

---

## 7. Testimonial Section

### Layout:

* Left: Text
* Right: Image (rounded)

### Elements:

* Quote text
* Customer name
* Navigation arrows

### Style:

* Background: light beige
* Decorative quote icon

---

## 8. Footer

### Sections:

1. About Company
2. Useful Links
3. Opening Hours

### Bottom Bar:

* Copyright
* Privacy / Terms links

### Style:

* Background: dark brown
* Text: white

---

# 🎯 UI Elements

## Buttons

* Primary: Brown background, white text
* Border radius: 999px (pill shape)
* Padding: 10px 20px

## Cards

* Radius: 16px
* Shadow: 0 10px 30px rgba(0,0,0,0.05)

## Images

* Rounded corners
* Object-fit: cover

---

# 🖼️ Assets Required

## Images

* Hero coffee splash
* Coffee beans background
* 6 product images
* 1 testimonial image

## Icons

* Coffee cup
* Coffee beans
* Cold drink
* Search
* Cart

Suggested libraries:

* Lucide Icons
* Heroicons
* Flaticon

---

# 🎞️ Effects & Styling

## Shadows

Soft shadow for cards:

```
0 10px 30px rgba(0,0,0,0.05)
```

## Hover Effects

* Button: darken background
* Card: slight scale (1.02)

## Transitions

* Duration: 0.3s ease

---

# 📱 Responsive Design

## Breakpoints

* Mobile: < 640px
* Tablet: 640px–1024px
* Desktop: > 1024px

## Behavior

* Stack columns on mobile
* Reduce font sizes
* Grid → single column

---

# 🧠 Page Structure

```
Navbar
Hero Section
Stats
Services
Divider (Beans)
Products Grid
Testimonial
Footer
```

---

# ⚙️ Tech Recommendations

* React.js + Tailwind CSS
* Optional: Framer Motion (animations)
* Icons: Lucide / Heroicons

---

# 🚀 Notes

* Maintain consistent spacing
* Use reusable components
* Follow color and typography strictly
* Optimize images for performance

---

**End of Design System**
