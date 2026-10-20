const arr = [0, 1, 5, 10, 13, 12, 5, 15, 2, NaN, null];

let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (typeof item === 'number' && !Number.isNaN(item)) {
    if (item === 0) zero++;
    else if (item % 2 === 0) even++;
    else odd++;
  }
}

console.log('Чётных: ' + even);
console.log('Нечётных: ' + odd);
console.log('Нулевых: ' + zero);


