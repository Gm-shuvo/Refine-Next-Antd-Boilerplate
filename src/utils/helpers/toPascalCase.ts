/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @return {string} - The converted PascalCase string.
 */
export function toPascalCase(str : string): string {
  return str
    .replace(/(\w)(\w*)/g, (_, firstChar, restChars) => 
      firstChar.toUpperCase() + restChars.toLowerCase()
    )
    .replace(/\s+/g, '');
}