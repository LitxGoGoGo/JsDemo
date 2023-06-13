let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10, 11, 12, 13];
let arr3 = [14, 15];
let n = 2;
let count = 3;

let resultArr = [];

let Arr11 = [];
let Arr22 = [];
let Arr33 = [];

while (arr1.length > 0) {
  Arr11.push(arr1.splice(0, n));
}
while (arr2.length > 0) {
  Arr22.push(arr2.splice(0, n));
}
while (arr3.length > 0) {
  Arr33.push(arr3.splice(0, n));
}

// console.log(Arr11);
// console.log(Arr22);
// console.log(Arr33);

while (Arr11.length > 0 || Arr22.length > 0 || Arr33.length > 0) {
  if (Arr11.length > 0) {
    resultArr.push(Arr11.shift());
  }
  if (Arr22.length > 0) {
    resultArr.push(Arr22.shift());
  }
  if (Arr33.length > 0) {
    resultArr.push(Arr33.shift());
  }
}

console.log(resultArr.flat(1));
