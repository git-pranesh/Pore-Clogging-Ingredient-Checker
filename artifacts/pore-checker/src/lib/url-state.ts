// URLSearchParams handles percent-encoding internally on both sides:
// `params.set("ings", raw)` percent-encodes when serialized, and
// `params.get("ings")` percent-decodes the raw value on read.
// We additionally pass user input through encodeURIComponent on the
// write side because we build query strings via plain concatenation in
// some spots (e.g., `?ings=...` links), so the value must arrive at
// URLSearchParams already safe. On the read side URLSearchParams has
// already decoded once, so decodeIngredients is intentionally a no-op
// pass-through; calling decodeURIComponent again would crash on inputs
// containing a literal "%" (e.g., "2% salicylic acid").
export function encodeIngredients(input: string): string {
  return encodeURIComponent(input);
}

export function decodeIngredients(valueFromURLSearchParams: string): string {
  return valueFromURLSearchParams;
}