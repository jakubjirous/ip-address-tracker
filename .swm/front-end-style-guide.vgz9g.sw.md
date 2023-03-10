---
id: vgz9g
title: Front-End Style Guide
file_version: 1.1.2
app_version: 1.3.6
---

## Layout

<br/>

The designs were created to the following widths `375px` and `1440px`.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 tailwind.config.js
```javascript
798        screens: {
799          sm: "375px", // 640px
800          md: "1440px", // 768px
801          // lg: "1024px",
802          // xl: "1280px",
803          // "2xl": "1536px",
804        },
```

<br/>

## Colors

<br/>

Aside from Tailwind CSS's default colour palette, custom colours are also available.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 tailwind.config.js
```javascript
184          dusty: {
185            // 50: "",
186            // 100: "",
187            // 200: "",
188            // 300: "",
189            // 400: "",
190            500: "#969696",
191            // 600: "",
192            // 700: "",
193            // 800: "",
194            900: "#2b2b2b",
195          },
```

<br/>

## Typography

<br/>

All available font sizes across all Tailwind CSS custom theme.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 tailwind.config.js
```javascript
374        fontSize: {
375          "3xs": ["0.5em", { lineHeight: "0.625rem" }], // "8px", "10px"
376          "2xs": ["0.625rem", { lineHeight: "0.75rem" }], // "10px", "12px"
377          xs: ["0.75rem", { lineHeight: "1rem" }], // "12px", "16px"
378          sm: ["0.875rem", { lineHeight: "1.25rem" }], // "14px", "20px"
379          base: ["1.125rem", { lineHeight: "1.625rem" }], // "18px", "26px"
380          lg: ["1.125rem", { lineHeight: "1.75rem" }], // "18px", "28px"
381          xl: ["1.25rem", { lineHeight: "1.75rem" }], // "20px", "28px"
382          "2xl": ["1.625rem", { lineHeight: "2.125rem" }], // "26px", "34px"
383          "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // "30px", "36px"
384          "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // "36px", "40px"
385          "5xl": ["3rem", { lineHeight: "1" }], // "48px"
386          "6xl": ["3.75rem", { lineHeight: "1" }], // "60px"
387          "7xl": ["4.5rem", { lineHeight: "1" }], // "72px"
388          "8xl": ["6rem", { lineHeight: "1" }], // "96px"
389          "9xl": ["8rem", { lineHeight: "1" }], // "128px"
390        },
```

<br/>

## Font Family

<br/>

Using Next.js' internal tooling for loading external font `Rubik` from `Google Fonts` and in the same time keeping the best performance possible.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/theme/fonts/fonts.ts
```typescript
1      import { Rubik } from "@next/font/google";
2      
3      export const rubik = Rubik({
4        variable: "--font-rubik",
5        subsets: ["latin"],
6        fallback: ["sans-serif"],
7        display: "swap",
8      });
```

<br/>

Using the internal Next.js font support, the following CSS variable `var(--font-rubik)`<swm-token data-swm-token=":tailwind.config.js:338:6:12:`      rubik: [&quot;var(--font-rubik)&quot;],`"/> is connected to TailwindCSS:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 tailwind.config.js
```javascript
337        fontFamily: {
338          rubik: ["var(--font-rubik)"],
339          sans: [
340            "ui-sans-serif",
341            "system-ui",
342            "-apple-system",
343            "BlinkMacSystemFont",
344            '"Segoe UI"',
345            "Roboto",
346            '"Helvetica Neue"',
347            "Arial",
348            '"Noto Sans"',
349            "sans-serif",
350            '"Apple Color Emoji"',
351            '"Segoe UI Emoji"',
352            '"Segoe UI Symbol"',
353            '"Noto Color Emoji"',
354          ],
355          serif: [
356            "ui-serif",
357            "Georgia",
358            "Cambria",
359            '"Times New Roman"',
360            "Times",
361            "serif",
362          ],
363          mono: [
364            "ui-monospace",
365            "SFMono-Regular",
366            "Menlo",
367            "Monaco",
368            "Consolas",
369            '"Liberation Mono"',
370            '"Courier New"',
371            "monospace",
372          ],
373        },
```

<br/>

<br/>

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBaXAtYWRkcmVzcy10cmFja2VyJTNBJTNBamFrdWJqaXJvdXM=/docs/vgz9g).
