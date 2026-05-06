import { describe, expect, it } from 'vitest';

import { primaryNavigationLinks } from './site-navigation';

describe('primary navigation links', () => {
  it('exposes the core Still Here navigation set', () => {
    expect(primaryNavigationLinks).toEqual([
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/scottish-heritage', label: 'Scottish heritage' },
      { href: '/faq', label: 'FAQ' }
    ]);
  });
});
