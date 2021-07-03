import minLength from './minLength';

describe('minLength rule', () => {
  test('returns error message when value length are less than minLength', () => {
    expect(minLength('error', 5)('val')).toEqual('error');
  });

  test('returns null when value length are more than minLength', () => {
    expect(minLength('error', 5)('value 1')).toBe(null);
  });

  test('returns null when value length equal minLength', () => {
    expect(minLength('error', 5)('value')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(minLength('error', 5)(undefined)).toEqual('error');
  });
});
