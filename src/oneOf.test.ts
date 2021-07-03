import oneOf from './oneOf';

describe('oneOf rule', () => {
  test('returns error message when value is not exist in collection', () => {
    expect(oneOf('error', ['val1', 'val2'])('val3')).toEqual('error');
  });

  test('returns null when value is contains in collection', () => {
    expect(oneOf('error', ['val1', 'val2'])('val1')).toEqual(null);
  });

  test('returns error message when value is not set', () => {
    expect(oneOf('error', [])(undefined)).toEqual('error');
  });
});
