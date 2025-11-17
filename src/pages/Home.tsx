import { useLocale } from '@/contexts/LocaleContext';
import { mockArticles, categories } from '@/data/mockArticles';
import { HeroArticle } from '@/components/HeroArticle';
import { ArticleCard } from '@/components/ArticleCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useLocale();
  
  const featuredArticle = mockArticles.find(a => a.featured);
  const latestArticles = mockArticles.filter(a => !a.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-7xl px-6 py-12 space-y-20">
        {/* Hero Section */}
        {featuredArticle && (
          <section className="animate-fade-in">
            <HeroArticle article={featuredArticle} />
          </section>
        )}

        {/* Latest Articles */}
        <section className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-heading">{t('home.latest')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-heading">{t('home.categories')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="group block p-6 rounded-lg border border-border bg-card shadow-editorial hover:shadow-editorial-hover transition-smooth hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-heading group-hover:text-accent transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;