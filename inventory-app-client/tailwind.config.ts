import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';
import colors from 'tailwindcss/colors';

const baseColors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'] as const;
type BaseColor = (typeof baseColors)[number];

const shadeMapping = {
  '50': '900',
  '100': '800',
  '200': '700',
  '300': '600',
  '400': '500',
  '500': '400',
  '600': '300',
  '700': '200',
  '800': '100',
  '900': '50',
} as const;
type ShadeKey = keyof typeof shadeMapping;
type ShadeValue = (typeof shadeMapping)[ShadeKey];

const generateThemeObject = (
  colors: Record<BaseColor, Record<string, string>>,
  mapping: Record<ShadeKey, ShadeValue>,
  invert = false
) => {
  const theme: Record<BaseColor, Record<ShadeKey, string>> = {} as any;

  baseColors.forEach((color) => {
    theme[color] = {} as Record<ShadeKey, string>;

    (Object.entries(mapping) as [ShadeKey, ShadeValue][]).forEach(([key, value]) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });

  return theme;
};

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: '#fff',
  },
  dark: {
    ...darkTheme,
    white: colors.gray['950'],
    black: colors.gray['50'],
  },
};

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
