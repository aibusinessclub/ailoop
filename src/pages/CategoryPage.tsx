import { useParams } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { mockArticles, categories } from '@/data/mockArticles';
import { ArticleCard } from '@/components/ArticleCard';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLocale();
  
  const category = categories.find(c => c.slug === slug);
  const articles = mockArticles.filter(a => 
    a.category.toLowerCase().replace(/\s+/g, '-').includes(slug || '')
  );

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-7xl px-6 py-12 space-y-12">
        <div className="space-y-4">
          <div className="text-4xl">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-heading">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No articles in this category yet.
          </p>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;