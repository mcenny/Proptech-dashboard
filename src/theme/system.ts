import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      bg: '{colors.surface.page}',
      color: '{colors.text.heading}',
      fontFamily: '{fonts.body}',
    },
    '*': { boxSizing: 'border-box' },
  },
  theme: {
    tokens: {
      fonts: {
        body: {
          value: '"Euclid Circular B", sans-serif',
        },
        heading: {
          value: '"Euclid Circular B", sans-serif',
        },
      },
      colors: {
        brand: {
          green: {
            solid: { value: '#105B48' },
            tint: { value: 'rgba(23, 109, 88, 0.15)' },
            text: { value: '#176D58' },
          },
        },
        series: {
          blue: { value: '#4545FE' },
          green: { value: '#12B76A' },
          red: { value: '#F04438' },
          teal: { value: '#14B8A6' },
        },
        ink: {
          900: { value: '#141414' },
          800: { value: '#292929' },
          700: { value: '#3D3D3D' },
          600: { value: '#525252' },
          500: { value: '#606060' },
          400: { value: '#919191' },
          300: { value: '#D6D6D6' },
          200: { value: '#E4E4E4' },
          100: { value: '#F5F5F5' },
          50: { value: '#F9FAFB' },
        },
        text: {
          heading: { value: '#191919' },
          muted: { value: '#606060' },
          body: { value: '#3D3D3D' },
        },
        border: {
          card: { value: '#E4E4E4' },
          subtle: { value: '#F4F4F5' },
        },
        surface: {
          page: { value: '#FBFCFC' },
          subtle: { value: '#F9FAFB' },
          gray: { value: '#F5F5F5' },
        },
      },
      radii: {
        card: { value: '16px' },
        tile: { value: '12px' },
        chip: { value: '8px' },
        pill: { value: '72px' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
