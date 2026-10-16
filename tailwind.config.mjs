/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          dim: 'rgba(245, 158, 11, 0.14)',
          subtle: 'rgba(245, 158, 11, 0.06)',
          dark: '#B45309',
        },
        signal: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        surface: {
          light: '#F6F5F0',
          'light-card': '#FFFFFF',
          'light-muted': '#ECEAE2',
          dark: '#090B0E',
          'dark-card': '#10141B',
          'dark-elevated': '#161B24',
          'dark-muted': '#1C222D',
        },
        border: {
          light: '#DCD9CE',
          'light-subtle': '#E8E5DC',
          dark: '#222936',
          'dark-subtle': '#171C26',
        },
        ink: {
          light: '#141519',
          'light-secondary': '#4A4D57',
          'light-muted': '#6E7280',
          dark: '#F3F4F6',
          'dark-secondary': '#94A3B8',
          'dark-muted': '#64748B',
        },
      },
      fontFamily: {
        display: ['"IBM Plex Sans Condensed"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        reading: '44rem',
      },
    },
  },
  plugins: [],
};

