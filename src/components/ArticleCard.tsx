import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Article } from '@/data/mockArticles';
import { useLocale } from '@/contexts/LocaleContext';
import { CategoryBadge } from './CategoryBadge';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { t } = useLocale();

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group block transition-smooth hover:-translate-y-1"
    >
      <article className="h-full overflow-hidden rounded-lg border border-border bg-card shadow-editorial hover:shadow-editorial-hover transition-smooth">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 space-y-3">
          <CategoryBadge category={article.category} />
          
          <h3 className="text-xl font-semibold leading-tight text-heading group-hover:text-accent transition-smooth">
            {article.title}
          </h3>
          
          <p className="text-sm text-body line-clamp-2">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-meta">
            <span>{article.author}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime} {t('article.meta.readTime')}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};