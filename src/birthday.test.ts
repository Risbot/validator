import birthday from './birthday';

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2000-01-02T00:00:00Z'));
});

afterEach(() => {
  jest.useRealTimers();
});

describe('birthday rule', () => {
  test('returns error message when age is more than maximum', () => {
    expect(birthday('error', 10, 100)('1.1.1899')).toEqual('error');
    expect(birthday('error', 10, 100)('01.01.1899')).toEqual('error');
    expect(birthday('error', 10, 100)('1/1/1899')).toEqual('error');
    expect(birthday('error', 10, 100)('01/01/1899')).toEqual('error');
    expect(birthday('error', 10, 100)('1-1-1899')).toEqual('error');
    expect(birthday('error', 10, 100)('1899-01-01')).toEqual('error');
    expect(birthday('error', 10, 100)('1899.01.01')).toEqual('error');
    expect(birthday('error', 10, 100)('1899/01/01')).toEqual('error');
  });

  test('returns error message when age is less than minimum', () => {
    expect(birthday('error', 10, 100)('1.1.1991')).toEqual('error');
    expect(birthday('error', 10, 100)('01.01.1991')).toEqual('error');
    expect(birthday('error', 10, 100)('1/1/1991')).toEqual('error');
    expect(birthday('error', 10, 100)('01/01/1991')).toEqual('error');
    expect(birthday('error', 10, 100)('1-1-1991')).toEqual('error');
    expect(birthday('error', 10, 100)('1991-01-01')).toEqual('error');
    expect(birthday('error', 10, 100)('1991.01.01')).toEqual('error');
    expect(birthday('error', 10, 100)('1991/01/01')).toEqual('error');
  });

  test('returns null when age equal maximum', () => {
    expect(birthday('error', 10, 100)('1.1.1900')).toEqual(null);
    expect(birthday('error', 10, 100)('01.01.1900')).toEqual(null);
    expect(birthday('error', 10, 100)('1/1/1900')).toEqual(null);
    expect(birthday('error', 10, 100)('01/01/1900')).toEqual(null);
    expect(birthday('error', 10, 100)('1-1-1900')).toEqual(null);
    expect(birthday('error', 10, 100)('1900-01-01')).toEqual(null);
    expect(birthday('error', 10, 100)('1900.01.01')).toEqual(null);
    expect(birthday('error', 10, 100)('1900/01/01')).toEqual(null);
  });

  test('returns null when age equal minimum', () => {
    expect(birthday('error', 10, 100)('1.1.1990')).toEqual(null);
    expect(birthday('error', 10, 100)('01.01.1990')).toEqual(null);
    expect(birthday('error', 10, 100)('1/1/1990')).toEqual(null);
    expect(birthday('error', 10, 100)('01/01/1990')).toEqual(null);
    expect(birthday('error', 10, 100)('1-1-1990')).toEqual(null);
    expect(birthday('error', 10, 100)('1990-01-01')).toEqual(null);
    expect(birthday('error', 10, 100)('1990.01.01')).toEqual(null);
    expect(birthday('error', 10, 100)('1990/01/01')).toEqual(null);
  });

  test('returns null when age is middle of range', () => {
    expect(birthday('error', 10, 100)('1.1.1950')).toEqual(null);
    expect(birthday('error', 10, 100)('01.01.1950')).toEqual(null);
    expect(birthday('error', 10, 100)('1/1/1950')).toEqual(null);
    expect(birthday('error', 10, 100)('01/01/1950')).toEqual(null);
    expect(birthday('error', 10, 100)('1-1-1950')).toEqual(null);
    expect(birthday('error', 10, 100)('1950-01-01')).toEqual(null);
    expect(birthday('error', 10, 100)('1950.01.01')).toEqual(null);
    expect(birthday('error', 10, 100)('1950/01/01')).toEqual(null);
  });

  test('returns error message when value is not set', () => {
    expect(birthday('error', 10, 100)(undefined)).toEqual('error');
  });
});
