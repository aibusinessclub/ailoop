import { useLocale } from '@/contexts/LocaleContext';
import { labEntries } from '@/data/mockArticles';

const Lab = () => {
  const { t } = useLocale();

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'experiment':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'idea':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'note':
        return 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-4xl px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-heading">{t('lab.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('lab.subtitle')}
          </p>
        </header>

        <div className="space-y-6">
          {labEntries.map((entry) => (
            <article
              key={entry.id}
              className="p-6 rounded-lg border border-border bg-card shadow-editorial hover:shadow-editorial-hover transition-smooth"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(entry.tag)}`}>
                    {t(`lab.tags.${entry.tag}`)}
                  </span>
                  <span className="text-sm text-meta">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-heading">
                  {entry.title}
                </h2>
                
                <p className="text-body">
                  {entry.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Lab;