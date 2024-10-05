// shared/validate/regexes.ts

export const nameValidator = (val: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(val);
export const emailValidator = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
