/**
 * 使用reduce实现map方法
 * @param {*} fn 
 * @param {*} thisValue 
 */
Array.prototype.myMap = function(fn, thisValue) {
    let result = []
    this.reduce((prev, curr, idx, arr) => {
        result.push(fn.call(thisValue, curr, idx, arr))
    }, null)
    return result
}

let arr = [1,2,3]
console.log(arr.myMap(item => item + 1))

/**
 * 实现reduce方法
 */
Array.prototype.myReduce = function(fn, initValue) {
    let result = initValue
    let i = 0
    if (!result) {
        result = this[i]
        i++
    }
    while(i < this.length) {
        result = fn(result, this[i], i, this)
        i++
    }
    return result
}

let arr = [1,2,3]
console.log(arr.myReduce((pre, curr) => pre + curr))
