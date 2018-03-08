// returns 0 or 1
export function rand(dead) {
  return dead ? 0 : Math.floor(Math.random() * 2);
}