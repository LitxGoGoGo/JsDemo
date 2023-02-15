// 创建一个空的 Map 对象
const myMap = new Map();

// 定义一个函数，用于生成指定长度的随机数组
function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random()));
  }
  return arr;
}

// 往 Map 中添加七个键值对
for (let i = 0; i < 7; i++) {
  const key = Date.now() + i; // 生成随机时间戳作为键
  const value = generateRandomArray(Math.floor(Math.random() * 5) + 1); // 生成长度在1-5之间的随机数组
  myMap.set(key, value); // 添加键值对到 Map 中
}

// 打印 Map 中的内容
console.log(myMap);


//排序map
// 创建一个 Map 对象
const myMap = new Map();
myMap.set(3, 'value3');
myMap.set(1, 'value1');
myMap.set(2, 'value2');

// 将 Map 对象中的键值对转换为一个数组
const arr = Array.from(myMap);

// 对数组按照键从小到大排序
arr.sort((a, b) => a[0] - b[0]);

// 将排好序的数组转换回 Map 对象
const sortedMap = new Map(arr);

// 输出排好序的 Map 对象
console.log(sortedMap);
