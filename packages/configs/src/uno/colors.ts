export const lightColors = () => ({
  accent: '#1ed79e',
  background: '#f5f5f5',
  card: '#FFFFFF',
  tooltip: '#374151',
  chip: '#e4e4e4',
  error: '#FF5252',
  info: '#0099CC',
  primary: '#03b585',
  secondary: '#0a7d5e',
  success: '#4CAF50',
  thumb: '#000000',
  warning: '#FB8C00',
  surface: '#ffffff'
});

export const darkColors = () => ({
  accent: '#1ed79e',
  background: '#000000',
  card: '#1a1a1a',
  chip: '#2a2a2a',
  divider: '#2a2a2a',
  error: '#FF5252',
  info: '#0099CC',
  menu: '#1a1a1a',
  tooltip: '#1a1a1a',
  surface: '#161616',
  primary: '#03b585',
  secondary: '#0a7d5e',
  success: '#4CAF50',
  thumb: '#2a2a2a',
  warning: '#FB8C00'
});

export type ColorPalette = keyof ReturnType<typeof lightColors> & keyof ReturnType<typeof darkColors>;
