import { X, Sparkles } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from './ui/button';

interface AIAssistantDockProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistantDock = ({ isOpen, onClose }: AIAssistantDockProps) => {
  const { t } = useLocale();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[hsl(var(--overlay))]/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl transition-smooth">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold">{t('ai.title')}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 p-6 space-y-6">
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
              <p className="text-sm font-medium text-accent mb-2">{t('ai.comingSoon')}</p>
              <p className="text-sm text-muted-foreground">
                {t('ai.description')}
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-body">{t('ai.features.summarize')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-body">{t('ai.features.translate')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-body">{t('ai.features.extract')}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-body">{t('ai.features.generate')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};