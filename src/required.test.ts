import required from './required';

describe('required rule', () => {
  test('returns null when value is set', () => {
    expect(required('error')('value')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(required('error')(undefined)).toEqual('error');
  });
});
