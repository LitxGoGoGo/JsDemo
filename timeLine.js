let Gap = 8
let Height = 1
const arr = [
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
    [{ endTime: 5, tag: '(2,0)' }],
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
    ]
]

function getArr(arr) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        // 数组刚开始遍历时直接把第一项推入并且高度累加给后续使用
        if (result.length === 0) {
            let sameTimeArr = []
            sameTimeArr = arr[index].map(item => {
                return {
                    endTime: item.endTime,
                    tag: item.tag,
                    Height: Height++
                }
            })
            result.push(sameTimeArr)
        }
        if (arr[index].endTime - arr[index - 1].endTime < Gap) {
            let sameTimeArr = []
            sameTimeArr = arr[index].map(item => {
                return {
                    endTime: item.endTime,
                    tag: item.tag,
                    Height: Height++
                }
            })
            result.push(sameTimeArr)
        }
    }
    return result
}

console.log(getArr(arr))
