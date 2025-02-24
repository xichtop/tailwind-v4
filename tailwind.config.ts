import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import safeArea from './tailwind/safe-area';
import iconSize from './tailwind/icon-size';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '2.5rem',
        '2xl': '8rem',
      },
    },
    extend: {
      scale: {
        '97': '0.97',
        '98': '0.98',
        '99': '0.99',
      },
      opacity: {
        '12': '0.12',
        '38': '0.38',
        '87': '0.87',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '90': '22.5rem',
      },
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        // Bigger values
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '132': '33rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '192': '48rem',
        '200': '50rem',
        '240': '60rem',
        '256': '64rem',
        '280': '70rem',
        '320': '80rem',
        '360': '90rem',
        '400': '100rem',
        '480': '120rem',
      },
      fontSize: {
        '3xl': ['1.875rem', '2.5rem'],
        '4xl': ['2.25rem', '2.75rem'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw',
      }),
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
      }),
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-default) !important',
            maxWidth: 'unset',

            strong: {
              fontWeight: '700',
            },

            img: {
              borderRadius: '0.5rem',
              width: 'auto',
            },

            figure: {
              display: 'flex',
              justifyContent: 'center',
            },
          },
        },
      }),
    },
  },
  plugins: [
    safeArea,
    iconSize,

    plugin(({ addComponents }) => {
      addComponents({
        '.bg-card': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-card-rgb), var(--tw-bg-opacity))',
        },
        '.bg-default': {
          '--tw-bg-opacity': '1',
          backgroundColor: 'rgba(var(--bg-default-rgb), var(--tw-bg-opacity))',
        },
        '.shadow-card': {
          '--tw-shadow': 'rgba(var(--shadow-card-rgb), 0.2) 0px 8px 24px',
          boxShadow:
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        },
        '.text-default': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-default-rgb), var(--tw-text-opacity))',
        },
        '.text-hint': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-hint-rgb), var(--tw-text-opacity))',
        },
        '.text-disabled': {
          '--tw-text-opacity': '1',
          color: 'rgba(var(--text-disabled-rgb), var(--tw-text-opacity))',
        },
        '.no-scroll-bar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
} satisfies Config;
