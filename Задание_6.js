const arr = [true, false, 0, 1, undefined, null];

let allSame = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    allSame = false;
    break;
  }
}

console.log(allSame);
