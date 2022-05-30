import { createContext } from 'react';

export function themeStateReducer(state, action) {
  switch (action.type) {
    case 'light':
      return {
        isDark: false,
        isLight: true,
        mode: 'light',
      };
    case 'dark':
      return {
        isDark: true,
        isLight: false,
        mode: 'dark',
      };
    case 'toggle':
      return {
        isDark: !state.isDark,
        isLight: !state.isLight,
        mode: state.mode === 'light' ? 'dark' : 'light',
      };
    default:
      throw new Error(`${action.type} isn’t a valid action`);
  }
}

export const initialThemeState = {
  mode: 'light',
  isLight: true,
  isDark: false,
};

export const ThemeModeContext = createContext('light');
