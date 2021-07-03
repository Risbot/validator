const oneOf =
  (error: string, enumeration: string[]) =>
  (value: string | undefined): string | null => {
    if (value && enumeration.includes(value)) {
      return null;
    }
    return error;
  };

export default oneOf;
