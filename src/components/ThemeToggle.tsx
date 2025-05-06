import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;