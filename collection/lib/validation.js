export const isValidEmail = str => /(^[^@][a-z0-9-_.]+)(@{1})([a-z0-9-_]+[^@])(\.{1})([a-z0-9]+[^@])/i.test(str);
