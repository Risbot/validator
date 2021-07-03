const name =
  (error: string) =>
  (value: string | undefined): string | null => {
    if (value && /^[\p{L}'.-]+$/u.test(value)) {
      return null;
    }
    return error;
  };

export default name;
