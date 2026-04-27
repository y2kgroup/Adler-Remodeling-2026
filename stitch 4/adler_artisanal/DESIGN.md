# Design System Strategy: The Architectural Curated Aesthetic

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Curator"**

In the home improvement sector, trust is built through the perception of precision, craftsmanship, and structural integrity. This design system moves away from the "template-heavy" look of generic contracting sites. Instead, it adopts an **Editorial Architectural** approach—treating every screen like a high-end interior design spread.

We break the standard grid through **intentional asymmetry** and **tonal depth**. By utilizing oversized typography scales against generous white space (the "Breathing Room" principle) and overlapping high-resolution imagery with floating UI elements, we create a sense of bespoke luxury. This system isn't just a UI; it’s a digital blueprint for excellence.

---

## 2. Colors: Tonal Authority
Our palette moves beyond simple yellow and grey. We use Material Design logic to create a sophisticated environment where color conveys function and premium "soul."

### The Palette
*   **Primary (`#7b5800` / `#fcb900`):** The "Gold Standard." This isn't just a CTA color; it represents the warmth of a newly remodeled home. 
*   **Secondary (`#5e5e5e`):** Muted slate tones that provide the "structural" weight of the UI.
*   **Surface Tiers:** We rely on `surface-container-lowest` (`#ffffff`) for main content and `surface-container-low` (`#f5f3f3`) for sectioning.

### Color Rules
*   **The "No-Line" Rule:** Do not use 1px solid borders to separate sections. Transition between sections using background color shifts (e.g., a `surface` section moving into a `surface-container-low` section). This creates a seamless, high-end "tiled" look rather than a boxed-in feel.
*   **The "Glass & Gradient" Rule:** To avoid a "flat" corporate look, use subtle linear gradients on primary CTAs (e.g., transitioning from `primary` to `primary_container`). For floating navigation or over-image cards, use **Glassmorphism**: `surface_container_lowest` with 80% opacity and a `20px` backdrop-blur.
*   **Signature Textures:** Incorporate `surface_variant` for subtle background depth behind high-contrast text.

---

## 3. Typography: Editorial Precision
We utilize a high-contrast scale to guide the eye through the "story" of a home project.

*   **Display & Headlines (Plus Jakarta Sans):** Our "Architectural" typeface. Large, geometric, and authoritative. Use `display-lg` for Hero sections to create an immediate impact.
*   **Body & Labels (Inter):** Our "Functional" typeface. Clean and highly legible. Use `body-lg` for project descriptions to maintain an premium reading experience.
*   **Visual Hierarchy:** Pair a `display-sm` headline with a `label-md` (all-caps, tracked out 5%) immediately above it to act as a "section eyebrow," mimicking luxury magazine layouts.

---

## 4. Elevation & Depth: Tonal Layering
We achieve depth through physics-inspired layering rather than artificial shadows.

*   **The Layering Principle:** Stack surfaces. Place a `surface-container-lowest` card on top of a `surface-container-low` background. This creates a "soft lift" that feels natural and expensive.
*   **Ambient Shadows:** If an element must float (like a "Request Quote" modal), use an ultra-diffused shadow: `Y: 8px, Blur: 24px, Color: on-surface (8% opacity)`. This mimics natural ambient light.
*   **The "Ghost Border" Fallback:** If a container needs definition against a similar background, use a "Ghost Border": `outline-variant` at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism Depth:** Use backdrop blurs for headers. As the user scrolls, the content blurring behind the header provides a sense of material depth and continuity.

---

## 5. Components: Handcrafted UI

### Buttons
*   **Primary:** `primary_container` background with `on_primary_container` text. Roundedness: `md` (0.375rem). Use a subtle 2px bottom "shining" gradient to give it weight.
*   **Secondary:** `surface_container_highest` background. No border. High-end subtle interaction.
*   **Tertiary:** Text-only using `primary` color, with an `8.5` spacing underline that expands on hover.

### Cards & Lists
*   **The Divider Ban:** Strictly forbid 1px horizontal lines between list items. Use `spacing-6` or `spacing-8` of vertical white space to define separation.
*   **Project Cards:** Use `surface-container-low` with a `lg` (0.5rem) corner radius. Imagery should be the "hero," with text nested in a `surface-container-lowest` glassmorphic overlay at the bottom.

### Input Fields
*   **Style:** `surface-container-highest` background with a `ghost border` fallback. Labels should be `label-md` positioned above the field, never inside as placeholder text.
*   **Focus State:** Shift the background to `surface-container-lowest` and apply a 2px `primary` bottom-border only.

### Additional Signature Components
*   **The "Before/After" Slider:** A custom component with a `primary` gold vertical handle and a `glassmorphic` label indicating "Before" and "After."
*   **Architectural Progress Bar:** A thin, `primary` colored line that tracks scroll progress at the very top of project case studies.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a `display-md` headline on the left and a `body-lg` paragraph offset to the right with `spacing-12` of separation.
*   **Embrace White Space:** If you think there is enough space, add `spacing-4` more. 
*   **Color as Accents:** Use the gold/yellow (`primary`) sparingly—only for things that require immediate action or high-value information.

### Don’t:
*   **Don't use "pure black":** Use `on_surface` (#1b1c1c) for text to keep the contrast high but the feel "warm."
*   **Don't use standard shadows:** Avoid the "fuzzy grey" look. If a shadow isn't tinted or ultra-diffused, it doesn't belong.
*   **Don't crowd elements:** Avoid putting text directly against the edge of a container. Use a minimum of `spacing-6` for internal padding.