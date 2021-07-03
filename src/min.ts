const min =
  (error: string, minValue: number) =>
  (value: string | undefined): string | null => {
    if (value && Number(value) >= minValue) {
      return null;
    }
    return error;
  };

export default min;
