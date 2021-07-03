const minLength =
  (error: string, length: number) =>
  (value: string | undefined): string | null => {
    if (value && value.length >= length) {
      return null;
    }
    return error;
  };

export default minLength;
