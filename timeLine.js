let bbbb = [
    { endTime: 1, tag: '(0,0)' },
    { endTime: 8, tag: '(0,1)' },
    { endTime: 9, tag: '(0,1)' },
    { endTime: 1, tag: '(0,1)' },
    { endTime: 9, tag: '(0,1)' },
    { endTime: 7, tag: '(0,1)' },
    { endTime: 12, tag: '(0,1)' },
    { endTime: 10, tag: '(0,1)' },
    { endTime: 2, tag: '(0,1)' },
    { endTime: 2, tag: '(0,1)' },
    { endTime: 3, tag: '(0,1)' },
    { endTime: 4, tag: '(0,1)' },
    { endTime: 5, tag: '(0,1)' },
    { endTime: 5, tag: '(0,1)' },
    { endTime: 5, tag: '(0,2)' }
]

// 累加器
//

// 在编程中，“reduce”通常是指将一组值“缩减”为单个值的操作，这个操作通常涉及到对集合中的每个元素进行某种操作并将它们组合起来。

// JavaScript 中的 reduce() 方法就是这样的一种操作，它用于对数组中的元素进行缩减操作，将数组中的所有元素通过一个函数进行计算，最终返回一个单一的值。具体来说，reduce() 方法会传入两个参数：一个是回调函数，另一个是初始值。回调函数会接收四个参数：累加器、当前元素、当前索引和整个数组。回调函数的返回值会被作为下一次回调函数的累加器值，最终返回的结果是最后一次回调函数返回的累加器值。

// reduce() 方法的名称中包含“reduce”这个词，是因为它可以将一个数组通过一个函数缩减为一个值，这个过程就好像在对数组进行“缩减”一样，因此被称为 reduce()。

const result = bbbb.reduce((acc, curr) => {
    const index = acc.findIndex(item => item[0].endTime === curr.endTime)
    if (index === -1) {
        acc.push([curr])
    } else {
        acc[index].push(curr)
    }
    return acc
}, [])
// console.log(result)

const cccc = [
    [1, 0, 0, 0, 1],
    [0, 0, 1, 1],
    [1, 0, 1],
    [0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1]
]

//数组对齐
function duiqishuzu(arr) {
    let maxHeight = 0
    arr.forEach(subArr => {
        maxHeight = Math.max(maxHeight, subArr.length)
    })
    // console.log(maxHeight)
    for (const iterator of arr) {
        for (let i = iterator.length; i < maxHeight; i++) {
            iterator.push(0)
        }
    }
    return arr
}
// console.log(duiqishuzu(cccc))

function hadleArr(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let tempArr = []
        for (let j = 0; j < i; j++) {
            tempArr.push(arr[j])
        }
        // console.log(tempArr)
        for (let x = tempArr.length - 1; x >= 0; x--) {
            if (arr[i] - tempArr[x] >= 8) {
                result.push([
                    { index: i, value: arr[i] },
                    {
                        index: x,
                        value: tempArr[x]
                    }
                ])
                break
            }
        }
    }
    // console.log(result)
    return result
}
let aaaa = [7, 9, 14, 18, 22, 25, 30, 31, 32, 40]
hadleArr(aaaa)

let Gap = 8
let Height = 1
let arr = [
    [
        { endTime: 1, tag: '(0,0)' },
        { endTime: 1, tag: '(0,1)' },
        { endTime: 1, tag: '(0,2)' }
    ],
    [
        { endTime: 3, tag: '(1,0)' },
        { endTime: 3, tag: '(1,1)' },
        { endTime: 3, tag: '(1,2)' },
        { endTime: 3, tag: '(1,3)' }
    ],
    [{ endTime: 4, tag: '(2,0)' }],
    [{ endTime: 5, tag: '(2,0)' }],
    [
        { endTime: 8, tag: '(3,0)' },
        { endTime: 8, tag: '(3,1)' },
        { endTime: 8, tag: '(3,2)' },
        { endTime: 8, tag: '(3,3)' },
        { endTime: 8, tag: '(3,4)' }
    ],
    [
        { endTime: 12, tag: '(3,0)' },
        { endTime: 12, tag: '(3,1)' },
        { endTime: 12, tag: '(3,2)' },
        { endTime: 12, tag: '(3,3)' },
        { endTime: 12, tag: '(3,4)' }
    ],
    [
        { endTime: 14, tag: '(4,0)' },
        { endTime: 14, tag: '(4,1)' },
        { endTime: 14, tag: '(4,2)' }
    ],
    [{ endTime: 15, tag: '(4,0)' }],
    [{ endTime: 19, tag: '(4,0)' }]
]

function getArr(arr) {
    let height = 1
    let result = []
    let myArray = [[]]
    arr = arr.sort((a, b) => {
        return a[0].endTime - b[0].endTime
    })

    for (let index = 0; index < arr.length; index++) {
        let myIndex = 0
        let tempIndex = index
        let bianjietiaojian = index
        if (result.length === 0) {
            result.push(
                arr[index].map(item => {
                    myArray[index].push(1)
                    return {
                        ...item,
                        myHeight: height++
                    }
                })
            )
            continue
        }
        if (index > 0) {
            let tempArr = []
            for (let i = 0; i < index; i++) {
                tempArr.push(arr[i])
            }
            // console.log(tempArr)
            for (let x = tempArr.length - 1; x >= 0; x--) {
                // 设置最小间隔
                if (arr[index][0].endTime - tempArr[x][0].endTime > 5) {
                    let msg = {
                        msg: '找到了',
                        arrindex: `index:${index},value:${arr[index][0].endTime}`,
                        tempArrindex: `index:${x},value:${tempArr[x][0].endTime}`
                    }
                    console.log(msg)
                    if (index - x === 1) {
                        console.log('我们是邻居')
                        myArray.push(arr[index].map(() => 1))
                    } else {
                        // let tempCountArr = myArray.slice(x + 1, index)
                        // let huoArr = quHuo(tempCountArr)
                        // console.log('myArray', myArray)
                        console.log('myArray.slice(x + 1, index)', myArray.slice(x + 1, index))
                        // console.log('huoArr', huoArr)
                        myArray.push([])
                    }
                    break
                } else {
                    if (x - 1 < 0) {
                        console.log('大胆你没有配对的')
                        console.log(`index:${index},value:${arr[index][0].endTime}`)
                        myArray.push([])
                        while (myArray[index].length < myArray[index - 1].length) {
                            myArray[index].push(0)
                        }
                        for (let y = 0; y < arr[index].length; y++) {
                            myArray[index].push(1)
                        }
                    }
                }
            }
            // console.log(myArray)
        }
    }
    console.log(myArray)

    // console.log('result', result)
    return result
}

function formatArray(arr) {}
function compareTime(current, before) {
    return current - before > Gap
}

getArr(arr)

function quHuo(arr) {
    const result = []

    let maxLen = 0
    arr.forEach(subArr => {
        maxLen = Math.max(maxLen, subArr.length)
    })

    const newArr = arr.map(subArr => [...subArr, ...new Array(maxLen - subArr.length).fill(0)])

    for (let i = 0; i < maxLen; i++) {
        let orValue = 0
        newArr.forEach(subArr => {
            orValue |= subArr[i]
        })
        result.push(orValue)
    }
    return result
}

console.log(quHuo(cccc))
