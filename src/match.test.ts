import match from './match';

describe('match rule', () => {
  test('returns error message when another field with name "field" not equal with current field', () => {
    expect(match('error', 'field')('10', { field: '1' })).toEqual('error');
  });

  test('returns null when another field with name "field" equal with current field', () => {
    expect(match('error', 'field')('10', { field: '10' })).toEqual(null);
  });
});
