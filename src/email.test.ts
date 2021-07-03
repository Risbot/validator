import email from './email';

describe('email rule', () => {
  test('returns error message when email is invalid', () => {
    expect(email('error')('tatvard@mail@test.com')).toEqual('error');
    expect(email('error')('tatvard@.test.com')).toEqual('error');
    expect(email('error')('tatvard@mail..test.com')).toEqual('error');
    expect(email('error')('tatvard@mail..ru')).toEqual('error');
  });

  test('returns null when email is valid', () => {
    expect(email('error')('tatvard@mail.ru')).toBe(null);
    expect(email('error')('tatvard@mail.cloud')).toBe(null);
    expect(email('error')('tat.vard@mail.firm.in')).toBe(null);
  });

  test('returns error message when value is not set', () => {
    expect(email('error')(undefined)).toEqual('error');
  });
});
