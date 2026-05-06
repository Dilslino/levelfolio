import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090A0D', surface: '#111318', card: '#171A21', elevated: '#1D222B',
        primary: '#F6F7F9', secondary: '#9BA3AF', muted: '#6B7280', accent: '#8B5CF6', cyan: '#22D3EE', success: '#34D399', line: 'rgba(255,255,255,0.08)'
      },
      fontFamily: { sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'] },
      boxShadow: { soft: '0 18px 60px rgba(0,0,0,.28)' }
    }
  },
  plugins: []
};
export default config;
