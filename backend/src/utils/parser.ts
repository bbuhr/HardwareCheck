export function parsePrice(value: string) {
  return Number(
    value
      .replace(/[R$\\.]/g, '')
      .replace(',', '.')
      .trim()
  );
}