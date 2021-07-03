export type Fields<T> = { [K in keyof T]: string | undefined };
export type Errors<T> = { [K in keyof T]: Array<string> };
export type Option<T> = {
  [K in keyof T]: Array<(value: string | undefined, values: Fields<T>) => string | null>;
};

export const createValidator = <T>(option: Option<T>) => {
  return (values: Fields<T>): Errors<T> => {
    const result: Errors<T> = {} as Errors<T>;
    for (const key in option) {
      const errors = option[key]
        .map(rule => rule(values[key], values))
        .filter(error => error !== null) as Array<string>;
      result[key] = errors;
    }
    return result;
  };
};
