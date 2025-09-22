/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        vibe: {
          "primary": "#6366f1",
          "primary-content": "#ffffff",
          "secondary": "#8b5cf6",
          "accent": "#f472b6",
          "neutral": "#2a2731",
          "base-100": "#1c1b22",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#fbbf24",
          "error": "#ef4444"
        }
      },
      'dark'
    ],
    darkTheme: 'vibe'
  }
};
