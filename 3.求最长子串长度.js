let str = 'adwefh234298hqwfo23842rjwiofhw234ggfw35';

let left = 0;
let right = 0;
let res = 0;
while (true) {}

let Num = 1;
let resultArr = [];
for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) {
    for (let jishu = 1; jishu <= i; jishu++) {
      resultArr[i - 1] = resultArr[i - 1] ? resultArr[i - 1].push(Num) : [Num];
      Num++;
    }
  } else {
    for (let oushu = 1; oushu <= i; oushu++) {
      resultArr[i - 1] = resultArr[i - 1]
        ? resultArr[i - 1].unshift(Num)
        : [Num];
      Num++;
    }
  }
}
