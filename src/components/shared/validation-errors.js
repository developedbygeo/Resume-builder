const errors = {
  errorGeneric: (value) => `Please provide a valid ${value}`,
  errorPersonalStatement:
    'Your personal statement has to be at least 50 characters long.',
  errorPostal: 'Postal codes consist of at least 2 characters.',
  errorEmail: 'Please make sure your email contains "@" and a valid domain.',
  errorLinkedin: 'Please make sure the url format is: in/example.',
  errorJobTitle:
    'Please provide a valid job title consisting of at least 2 characters.',
  errorDateFrom: 'Maximum range exceeded - please provide a correct date',
  errorDateTo: 'The end date cannot be past the starting date',
  errorDescription: 'A description is required. Please provide one.',
};

export default errors;
