export const currentDate = new Date();
export const currentYear = currentDate.getFullYear();
export const currentMonth =
  currentDate.getMonth() === 0
    ? '01'
    : currentDate.getMonth() < 10
    ? `0${currentDate.getMonth()}`
    : currentDate.getMonth();
export const currentDay =
  currentDate.getDate() < 10
    ? `0${currentDate.getDate()}`
    : currentDate.getDate();

const nameRegex = /^[a-z]{2,50}$/i;
const textareaRegex = /^[a-z0-9\W]{50,}$/i;
const generalRegex = /^[\w\W]{2,}$/i;
const optionalRegex = /^[\w\W]{0,200}$/i;
const textAndWhitespaceRegex = /^[a-z0-9\s]{2,}$/i;
const postalRegex = /^[a-z0-9]{2,}$/i;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
const phoneRegex = /^[0-9]{5,}$/;
const linkedInRegex = /^in\/[\w]+[\S]+$/;

export const validation = {
  validateGeneric: (string) => nameRegex.test(string),
  validateText: (string) => textareaRegex.test(string),
  validatePostal: (string) => postalRegex.test(string),
  validateEmail: (string) => emailRegex.test(string),
  validatePhone: (string) => phoneRegex.test(string),
  validateLinkedIn: (string) => linkedInRegex.test(string),
  validateTextNumbers: (string) => generalRegex.test(string),
  validatetextAndSpaces: (string) => textAndWhitespaceRegex.test(string),
  validateOptional: (string) => optionalRegex.test(string),
  validateStartingDate: (date) => currentDate > new Date(date),
  validateEndingDate: (date) =>
    date === '' || +currentYear + 6 > new Date(date).getFullYear()
      ? true
      : false,
};

export const errors = {
  errorGeneric: (field) => `Please provide a valid ${field}.`,
  errorTextarea: (field) =>
    `Your ${field} has to be at least 50 characters long.`,
  errorPostal:
    'Postal codes should consist of at least 2 characters and/or numbers. Spaces are not allowed.',
  errorEmail: 'Please make sure your email contains "@" and a valid domain.',
  errorLinkedin: 'Please make sure the url format is: in/example',
  errorJobTitle:
    'Please provide a valid job title consisting of at least 2 characters.',
  errorSchoolDesc: 'The education description may be up to 200 characters.',
  errorDateFrom: 'Maximum range exceeded - please provide a correct date.',
  errorDateTo:
    'The end date cannot surpass the current year by 6 or more years.',
  errorDescription: 'A description is required. Please provide one.',
};
