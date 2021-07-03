const required =
  (error: string) =>
  (value: string | undefined): string | null => {
    return value ? null : error;
  };

export default required;
