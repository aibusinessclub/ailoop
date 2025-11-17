export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: number;
  content?: string;
  featured?: boolean;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'future-of-ai-agents',
    title: 'The Future of AI Agents in Software Development',
    subtitle: 'How autonomous AI is reshaping the way we build products',
    excerpt: 'AI agents are moving beyond simple automation into full development partners. We explore what this means for the future of software engineering.',
    category: 'AI',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: 8,
    featured: true,
    content: `AI agents are transforming software development at an unprecedented pace. What started as simple code completion tools has evolved into sophisticated systems capable of understanding context, generating entire features, and even debugging complex issues.
    
## The Rise of Autonomous Development

The shift from assistive AI to autonomous agents marks a fundamental change in how we approach software creation. These systems can now:

- Understand project architecture and patterns
- Generate production-ready code with minimal guidance
- Handle refactoring and optimization tasks
- Collaborate with human developers in real-time

## Implications for Developers

This transformation doesn't mean the end of human developers—instead, it elevates the role. Developers become architects and product thinkers, focusing on higher-level problems while AI handles implementation details.`,
  },
  {
    id: '2',
    slug: 'react-server-components-explained',
    title: 'React Server Components: A Deep Dive',
    excerpt: 'Understanding the paradigm shift in React\'s architecture and what it means for your applications.',
    category: 'Dev Tools',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    author: 'Michael Torres',
    date: '2024-01-12',
    readTime: 12,
  },
  {
    id: '3',
    slug: 'designing-for-ai-interfaces',
    title: 'Designing for AI-First Interfaces',
    excerpt: 'UX patterns and principles for building intuitive AI-powered applications.',
    category: 'Design',
    coverImage: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=600&fit=crop',
    author: 'Emma Williams',
    date: '2024-01-10',
    readTime: 6,
  },
  {
    id: '4',
    slug: 'serverless-edge-computing',
    title: 'The Edge Computing Revolution',
    excerpt: 'How edge functions are changing the landscape of serverless architecture.',
    category: 'Cloud',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    author: 'David Park',
    date: '2024-01-08',
    readTime: 10,
  },
  {
    id: '5',
    slug: 'startup-ai-tools-2024',
    title: 'Essential AI Tools for Startups in 2024',
    excerpt: 'A curated list of AI tools that can help startups move faster and smarter.',
    category: 'Startups',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
    author: 'Lisa Martinez',
    date: '2024-01-05',
    readTime: 7,
  },
  {
    id: '6',
    slug: 'typescript-5-features',
    title: 'TypeScript 5.0: What You Need to Know',
    excerpt: 'Exploring the latest features and improvements in TypeScript 5.0.',
    category: 'Dev Tools',
    coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop',
    author: 'James Kim',
    date: '2024-01-03',
    readTime: 9,
  },
];

export const categories = [
  { slug: 'ai', name: 'AI & Machine Learning', icon: '🤖', description: 'Latest in artificial intelligence and ML' },
  { slug: 'dev-tools', name: 'Developer Tools', icon: '🛠️', description: 'Frameworks, libraries, and dev tools' },
  { slug: 'design', name: 'Design & UX', icon: '🎨', description: 'UI/UX trends and best practices' },
  { slug: 'cloud', name: 'Cloud & Infrastructure', icon: '☁️', description: 'Cloud platforms and architecture' },
  { slug: 'startups', name: 'Startups & Products', icon: '🚀', description: 'Building and scaling products' },
];

export const labEntries = [
  {
    id: 'lab-1',
    title: 'Experimenting with LLM context windows',
    date: '2024-01-14',
    tag: 'experiment',
    excerpt: 'Testing different approaches to maximize context utilization in long-form content generation.',
  },
  {
    id: 'lab-2',
    title: 'Idea: AI-powered code review assistant',
    date: '2024-01-10',
    tag: 'idea',
    excerpt: 'Concept for an assistant that understands project patterns and provides contextual review comments.',
  },
  {
    id: 'lab-3',
    title: 'Notes on building bilingual content systems',
    date: '2024-01-07',
    tag: 'note',
    excerpt: 'Reflections on managing translations, routing, and SEO for multilingual sites.',
  },
];