import { createValidator } from './createValidator';
import required from './required';
import integer from './integer';

describe('createValidator', () => {
  test('returns empty error array when not have rules', () => {
    const validator = createValidator({
      Field: [],
    });

    const errors = validator({ Field: undefined });

    expect(errors.Field).toEqual([]);
  });

  test('returns all error messages from all rules when value is not set', () => {
    const validator = createValidator({
      Field: [required('required error'), integer('integer error')],
    });

    const errors = validator({ Field: undefined });

    expect(errors.Field).toEqual(['required error', 'integer error']);
  });

  test('returns error messages from rules for which the value is invalid', () => {
    const validator = createValidator({
      Field: [required('required error'), integer('integer error')],
    });

    const errors = validator({ Field: 'value' });

    expect(errors.Field).toEqual(['integer error']);
  });
});
