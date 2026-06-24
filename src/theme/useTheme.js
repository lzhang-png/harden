import { useCallback, useEffect, useState } from 'react';
import { applyTheme, getPreferredTheme, getTheme, toggleTheme as flipTheme } from './theme';

export function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(flipTheme());
  }, []);

  const setThemeMode = useCallback((next) => {
    if (next === 'light' || next === 'dark') {
      applyTheme(next);
      setTheme(next);
    }
  }, []);

  return { theme, toggleTheme, setTheme: setThemeMode, isDark: theme === 'dark' };
}

export function useThemeSnapshot() {
  return getTheme();
}
