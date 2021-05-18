/** Calculates estimated one-rep max using the Epley formula. */
export function epley1RM(reps, weight) {
  if (reps === 1) {
    return weight;
  } else {
    return (weight * (1 + (reps / 30)));
  }
}