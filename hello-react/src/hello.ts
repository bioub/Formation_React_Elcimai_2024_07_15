export function hello(name: string) {
  if (name === '') {
    throw new Error('name can\'t be empty');
  }

  return `Hello ${name}`;
}
