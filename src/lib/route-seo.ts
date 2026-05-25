import { siteSeo } from './site-seo';
import { articles, guidePages } from './site-content';

export type RouteSeo = {
  title: string;
  description: string;
  url: string;
  type: 'website' | 'article';
  schemaKind?: 'FAQPage' | 'Article' | 'WebPage';
};

const base = siteSeo.url;

const routeDescriptions: Record<string, Omit<RouteSeo, 'url'>> = {
  '/': {
    title: 'Still Here — record living memory before the window closes',
    description:
      'Still Here helps families record video testimony, family memories, and living history while the person who remembers is still here to speak.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/about': {
    title: 'About Still Here — living memory and genealogy testimony',
    description:
      'Why Still Here exists: to preserve the voice, face, memory, and human context that official family history records were never built to keep.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/family-chain': {
    title: 'The Family Chain — Still Here',
    description:
      'A Still Here family-chain page for thinking about testimony, inheritance, and the living links between ancestors, descendants, and memory.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/faq': {
    title: 'Still Here FAQ — recording family testimony and living memory',
    description:
      'Answers to common questions about Still Here, private family vaults, testimony recording, privacy, ownership, and how families can start.',
    type: 'website',
    schemaKind: 'FAQPage'
  },
  '/how-it-works': {
    title: 'How Still Here works — conversation, recording, archive',
    description:
      'How Still Here helps families prepare a conversation, record a testimony, and preserve it in a private family archive for future generations.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/how-to-ask-without-sounding-morbid': {
    title: 'How to ask for family stories without sounding morbid',
    description:
      'A practical guide to asking a parent, grandparent, or relative for their stories without making the conversation feel like a funeral rehearsal.',
    type: 'article',
    schemaKind: 'Article'
  },
  '/how-to-record-a-home-testimony': {
    title: 'How to record a home testimony — Still Here guide',
    description:
      'A practical guide to recording family testimony at home using a phone, natural light, clear sound, and a calm conversation setup.',
    type: 'article',
    schemaKind: 'Article'
  },
  '/interest': {
    title: 'Register interest — Still Here vault',
    description:
      'Register interest in the Still Here vault, a private family memory archive for testimony, stories, and living history.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/scottish-heritage': {
    title: 'Scottish heritage and living memory — Still Here',
    description:
      'Scottish genealogy has strong records, but records cannot preserve voice, feeling, and family testimony. Still Here helps close that gap.',
    type: 'article',
    schemaKind: 'Article'
  },
  '/privacy': {
    title: 'Privacy — Still Here',
    description:
      'Privacy information for Still Here, the living memory and family testimony platform.',
    type: 'website',
    schemaKind: 'WebPage'
  },
  '/contact': {
    title: 'Contact — Still Here',
    description:
      'Contact Still Here about family testimony, living memory, privacy, partnerships, and archive enquiries.',
    type: 'website',
    schemaKind: 'WebPage'
  }
};

const articleRoutes: Record<string, { title: string; description: string }> = {
  [`/${articles.recordCantTellYou.slug}`]: {
    title: `${articles.recordCantTellYou.title} — Still Here`,
    description: 'A guide to the limits of official family records and why living testimony preserves what documents cannot.'
  },
  [`/${articles.storyIsntSimple.slug}`]: {
    title: `${articles.storyIsntSimple.title} — Still Here`,
    description: 'A guide to complicated family stories, partial testimony, memory, silence, and preserving imperfect accounts with care.'
  },
  [`/${guidePages.whatIfTheyResist.slug}`]: {
    title: `${guidePages.whatIfTheyResist.title} — Still Here`,
    description: 'What to do if a relative resists being interviewed, says there is nothing worth telling, or refuses to be recorded.'
  },
  [`/${guidePages.whenMemoryFragments.slug}`]: {
    title: `${guidePages.whenMemoryFragments.title} — Still Here`,
    description: 'How to record family testimony when memory is partial, contradictory, emotional, or fragmented.'
  },
  [`/${guidePages.questionsForGrandparents.slug}`]: {
    title: `${guidePages.questionsForGrandparents.title} — Still Here`,
    description: 'Practical questions to ask grandparents and older relatives about childhood, place, work, family, hardship, and memory.'
  },
  [`/${guidePages.recordOwnStory.slug}`]: {
    title: `${guidePages.recordOwnStory.title} — Still Here`,
    description: 'A guide to recording your own story for descendants, relatives, and future family historians.'
  },
  [`/${guidePages.familyArchive.slug}`]: {
    title: `${guidePages.familyArchive.title} — Still Here`,
    description: 'What to do with a family archive, photographs, recordings, documents, and inherited stories.'
  }
};

export function getRouteSeo(pathname: string): RouteSeo {
  const path = pathname.replace(/\/$/, '') || '/';
  const article = articleRoutes[path];
  if (article) {
    return {
      title: article.title,
      description: article.description,
      url: `${base}${path}`,
      type: 'article',
      schemaKind: 'Article'
    };
  }
  const match = routeDescriptions[path] ?? routeDescriptions['/'];
  return { ...match, url: path === '/' ? base : `${base}${path}` };
}
