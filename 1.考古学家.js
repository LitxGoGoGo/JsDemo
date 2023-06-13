let line = 'a b c d c';

let myArr = line.split(' ');

function pailiezuhe(arr) {
  let result = [];
  function digui(remainChar, tempRes) {
    if (remainChar.length === 0) {
      result.push(tempRes);
    } else {
      for (let i = 0; i < remainChar.length; i++) {
        let innerRes = tempRes + remainChar[i];
        let remainChars = remainChar.slice(0, i) + remainChar.slice(i + 1);
        digui(remainChars, innerRes);
      }
    }
  }

  digui(arr, '');
  return result;
}

// console.log();
line = line.replace(/ /g, '');
let res = pailiezuhe(line);
res = new Set([...res]);

console.log(res.size);

function zhaodaoabsminsum(arr) {
  let tempArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = tempArr.length - 1;
  let minSum = Infinity;
  let resultArr = [];
  while (left < right) {
    let tempSum = tempArr[left] + tempArr[right];
    let absSum = Math.abs(tempArr[left] + tempArr[right]);

    if (absSum < minSum) {
      minSum = absSum;
      resultArr = [tempArr[left], tempArr[right]];
    }
    if (tempSum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return { minSum, resultArr };
}
