---
id: p3lyk
title: Front-End Style Guide
file_version: 1.1.2
app_version: 1.2.7
---

## Font Family

\``@next/font`\` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.

`📄 src/app/fonts.ts`

Import the font you would like to use from @next/font/google as a function. We recommend using variable fonts `--font-manrope`<swm-token data-swm-token=":src/app/fonts.ts:4:5:8:`  variable: &quot;--font-manrope&quot;,`"/> for the best performance and flexibility.

<br/>

Automatically self-host any **Google Font**. Fonts are included in the deployment and served from the same domain as your deployment:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/app/fonts.ts
```typescript
3      export const manrope = Manrope({
4        variable: "--font-manrope",
5        subsets: ["latin"],
6        fallback: ["sans-serif"],
7        display: "swap",
8      });
```

<br/>

<br/>

> **Good to know**: Use an underscore (\_) for font names with two or more words. E.g. `Roboto Mono` should be imported as `Roboto_Mono`.

<br/>

<br/>

Using this utility function exports a font, imports it, and applies its `classname` where needed. This ensures the font is preloaded only when it's rendered:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/app/layout.tsx
```tsx
11         <html lang="en" className={manrope.variable}>
```

<br/>

Finally, add the CSS variable to your Chakra UI CSS config:
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/theme/foundations/fonts.ts
```typescript
4      const fonts = {
5        body: "var(--font-manrope)",
6        heading: "var(--font-manrope)",
7      };
```

<br/>

For more informations about fonts in Next.js [visit official docs](https://beta.nextjs.org/docs/optimizing/fonts).

## Layout

<br/>

The designs were created to the following widths `375px` and `1440px`.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/theme/foundations/breakpoints.ts
```typescript
3      /**
4       * https://chakra-ui.com/docs/styled-system/theme#breakpoints
5       */
6      const breakpoints = {
7        sm: `${pxToEm(375)}`,
8        md: `${pxToEm(1440)}`,
9      };
```

<br/>

## Colors

<br/>

Custom colours available as a part of Chakra UI custom theme.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/theme/foundations/colors.ts
```typescript
1      /**
2       * https://chakra-ui.com/docs/styled-system/theme#colors
3       */
4      const colors = {
5        transparent: "transparent",
6        white: "hsl(0, 0%, 100%)",
7        botticelli: {
8          100: "hsl(193, 38%, 86%)",
9        },
10       aquamarine: {
11         100: "hsl(150, 100%, 66%)",
12       },
13       bayoux: {
14         100: "hsl(217, 19%, 38%)",
15         500: "hsl(217, 19%, 24%)",
16         900: "hsl(218, 23%, 16%)",
17       },
18     };
```

<br/>

Here is a brief explanation of the usage:

*   `botticelli`<swm-token data-swm-token=":src/theme/foundations/colors.ts:7:1:1:`  botticelli: {`"/>.`100`<swm-token data-swm-token=":src/theme/foundations/colors.ts:8:1:1:`    100: &quot;hsl(193, 38%, 86%)&quot;,`"/> = quote color
    
*   `aquamarine`<swm-token data-swm-token=":src/theme/foundations/colors.ts:10:1:1:`  aquamarine: {`"/>.`100`<swm-token data-swm-token=":src/theme/foundations/colors.ts:11:1:1:`    100: &quot;hsl(150, 100%, 66%)&quot;,`"/> = button background
    
*   `bayoux`<swm-token data-swm-token=":src/theme/foundations/colors.ts:13:1:1:`  bayoux: {`"/>. `500`<swm-token data-swm-token=":src/theme/foundations/colors.ts:15:1:1:`    500: &quot;hsl(217, 19%, 24%)&quot;,`"/>\= card background
    
*   `bayoux`<swm-token data-swm-token=":src/theme/foundations/colors.ts:13:1:1:`  bayoux: {`"/>.`900`<swm-token data-swm-token=":src/theme/foundations/colors.ts:16:1:1:`    900: &quot;hsl(218, 23%, 16%)&quot;,`"/> = body background
    

## Typography

<br/>

All available font sizes across all Chakra UI custom theme.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/theme/foundations/fontSizes.ts
```typescript
3      /**
4       * https://chakra-ui.com/docs/styled-system/theme#typography
5       */
6      const fontSizes = {
7        xs: `${pxToRem(10)}`,
8        sm: `${pxToRem(12)}`,
9        md: `${pxToRem(15)}`,
10       lg: `${pxToRem(18)}`,
11       xl: `${pxToRem(20)}`,
12       "2xl": `${pxToRem(24)}`,
13       "3xl": `${pxToRem(28)}`,
14       "4xl": `${pxToRem(36)}`,
15       "5xl": `${pxToRem(48)}`,
16       "6xl": `${pxToRem(60)}`,
17       "7xl": `${pxToRem(72)}`,
18       "8xl": `${pxToRem(96)}`,
19       "9xl": `${pxToRem(128)}`,
20     };
```

<br/>

Here is a brief explanation of the usage:

*   `3xl`<swm-token data-swm-token=":src/theme/foundations/fontSizes.ts:13:2:2:`  &quot;3xl&quot;: `${pxToRem(28)}`,`"/>\= quote
    

## Chakra CLI

The Chakra UI CLI can be used to generate typings for your custom theme tokens, like colors, semantic tokens, component variants, etc.

### Usage:

To generate typings for your theme, run the `theme` script:

```bash
yarn theme
```

If you'd like to continuously generate theme typings as you're editing your theme, run the `theme:watch` script:

```bash
yarn theme:watch
```

A successful execution should output something like this:

```
yarn run v1.22.10
$ chakra-cli tokens src/theme/index.ts

Chakra UI CLI  v2.3.0 by Chakra UI
Generate theme typings for autocomplete


ℹ Generating chakra theme typings
✔ Done
✨  Done in 1.30s.
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBYWR2aWNlLWdlbmVyYXRvci1hcHAlM0ElM0FqYWt1Ymppcm91cw==/docs/p3lyk).
