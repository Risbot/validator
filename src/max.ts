const max =
  (error: string, maxValue: number) =>
  (value: string | undefined): string | null => {
    if (value && Number(value) <= maxValue) {
      return null;
    }
    return error;
  };

export default max;
