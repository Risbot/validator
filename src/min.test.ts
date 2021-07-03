import min from './min';

describe('min rule', () => {
  test('returns error message when value is less then minValue', () => {
    expect(min('error', 5)('2')).toEqual('error');
  });

  test('returns null when value equal minValue', () => {
    expect(min('error', 5)('5')).toEqual(null);
  });

  test('returns null when value is more then minValue', () => {
    expect(min('error', 5)('20')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(min('error', 5)(undefined)).toEqual('error');
  });
});
