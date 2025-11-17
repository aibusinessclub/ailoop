export const translations = {
  en: {
    nav: {
      home: 'Home',
      categories: 'Categories',
      lab: 'Lab',
      about: 'About',
    },
    home: {
      hero: {
        featured: 'Featured',
      },
      latest: 'Latest Articles',
      categories: 'Explore by Category',
    },
    article: {
      meta: {
        readTime: 'min read',
        author: 'by',
      },
      relatedTitle: 'You might also like',
    },
    category: {
      intro: 'Explore articles in',
    },
    lab: {
      title: 'Lab',
      subtitle: 'Experiments, drafts and raw thoughts',
      tags: {
        idea: 'Idea',
        experiment: 'Experiment',
        note: 'Note',
      },
    },
    about: {
      title: 'About AI Loop',
      mission: 'Our Mission',
      audience: 'Who We Serve',
    },
    ai: {
      title: 'AI Assistant',
      comingSoon: 'Coming soon',
      description: 'The AI assistant will help you:',
      features: {
        summarize: 'Summarize articles',
        translate: 'Translate or simplify content',
        extract: 'Extract action items',
        generate: 'Generate code examples',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      categories: 'Catégories',
      lab: 'Lab',
      about: 'À propos',
    },
    home: {
      hero: {
        featured: 'À la une',
      },
      latest: 'Derniers articles',
      categories: 'Explorer par catégorie',
    },
    article: {
      meta: {
        readTime: 'min de lecture',
        author: 'par',
      },
      relatedTitle: 'Vous aimerez aussi',
    },
    category: {
      intro: 'Explorer les articles dans',
    },
    lab: {
      title: 'Lab',
      subtitle: 'Expériences, brouillons et pensées brutes',
      tags: {
        idea: 'Idée',
        experiment: 'Expérience',
        note: 'Note',
      },
    },
    about: {
      title: 'À propos d\'AI Loop',
      mission: 'Notre mission',
      audience: 'À qui nous nous adressons',
    },
    ai: {
      title: 'Assistant IA',
      comingSoon: 'Bientôt disponible',
      description: 'L\'assistant IA vous aidera à :',
      features: {
        summarize: 'Résumer les articles',
        translate: 'Traduire ou simplifier le contenu',
        extract: 'Extraire les points d\'action',
        generate: 'Générer des exemples de code',
      },
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;