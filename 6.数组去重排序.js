let str = '1,3,3,3,2,4,4,4,5';

const arr = str.split(',').map((i) => Number(i));
let tempArr = arr.slice();

arr.sort((a, b) => {
  return a - b;
});
// console.log(arr);

const myMap = new Map();

for (const item of arr) {
  myMap.get(item) ? myMap.set(item, myMap.get(item) + 1) : myMap.set(item, 1);
}
console.log(myMap);

let max;

// console.log(myMap.keys());
// console.log(tempArr);
tempArr = Array.from(new Set(tempArr));
tempArr.sort((a, b) => {
  return myMap.get(b) - myMap.get(a);
});

console.log(tempArr);
