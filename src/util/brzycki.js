/** Calculates estimated one-rep max using the Brzycki formula. */
export function brzycki(reps, weight) {
  return (weight / ((37 / 36) - (reps / 36)));
}