import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-editorial-border hover:bg-white/10 transition-colors text-editorial-text flex items-center justify-center"
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-editorial-accent" />
      ) : (
        <Moon className="w-4 h-4 text-editorial-accent" />
      )}
    </button>
  );
}
