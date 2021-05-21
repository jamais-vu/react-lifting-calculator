/** Formats the given decimal `n` as a percent, to 2 digits. */
export function formatAsPercent(n) {
  return `${Math.round(n * 100)}%`;
}