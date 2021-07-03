import birthdayRule from './birthday';
import { createValidator, Errors, Fields, Option } from './createValidator';
import emailRule from './email';
import integerRule from './integer';
import matchRule from './match';
import maxRule from './max';
import maxLengthRule from './maxLength';
import minRule from './min';
import minLengthRule from './minLength';
import nameRule from './name';
import oneOfRule from './oneOf';
import requiredRule from './required';

export type ValidatorErrors<T> = Errors<T>;

export type ValidatorFields<T> = Fields<T>;

export type ValidatorOption<T> = Option<T>;

export {
  birthdayRule,
  createValidator,
  emailRule,
  integerRule,
  matchRule,
  maxRule,
  maxLengthRule,
  minRule,
  minLengthRule,
  nameRule,
  oneOfRule,
  requiredRule,
};
