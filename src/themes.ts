export type ThemeKey = 'feminine' | 'fresh' | 'modern';

export interface Theme {
  label: string;
  preview: string; // color shown in selector dot
  colors: Record<string, string>;
}

export const themes: Record<ThemeKey, Theme> = {
  feminine: {
    label: 'Feminin',
    preview: '#D4A59A',
    colors: {
      '--c-bg': '#FAF7F2',
      '--c-surface': '#FFFFFF',
      '--c-text': '#2C2825',
      '--c-text-soft': '#8A7E74',
      '--c-text-italic': '#5C554E',
      '--c-accent': '#C47D5A',
      '--c-accent-hover': '#A8654A',
      '--c-accent-light': '#F5EDE6',
      '--c-blush': '#D4A59A',
      '--c-blush-light': '#F8EDEB',
      '--c-divider': '#E8E2DA',
      '--c-footer': '#2C2825',
      '--c-badge': '#C47D5A',
      '--c-card-border': 'rgba(212,165,154,0.2)',
      '--c-card-highlight': '#C47D5A',
    },
  },
  fresh: {
    label: 'Frisch',
    preview: '#7BAE8E',
    colors: {
      '--c-bg': '#F5F8F6',
      '--c-surface': '#FFFFFF',
      '--c-text': '#1E2D26',
      '--c-text-soft': '#6B7E72',
      '--c-text-italic': '#3A5245',
      '--c-accent': '#5B9B74',
      '--c-accent-hover': '#498563',
      '--c-accent-light': '#E2F0E8',
      '--c-blush': '#7BAE8E',
      '--c-blush-light': '#EDF5F0',
      '--c-divider': '#D4E2DA',
      '--c-footer': '#1E2D26',
      '--c-badge': '#5B9B74',
      '--c-card-border': 'rgba(91,155,116,0.15)',
      '--c-card-highlight': '#5B9B74',
    },
  },
  modern: {
    label: 'Modern',
    preview: '#3D3D3D',
    colors: {
      '--c-bg': '#F5F5F3',
      '--c-surface': '#FFFFFF',
      '--c-text': '#1A1A1A',
      '--c-text-soft': '#7A7A7A',
      '--c-text-italic': '#4A4A4A',
      '--c-accent': '#1A1A1A',
      '--c-accent-hover': '#333333',
      '--c-accent-light': '#EBEBEB',
      '--c-blush': '#9A9590',
      '--c-blush-light': '#F0EEEC',
      '--c-divider': '#E0E0E0',
      '--c-footer': '#1A1A1A',
      '--c-badge': '#1A1A1A',
      '--c-card-border': 'rgba(26,26,26,0.1)',
      '--c-card-highlight': '#1A1A1A',
    },
  },
};
