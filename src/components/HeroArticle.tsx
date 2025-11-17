import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/data/mockArticles';
import { useLocale } from '@/contexts/LocaleContext';
import { CategoryBadge } from './CategoryBadge';

interface HeroArticleProps {
  article: Article;
}

export const HeroArticle = ({ article }: HeroArticleProps) => {
  const { t } = useLocale();

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-editorial hover:shadow-editorial-hover transition-smooth">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--overlay))]/90 via-[hsl(var(--overlay))]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                {t('home.hero.featured')}
              </span>
              <CategoryBadge category={article.category} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight group-hover:text-accent transition-smooth">
              {article.title}
            </h2>
            
            {article.subtitle && (
              <p className="text-lg md:text-xl text-white/90">
                {article.subtitle}
              </p>
            )}
            
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>{article.author}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} {t('article.meta.readTime')}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-accent transition-smooth">
              <span>Read article</span>
              <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};