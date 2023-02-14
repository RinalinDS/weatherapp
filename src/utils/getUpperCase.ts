export const getUpperCase = (string: string) =>
  string
    .split(' ')
    .map(m => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase())
    .join(' ');
