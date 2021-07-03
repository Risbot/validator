const match =
  <T>(error: string, field: keyof T) =>
  (value: string | undefined, values: { [K in keyof T]: string | undefined }): string | null => {
    if (value === values[field]) {
      return null;
    }
    return error;
  };

export default match;
