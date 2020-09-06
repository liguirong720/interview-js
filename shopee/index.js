/**
 * 题目一、
 * 题目描述：
 * 实现下列函数功能：
const memoize = function(fn) {}

const add = function(a) {
  return a + 1
}

const adder = memoize(add)

adder(1)  // 需要计算

adder(1)  // 不经过计算，从内存缓存中获得结果

adder(2)  // 需要计算

adder(1)  // 不经过计算，从内存缓存中获得结果
 */

const memoize = function(fn) {
    let cacheResult = {}
    return function(args) {
        if (cacheResult[args]){
            return cacheResult[args]
        } else {
            let res = fn.call(this, args)
            cacheResult[args] = res
            return res
        }
    }
}

const add = function(a) {
    return a + 1
}

const adder = memoize(add)

console.log(adder(1))  // 需要计算

console.log(adder(1))  // 不经过计算，从内存缓存中获得结果

console.log(adder(2))  // 需要计算

console.log(adder(1))  // 不经过计算，从内存缓存中获得结果


/**
 * 题目二
 * 请写出下列代码的输出结构
 */
new Promise(resolve => {

    console.log(1);
 
    setTimeout(() => {
 
      console.log(5);
 
    }, 0)
 
    resolve(3);
 
    Promise.resolve().then(()=> console.log(4))
 
 }).then(num => {
 
    console.log(num)
 
 });
 
 console.log(2)

// 输出结果如下： 
// 1,2,4,3,5

/**
 * 题目四：
 * 实现快速排序
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middleIndex = Math.floor(arr.length / 2)
    let middleValue = arr.splice(middleIndex, 1)
    let leftArray = []
    let rightArray = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] > middleValue ? rightArray.push(arr[i]) : leftArray.push(arr[i])
    }
    return quickSort(leftArray).concat(middleValue, quickSort(rightArray))
}

let a = [9, 10, 4, 14, 0, 2, 5, 7, 20]
console.log(quickSort(a))

/**
 * 题目五：
 * N 级台阶，每次可以上 1 或 2 级，请问有多少种走法。
 * 例如：N = 3，有 3 种走法：1 1 1, 1 2, 2 1
 * 解题思路：
    这类题可这样理解
    假设走到第n阶有f(n)种走法,走到第n+1阶有f(n+1)种走法;
    则走到第n+2阶,则可分成两种情况:
    一,最后一步是从第n阶直接登两级到第n+2阶
    二,最后一步是从第n+1阶直接登一级到第n+2阶
    由于从地面到第n阶,和到第n+1阶的走法已经知道
    故从地面到第n+2阶的走法:
    f(n+2)=f(n)+f(n+1)
    n=1时,1种走法
    n=2时,2种走法
    n=3时,1+2=3种走法
    n=3时,2+3=5种走法
 */

function findStep(n) {
    if (n <= 1) {
        return n
    } else {
        return findStep(n - 1) + findStep(n - 2)
    }
}

console.log(findStep(3))
