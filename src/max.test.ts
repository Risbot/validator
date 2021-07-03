import max from './max';

describe('max rule', () => {
  test('returns error message when value is more then maxValue', () => {
    expect(max('error', 5)('10')).toEqual('error');
  });

  test('returns null when value equal maxValue', () => {
    expect(max('error', 5)('5')).toEqual(null);
  });

  test('returns null when value is less then maxValue', () => {
    expect(max('error', 5)('2')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(max('error', 5)(undefined)).toEqual('error');
  });
});
