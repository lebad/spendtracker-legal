(() => {
  'use strict';
  const supported = ['en', 'ru', 'sr-Latn'];
  const storageKey = 'spendtracker-legal-language';
  const normalize = value => {
    const base = String(value || '').toLowerCase().split(/[-_]/)[0];
    return base === 'sr' ? 'sr-Latn' : supported.includes(base) ? base : null;
  };
  let saved;
  try { saved = localStorage.getItem(storageKey); } catch (_) {}
  const preferred = normalize(saved) || (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  const sections = [...document.querySelectorAll('[data-language]')];
  const buttons = [...document.querySelectorAll('[data-select-language]')];
  const apply = language => {
    sections.forEach(section => { section.hidden = section.dataset.language !== language; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.selectLanguage === language)));
    const active = sections.find(section => section.dataset.language === language);
    document.documentElement.lang = language;
    document.title = active.dataset.title;
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const language = button.dataset.selectLanguage;
    apply(language);
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    try {
      const current = new URL(location.href);
      current.searchParams.set('lang', language);
      history.replaceState(null, '', current.href);
    } catch (_) {}
    // Carry the selection between pages even when browser storage is unavailable.
    document.querySelectorAll('a[data-local-page]').forEach(link => {
      const url = new URL(link.href);
      url.searchParams.set('lang', language);
      link.href = url.href;
    });
  }));
  const requested = normalize(new URL(location.href).searchParams.get('lang'));
  const language = requested || preferred;
  apply(language);
  document.querySelectorAll('a[data-local-page]').forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.href;
  });
  document.querySelector('.language-switcher').hidden = false;
})();
