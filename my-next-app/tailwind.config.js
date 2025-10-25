// tailwind.config.js

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          dmsans: ['"DM Sans"', 'sans-serif'],
        },
        keyframes: {
          floating: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' }, // 위로 살짝 올라감
          },
        },
        animation: {
          floating: 'floating 2.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  