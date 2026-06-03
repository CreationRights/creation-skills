/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(333, 100%, 97%)',
            '100': 'hsl(333, 100%, 94%)',
            '200': 'hsl(333, 100%, 86%)',
            '300': 'hsl(333, 100%, 76%)',
            '400': 'hsl(333, 100%, 64%)',
            '500': 'hsl(333, 100%, 50%)',
            '600': 'hsl(333, 100%, 40%)',
            '700': 'hsl(333, 100%, 32%)',
            '800': 'hsl(333, 100%, 24%)',
            '900': 'hsl(333, 100%, 16%)',
            '950': 'hsl(333, 100%, 10%)',
            DEFAULT: '#ff72b2'
        },
        secondary: {
            '50': 'hsl(222, 54%, 97%)',
            '100': 'hsl(222, 54%, 94%)',
            '200': 'hsl(222, 54%, 86%)',
            '300': 'hsl(222, 54%, 76%)',
            '400': 'hsl(222, 54%, 64%)',
            '500': 'hsl(222, 54%, 50%)',
            '600': 'hsl(222, 54%, 40%)',
            '700': 'hsl(222, 54%, 32%)',
            '800': 'hsl(222, 54%, 24%)',
            '900': 'hsl(222, 54%, 16%)',
            '950': 'hsl(222, 54%, 10%)',
            DEFAULT: '#3860be'
        },
        accent: {
            '50': 'hsl(134, 30%, 97%)',
            '100': 'hsl(134, 30%, 94%)',
            '200': 'hsl(134, 30%, 86%)',
            '300': 'hsl(134, 30%, 76%)',
            '400': 'hsl(134, 30%, 64%)',
            '500': 'hsl(134, 30%, 50%)',
            '600': 'hsl(134, 30%, 40%)',
            '700': 'hsl(134, 30%, 32%)',
            '800': 'hsl(134, 30%, 24%)',
            '900': 'hsl(134, 30%, 16%)',
            '950': 'hsl(134, 30%, 10%)',
            DEFAULT: '#468254'
        },
        'neutral-50': '#333333',
        'neutral-100': '#f9f9f9',
        'neutral-200': '#000000',
        'neutral-300': '#999999',
        'neutral-400': '#555555',
        'neutral-500': '#1f1f24',
        'neutral-600': '#0b0b0b',
        'neutral-700': '#dddddd',
        'neutral-800': '#7d87a0',
        'neutral-900': '#f4f4f4',
        background: '#0b0b0b',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Aeonik',
            'sans-serif'
        ],
        heading: [
            'Miriam Libre',
            'sans-serif'
        ],
        body: [
            'Inconsolata',
            'sans-serif'
        ],
        font4: [
            'Arial',
            'sans-serif'
        ]
    },
    fontSize: {
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '28.8px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '30.8px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '43.2px',
                letterSpacing: '0.6px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '39.6px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '20px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '67.2px',
                letterSpacing: '-1.12px'
            }
        ],
        '75.2': [
            '75.2px',
            {
                lineHeight: '97.76px'
            }
        ],
        '55.04': [
            '55.04px',
            {
                lineHeight: '63.296px',
                letterSpacing: '-1.28px'
            }
        ],
        '28.8': [
            '28.8px',
            {
                lineHeight: '40.32px',
                letterSpacing: '0.8px'
            }
        ],
        '25.6': [
            '25.6px',
            {
                lineHeight: '35.84px',
                letterSpacing: '0.8px'
            }
        ],
        '21.92': [
            '21.92px',
            {
                lineHeight: '26.304px'
            }
        ],
        '20.8': [
            '20.8px',
            {
                lineHeight: '31.2px',
                letterSpacing: '0.48px'
            }
        ],
        '19.2': [
            '19.2px',
            {
                lineHeight: '26.88px',
                letterSpacing: '0.8px'
            }
        ],
        '17.6': [
            '17.6px',
            {
                lineHeight: '20px',
                letterSpacing: '-0.16px'
            }
        ]
    },
    spacing: {
        '19': '38px',
        '24': '48px',
        '32': '64px',
        '36': '72px',
        '40': '80px',
        '96': '192px',
        '104': '208px',
        '156': '312px',
        '196': '392px',
        '1px': '1px',
        '35px': '35px',
        '245px': '245px',
        '367px': '367px'
    },
    borderRadius: {
        xs: '2px',
        md: '8px',
        xl: '20px',
        full: '800px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px',
        md: 'rgb(199, 197, 199) 0px 0px 12px 2px',
        lg: 'rgba(0, 0, 0, 0.2) 0px 0px 18px 0px'
    },
    screens: {
        '400px': '400px',
        sm: '426px',
        md: '769px',
        '890px': '890px',
        '897px': '897px',
        lg: '1024px',
        xl: '1280px',
        '1920px': '1920px'
    },
    transitionDuration: {
        '100': '0.1s',
        '120': '0.12s',
        '200': '0.2s',
        '300': '0.3s',
        '350': '0.35s',
        '400': '0.4s',
        '450': '0.45s',
        '550': '0.55s',
        '1050': '1.05s',
        '1100': '1.1s',
        '2000': '2s'
    },
    transitionTimingFunction: {
        default: 'ease',
        custom: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '537.6px'
    }
},
  },
};
