export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

const translations = {
  zh: {
    'nav.index': '首页',
    'nav.posts': '文章',
    'hero.greeting': '你好。',
    'hero.desc': '程序员的日常 — 代码、思考、以及之间的一切。',
    'section.recent': '最新',
    'link.allPosts': '全部文章 →',
    'posts.title': '文章',
    'post.back': '← 返回',
  },
  en: {
    'nav.index': 'Index',
    'nav.posts': 'Posts',
    'hero.greeting': 'Hello.',
    'hero.desc': "A developer's journal — code, thoughts, and things in between.",
    'section.recent': 'Recent',
    'link.allPosts': 'All posts →',
    'posts.title': 'Posts',
    'post.back': '← Back',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['zh'];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return translations[lang][key];
  };
}

export const dateLocales: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en-US',
};
