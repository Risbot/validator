import name from './name';

describe('name rule', () => {
  test('returns error message when name is invalid', () => {
    expect(name('error')('123')).toEqual('error');
    expect(name('error')('Božena1')).toEqual('error');
    expect(name('error')('Božena$')).toEqual('error');
    expect(name('error')('Božena!')).toEqual('error');
  });

  test('returns null when name is valid', () => {
    expect(name('error')('Анатолий')).toEqual(null);
    expect(name('error')('簇扎娜')).toEqual(null);
    expect(name('error')('Phạn')).toEqual(null);
    expect(name('error')('Božena')).toEqual(null);
    expect(name('error')('JEAN-PIERRE')).toEqual(null);
    expect(name('error')('Տիգրան')).toEqual(null);
    expect(name('error')('نسب')).toEqual(null);
    expect(name('error')('J.Mon')).toEqual(null);
    expect(name('error')("J'Mon")).toEqual(null);
  });

  test('returns error message when value is not set', () => {
    expect(name('error')(undefined)).toEqual('error');
  });
});
