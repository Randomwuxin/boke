import type { Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang === 'en' ? 'en' : 'zh';
}

export function getLocalePath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|zh)/, '').replace(/^\/+/, '/');
  return lang === 'zh' ? cleanPath : `/en${cleanPath}`;
}

export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const otherLang: Lang = lang === 'zh' ? 'en' : 'zh';
  return getLocalePath(url.pathname, otherLang);
}
