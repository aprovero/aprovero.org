/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E59838',
          hover: '#D08324',
          dim: 'rgba(229, 152, 56, 0.12)',
          subtle: 'rgba(229, 152, 56, 0.05)',
          dark: '#B8651B',
        },
        surface: {
          light: '#F8F7F4',
          'light-card': '#FFFFFF',
          'light-muted': '#EFECE6',
          dark: '#0A0C10',
          'dark-card': '#10131A',
          'dark-elevated': '#151922',
          'dark-muted': '#1B202B',
        },
        border: {
          light: '#E2E0D8',
          'light-subtle': '#ECEAE3',
          dark: '#1E232E',
          'dark-subtle': '#151922',
        },
        ink: {
          light: '#16171A',
          'light-secondary': '#4A4D55',
          'light-muted': '#707480',
          dark: '#F3F4F6',
          'dark-secondary': '#9CA3AF',
          'dark-muted': '#646B78',
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


