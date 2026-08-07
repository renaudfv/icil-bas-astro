export const ui = {
  en: {
    "nav.about": "About",
    "post.readMore": "Read more",
  },
  fr: {
    "nav.about": "À propos",
    "post.readMore": "Lire la suite",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)["en"]) {
    return ui[lang][key] ?? ui.en[key];
  };
}
