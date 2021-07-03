const birthday =
  (error: string, minAge: number, maxAge: number) =>
  (value: string | undefined): string | null => {
    if (value) {
      const birthdayDate = new Date(value);
      const currentDate = new Date();
      const ageDate = new Date(currentDate.getTime() - birthdayDate.getTime());
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age >= minAge && age <= maxAge) {
        return null;
      }
    }
    return error;
  };

export default birthday;
