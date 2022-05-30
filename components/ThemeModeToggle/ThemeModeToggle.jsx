import Button from 'components/Button/Button';
import { useCallback, useReducer } from 'react';

function themeStateReducer(_state, action) {
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
    default:
      throw new Error(`${action.type} isn’t a valid action`);
  }
}

const getInitialThemeState = (themeMode) =>
  themeMode === 'light'
    ? {
        mode: 'light',
        isLight: true,
        isDark: false,
      }
    : {
        mode: 'dark',
        isLight: false,
        isDark: true,
      };

function ThemeModeToggle() {
  const [themeState, dispatchThemeStateAction] = useReducer(
    themeStateReducer,
    getInitialThemeState(document.documentElement.dataset.theme)
  );

  const toggleThemeMode = useCallback(() => {
    const targetTheme = themeState.mode === 'light' ? 'dark' : 'light';

    dispatchThemeStateAction({ type: targetTheme });
    document.documentElement.dataset.theme = targetTheme;
    window.localStorage.setItem('theme-mode', targetTheme);
  }, [themeState.mode]);

  return (
    <Button
      aria-label="Dark theme"
      aria-pressed={themeState.isDark}
      onClick={toggleThemeMode}
    >
      {themeState.isDark ? (
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0z" />
        </svg>
      ) : (
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.414-1.414zM14 7h2v2h-2zM12.95 14.433l-1.415-1.414 1.414-1.414 1.415 1.413zM7 14h2v2H7zM2.98 14.363 1.566 12.95l1.415-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.707 4.465 3.12 3.05 4.535 1.636 3.121z" />
          <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
        </svg>
      )}
    </Button>
  );
}

export default ThemeModeToggle;
