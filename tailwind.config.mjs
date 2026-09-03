/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00D3A5',
          hover: '#00BA92',
          dim: 'rgba(0, 211, 165, 0.12)',
          subtle: 'rgba(0, 211, 165, 0.05)',
          dark: '#009E7B',
        },
        surface: {
          light: '#FBFBFA',
          'light-card': '#FFFFFF',
          'light-muted': '#F4F4F5',
          dark: '#0B0D11',
          'dark-card': '#12151B',
          'dark-elevated': '#171B23',
          'dark-muted': '#1E232E',
        },
        border: {
          light: '#E4E4E7',
          'light-subtle': '#F0F0F2',
          dark: '#232834',
          'dark-subtle': '#181C24',
        },
        ink: {
          light: '#18181B',
          'light-secondary': '#52525B',
          'light-muted': '#71717A',
          dark: '#F4F4F6',
          'dark-secondary': '#94A3B8',
          'dark-muted': '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        reading: '44rem',
      },
    },
  },
  plugins: [],
};
