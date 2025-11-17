import { Link } from 'react-router-dom';
import { categories } from '@/data/mockArticles';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-7xl px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-heading">Categories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore articles organized by topics that matter to developers, designers, and tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group block p-8 rounded-xl border border-border bg-card shadow-editorial hover:shadow-editorial-hover transition-smooth hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="text-4xl">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-heading group-hover:text-accent transition-smooth">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent">
                  <span>View articles</span>
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;