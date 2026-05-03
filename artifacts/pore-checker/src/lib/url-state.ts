export function encodeIngredients(input: string): string {
  return encodeURIComponent(input);
}

export function decodeIngredients(encoded: string): string {
  try {
    return decodeURIComponent(encoded);
  } catch (e) {
    return "";
  }
}