export function parsePascalCase(str: string): string[] {
  return str.split(/(?=[A-Z])/g);
}
