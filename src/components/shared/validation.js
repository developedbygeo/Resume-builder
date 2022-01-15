const currentDate = new Date();
const nameRegex = /^[a-z]{2,50}/i;
const textRegex = /^[a-z0-9]{50,}/i;
const generalRegex = /^[\w\W]{2,}$/i;
const postalRegex = /^[a-z0-9]{2,}/i;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
const phoneRegex = /^[0-9]{5,}$/;
const linkedInRegex = /^in\/[\w]+[\S]+$/;
const validDateStart = currentDate.getFullYear() - 90;
const validDateEnd = currentDate.getFullYear() + 10;

export const validation = {
  validateGeneric: (string) => nameRegex.test(string),
  validateText: (string) => textRegex.test(string),
  validatePostal: (string) => postalRegex.test(string),
  validateEmail: (string) => emailRegex.test(string),
  validatePhone: (string) => phoneRegex.test(string),
  validateLinkedIn: (string) => linkedInRegex.test(string),
  validateTextNumbers: (string) => generalRegex.test(string),
  validateStartingDate: (year) => validDateStart >= year,
  validateEndingDate: (year) => validDateEnd <= year,
};

export const errors = {
  errorGeneric: (field) => `Please provide a valid ${field}.`,
  errorPersonalStatement:
    'Your personal statement has to be at least 50 characters long.',
  errorPostal:
    'Postal codes should consist of at least 2 characters and/or numbers.',
  errorEmail: 'Please make sure your email contains "@" and a valid domain.',
  errorLinkedin: 'Please make sure the url format is: in/example',
  errorJobTitle:
    'Please provide a valid job title consisting of at least 2 characters.',
  errorDateFrom: 'Maximum range exceeded - please provide a correct date',
  errorDateTo: 'The end date cannot be past the starting date',
  errorDescription: 'A description is required. Please provide one.',
};
