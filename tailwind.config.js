/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Включаем поддержку темной темы через класс
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        // Кастомные цвета для темной темы
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        // Основные анимации
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },

        // Дополнительные анимации для интерактивности
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },

        // Анимации для карточек
        cardHover: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          },
          '100%': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },

        // Анимации для текста
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '20ch' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },

        // Анимации для загрузки
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },

        // Анимации для уведомлений
        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideOutToTop: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
        },

        // Анимации для модальных окон
        modalIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        modalOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9) translateY(20px)',
          },
        },

        // Анимации для прогресс-баров
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width, 100%)' },
        },

        // Анимации для скелетонов
        skeleton: {
          '0%': {
            backgroundPosition: '-200px 0',
          },
          '100%': {
            backgroundPosition: 'calc(200px + 100%) 0',
          },
        },

        // Анимация пульсирующей тени
        pulseShadow: {
          '0%, 100%': {
            borderColor: '#d946ef',
            filter: 'drop-shadow(0 0 10px #d946ef)',
          },
          '50%': {
            borderColor: '#06b6d4',
            filter: 'drop-shadow(0 0 15px #06b6d4)',
          },
        },
      },
      animation: {
        // Основные анимации
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 8s linear infinite',

        // Интерактивные анимации
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        shake: 'shake 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',

        // Анимации для карточек
        'card-hover': 'cardHover 0.3s ease-out forwards',

        // Анимации для текста
        typewriter: 'typewriter 2s steps(20, end) forwards',
        blink: 'blink 1s infinite',

        // Анимации для загрузки
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',

        // Анимации для уведомлений
        'slide-in-top': 'slideInFromTop 0.3s ease-out',
        'slide-out-top': 'slideOutToTop 0.3s ease-in',

        // Анимации для модальных окон
        'modal-in': 'modalIn 0.3s ease-out',
        'modal-out': 'modalOut 0.2s ease-in',

        // Анимации для прогресса
        progress: 'progressFill 1s ease-out forwards',

        // Анимации для скелетонов
        skeleton: 'skeleton 1.5s ease-in-out infinite',

        // Анимация пульсирующей тени
        'pulse-shadow': 'pulseShadow 5s ease-in-out infinite',

        // Задержки для последовательных анимаций
        'delay-100': 'fadeIn 0.6s ease-out 0.1s forwards',
        'delay-200': 'fadeIn 0.6s ease-out 0.2s forwards',
        'delay-300': 'fadeIn 0.6s ease-out 0.3s forwards',
        'delay-500': 'fadeIn 0.6s ease-out 0.5s forwards',
        'delay-700': 'fadeIn 0.6s ease-out 0.7s forwards',
        'delay-1000': 'fadeIn 0.6s ease-out 1s forwards',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)',
        'gradient-secondary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(-45deg, #374151, #4b5563, #6b7280, #9ca3af)',

        // Дополнительные градиенты
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        // Скелетон градиент
        'skeleton-gradient':
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'dark-DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',

        // Дополнительные тени
        glow: '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },

      // Добавляем кастомные timing functions
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      // Добавляем кастомные длительности
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Отключаем preflight чтобы не конфликтовать с Ant Design
  },
}
