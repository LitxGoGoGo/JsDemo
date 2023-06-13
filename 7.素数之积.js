function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5));

let num = 27;
let a = -1;
let b = -1;

for (let i = 0; i <= Math.sqrt(num); i++) {
  if (isPrime(i)) {
    if (num % i === 0) {
      if (isPrime(num / i)) {
        a = i;
        b = num / i;
      } else {
        continue;
      }
    } else {
      continue;
    }
  } else {
    continue;
  }
}

console.log(a, b);
