/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bone:           '#F9F8F4',
        parchment:      '#F0EFE9',
        fog:            '#E4E3DD',
        carbon:         '#C9C8C2',
        slate:          '#6E6E6A',
        charcoal:       '#1C1C1A',
        signal:         '#1A1AE8',
        moss:           '#455A34',
        oxide:          '#7A3B1E',
        void:           '#0A0A0A',
        'signal-tint':  '#EEEEFF',
        'moss-tint':    '#EBF0E6',
        'oxide-tint':   '#F5EAE5',
        'signal-border':'#C0C0F8',
        'moss-border':  '#BECFB3',
        'oxide-border': '#DDB9A9',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        xs:    ['12px', { lineHeight: '1.5' }],
        sm:    ['13px', { lineHeight: '1.5' }],
        base:  ['15px', { lineHeight: '1.6' }],
        lg:    ['17px', { lineHeight: '1.5' }],
        xl:    ['20px', { lineHeight: '1.3' }],
        '2xl': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '3xl': ['30px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderWidth: {
        DEFAULT: '0.5px', '0': '0px', '1': '1px', '1.5': '1.5px', '2': '2px',
      },
    },
  },
  plugins: [],
}
