import integer from './integer';

describe('integer rule', () => {
  test('returns error message when value is not integer', () => {
    expect(integer('error')('value')).toEqual('error');
    expect(integer('error')('10.56')).toEqual('error');
    expect(integer('error')('11-11-2016')).toEqual('error');
  });

  test('returns null when value is integer', () => {
    expect(integer('error')('5')).toEqual(null);
    expect(integer('error')('1234')).toEqual(null);
  });

  test('returns error message when not set value', () => {
    expect(integer('error')(undefined)).toEqual('error');
  });
});
