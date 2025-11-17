import { useLocale } from '@/contexts/LocaleContext';

const About = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <main className="container mx-auto max-w-4xl px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-heading">{t('about.title')}</h1>
        </header>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-heading">{t('about.mission')}</h2>
            <p className="text-body leading-relaxed">
              AI Loop exists to curate high-quality tech, development, and AI news for serious readers. 
              We filter the noise and highlight only meaningful stories, tools, and trends that matter 
              to developers, designers, and tech enthusiasts.
            </p>
            <p className="text-body leading-relaxed">
              Our approach is simple: we make complex topics accessible without hype or excessive jargon. 
              Every article provides context, implications, and practical insights you can use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-heading">{t('about.audience')}</h2>
            <p className="text-body leading-relaxed">
              AI Loop serves a global community of professionals and enthusiasts:
            </p>
            <ul className="space-y-2 text-body">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Developers & software engineers seeking practical insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>AI/ML practitioners staying current with the field</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Tech product builders and founders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Designers & UX professionals in tech</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>Tech-curious professionals expanding their knowledge</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-heading">Why Bilingual?</h2>
            <p className="text-body leading-relaxed">
              We bridge English-speaking and French-speaking audiences because great ideas and 
              insights shouldn't be limited by language. Our bilingual approach serves global 
              tech communities, with particular emphasis on connecting Africa, Europe, and beyond.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-heading">The AI Loop Philosophy</h2>
            <p className="text-body leading-relaxed">
              The name "AI Loop" represents our belief in continuous learning and iteration. 
              Technology, especially AI, evolves through cycles of discovery, understanding, 
              application, and refinement. We're here to help you navigate each turn of that loop 
              with clarity and confidence.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;