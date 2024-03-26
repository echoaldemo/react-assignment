/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      boxShadow: {
        active: '0 0 12px 0 rgba(0, 0, 0, 0.1) inset',
        modal: '0 10px 24px rgba(0, 0, 0, 0.1)',
        tooltip: '0px 8px 16px rgba(0, 0, 0, 0.06)',
        dropdown: '0 4px 10px rgba(69, 76, 181, 0.15)'
      },
      colors: {
        description: 'rgb(var(--ds-description) / <alpha-value>)',
        placeholder: 'rgb(var(--ds-placeholder) / <alpha-value>)',
        disabled: 'rgb(var(--ds-disabled) / <alpha-value>)',
        outline: 'rgb(var(--ds-border) / <alpha-value>)',
        'outline-active': 'rgb(var(--ds-outline-active) / <alpha-value>)',
        fill: {
          light: 'rgb(var(--ds-fill-light) / <alpha-value>)',
          dark: 'rgb(var(--ds-fill-dark) / <alpha-value>)',
          disabled: 'rgb(var(--ds-fill-disabled) / <alpha-value>)'
        },
        primary: {
          base: 'rgb(var(--ds-primary-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-primary-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-primary-light) / <alpha-value>)'
        },
        secondary: {
          base: 'rgb(var(--ds-secondary-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-secondary-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-secondary-light) / <alpha-value>)'
        },
        success: {
          base: 'rgb(var(--ds-success-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-success-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-success-light) / <alpha-value>)'
        },
        info: {
          base: 'rgb(var(--ds-info-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-info-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-info-light) / <alpha-value>)'
        },
        warning: {
          base: 'rgb(var(--ds-warning-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-warning-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-warning-light) / <alpha-value>)'
        },
        danger: {
          base: 'rgb(var(--ds-danger-base) / <alpha-value>)',
          dark: 'rgb(var(--ds-danger-dark) / <alpha-value>)',
          light: 'rgb(var(--ds-danger-light) / <alpha-value>)'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}
