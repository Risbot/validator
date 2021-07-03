const maxLength =
  (error: string, lenght: number) =>
  (value: string | undefined): string | null => {
    if (value && value.length <= lenght) {
      return null;
    }
    return error;
  };

export default maxLength;
