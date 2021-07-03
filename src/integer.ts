const integer =
  (error: string) =>
  (value: string | undefined): string | null => {
    if (value && /^[0-9]*$/.test(value)) {
      return null;
    }
    return error;
  };

export default integer;
