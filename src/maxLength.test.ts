import maxLength from './maxLength';

describe('maxLength rule', () => {
  test('returns error message when value length are more than maxLength', () => {
    expect(maxLength('error', 5)('value 1')).toEqual('error');
  });

  test('returns null when value length are less than maxLength', () => {
    expect(maxLength('error', 5)('val')).toBe(null);
  });

  test('returns null when value length equal maxLength', () => {
    expect(maxLength('error', 5)('value')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(maxLength('error', 5)(undefined)).toEqual('error');
  });
});
