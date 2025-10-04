// generates an array of random numbers (0–9)
export function genTicket(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

// calculates sum of an array
export function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
