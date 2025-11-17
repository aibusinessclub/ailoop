import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, MessageSquare } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AIAssistantDock } from './AIAssistantDock';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const location = useLocation();
  const [showAI, setShowAI] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-semibold tracking-tight text-heading">
                AI L<span className="inline-block rounded-full border-2 border-accent w-6 h-6 -mx-0.5" />op
              </div>
            </Link>

            <nav className="hidden md:flex gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-smooth ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-heading'
                    : 'text-muted-foreground hover:text-heading'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/categories"
                className={`text-sm font-medium transition-smooth ${
                  isActive('/categories') || isActive('/category')
                    ? 'text-heading'
                    : 'text-muted-foreground hover:text-heading'
                }`}
              >
                {t('nav.categories')}
              </Link>
              <Link
                to="/lab"
                className={`text-sm font-medium transition-smooth ${
                  isActive('/lab')
                    ? 'text-heading'
                    : 'text-muted-foreground hover:text-heading'
                }`}
              >
                {t('nav.lab')}
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-smooth ${
                  isActive('/about')
                    ? 'text-heading'
                    : 'text-muted-foreground hover:text-heading'
                }`}
              >
                {t('nav.about')}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 transition-smooth ${
                  locale === 'en' ? 'text-heading font-medium' : 'text-muted-foreground hover:text-heading'
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLocale('fr')}
                className={`px-2 py-1 transition-smooth ${
                  locale === 'fr' ? 'text-heading font-medium' : 'text-muted-foreground hover:text-heading'
                }`}
              >
                FR
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-smooth"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAI(true)}
              className="gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Assistant</span>
            </Button>
          </div>
        </div>
      </header>

      <AIAssistantDock isOpen={showAI} onClose={() => setShowAI(false)} />
    </>
  );
};