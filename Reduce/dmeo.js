let initArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];

let simpleArr = [[1, 2], 3, 4, [5, 6]];

let a = [1, 2, 3];

let b = [[1, 1], 2, [2, 3]];
let result = (paramArr) => {
  if (!Array.isArray(paramArr)) {
    console.log(paramArr);
    return paramArr;
  }
  return paramArr.reduce((a, b) => {
    console.log(a, b);
    return result(a) - result(b);
  });
};

let result1 = (paramArr) => {
  if (!Array.isArray(paramArr)) {
    return paramArr;
  }
  return paramArr.reduce((acc, curr) => {
    console.log('acc:', acc, 'curr:', curr);
    console.log('result1', result1(acc), result1(curr));
    if (Array.isArray(acc)) {
      return result1(acc) - result1(curr);
    } else {
      return acc - result1(curr);
    }
  }); // 初始值设为 0
};
console.log(result1(simpleArr));
// function loop(Arr) {}
