// Chooses a random element from the given array.
export default function oneOf<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
