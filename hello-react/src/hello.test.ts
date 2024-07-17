import { describe, expect, test } from 'vitest';
import { hello } from './hello';

describe('hello function', () => {
  test('returns Hello Romain', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });

  test('doesn\'t throw', () => {
    // hello('Romain');
    expect(() => hello('Romain')).not.toThrow();
  });

  test('does throw', () => {
    expect(() => hello('')).toThrow();
  });
});
