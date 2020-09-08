/**
 * 题目一
 * 大数相加
 */
function addBigNum(num1 = '', num2 = '') {
    let result = []
    // 将字符串反转为数组
    num1 = num1.split('').reverse()
    num2 = num2.split('').reverse()
    // 确保num1的长度最长
    if (num2.length > num1.length) {
        let tmp = num1
        num1 = num2
        num2 = tmp
    }
    // 余数
    let remain = 0
    for (let i = 0; i < num1.length; i++) {
        let sum = +num1[i] + (+num2[i] || 0) + remain
        if (sum > 9) {
            remain = 1
        } else {
            remain = 0
        }
        result.push(sum > 9 ? sum % 10 : sum)
    }
    if (remain) {
        result.push(remain)
    }
    return +result.reverse().join('') || 0
}

console.log(addBigNum('955', '45'))

/**
 * isSameValue
 */
const TYPES = ['Number', 'String', 'Boolean', 'null', 'undefined']

function type(str) {
    return Object.prototype.toString.call(str).slice(8, -1)
}

function isSameValue(value1, value2) {
    if (type(value1) !== type(value2)) {
        return false
    } else {
        let currType = type(value1)
        // 简单类型
        if(TYPES.includes(currType)) {
            return value1 === value2
        } else {
            // 数组类型
            if (currType === 'Array') {
                // 长度不同不相等
                if (value2.length !== value1.length) return false
                // 长度相同比较每个元素是否相等
                for(let i = 0; i < value1.length; i++) {
                    if (value1[i] !== value2[i]) {
                        return false
                    }
                }
            } else if (currType === 'Object') {
                // 长度不同不相等
                if (Object.keys(value1).length !== Object.keys(value2).length) {
                    return false
                } else {
                    Object.keys(value1).forEach(key => {
                        // value2中也有对应属性时，递归调用，没有值时返回false
                        if (value2[key]) {
                            return isSameValue(value1[key], value2[key])
                        } else {
                            return false
                        }
                    })
                }
            } else {
                return false
            }
        }
    }
    return true
}

let v1 = [1,2,3]
let v2 = [1,2,3]
console.log(isSameValue(v1, v2))

/**
 * 题目三
 * 盒子碰撞检测
 * 两个盒子，拖动其中一个盒子，当碰撞时，被碰撞的改变颜色，使用鼠标事件实现
 * 解题在 碰撞检测.html中
 */
