import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { mockArticles } from '@/data/mockArticles';
import { CategoryBadge } from '@/components/CategoryBadge';
import { ArticleCard } from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLocale();
  
  const article = mockArticles.find(a => a.slug === slug);
  const relatedArticles = mockArticles
    .filter(a => a.id !== article?.id && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Article not found</p>
          <Button asChild variant="outline">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <article className="container mx-auto max-w-4xl px-6 py-12 space-y-12">
        <Button variant="ghost" asChild className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>

        <header className="space-y-6">
          <CategoryBadge category={article.category} />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-xl text-muted-foreground">
              {article.subtitle}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-sm text-meta border-t border-b border-border py-4">
            <span className="font-medium">{t('article.meta.author')} {article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} {t('article.meta.readTime')}</span>
            </div>
          </div>
        </header>

        <div className="aspect-[21/9] overflow-hidden rounded-xl">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content ? (
            <div className="space-y-6 text-body leading-relaxed">
              {article.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={i} className="text-2xl font-semibold text-heading mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={i} className="ml-6">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>
          ) : (
            <p className="text-body">{article.excerpt}</p>
          )}
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6 py-16 space-y-8">
            <h2 className="text-3xl font-bold text-heading">{t('article.relatedTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;