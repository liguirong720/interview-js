/**
 * 批量请求控制，max表示每次最大请求数量
 * sendRequest(urls, max, callback)
 */
function mapUrlList (urls = []) {
    return urls.map(url => {
        fetch(url)
    })
}

function sendRequest(urls = [], max, callback) {
    let result = []
    if (urls.length === 0) {
        callback(result)
    } else {
        const reqList = urls.splice(0, max)
        const curPromise = mapUrlList(reqList)
        Promise.all(curPromise).then(res => {
            result.concat(res)
            sendRequest(urls, max, callback)
        })
    }
}

async function sendRequest2(urls = [], max, callback) {
    let result = []
    while(urls.length > 0) {
        const reqList = urls.splice(0, max)
        const curPromise = mapUrlList(reqList)
        let res = await Promise.all(curPromise)
        result.concat(res)
    }
    callback(result)
}

/**
 * 使用reduce实现map
 */
Array.prototype.myMap = function(fn, ctx = null) {
    let result = []
    this.reduce((pre, curr, idx, arr) => {
        result.push(fn.call(ctx, curr, idx, arr))
    }, null)
    return result
}


/**
 * 实现promise.all
 * 所有的promise都是resolve才resolve，
 * 只要有一个reject就reject
 */
Promise.myAll = function (arr) {
    if (!Array.isArray(arr)) return;
    return new Promise((resolve, reject) => {
        let resolveCount = 0;
        let arrLen = arr.length;
        let result = [];
        arr.forEach((item) => {
            Promise.resolve(item).then((res) => {
                resolveCount++;
                result.push(res);
                if (resolveCount === arrLen) {
                return resolve(result);
                }
            },(err) => {
                return reject(err);
            });
        });
    });
};


/**
 * 给定一个升序整形数组[0,1,2,4,5,7,13,15,16]，
 * 找出其中连续出现的数字区间为如下：
 * ["0->2", "4->5", "7", "13", "15->16"]
 */
function summaryRanges(arr) {
    let result = []
    if (arr.length === 1) {
        result.push(`${arr[0]}`)
    } else {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i]
            while(i+1 < arr.length && (arr[i+1] - arr[i] === 1)) {
                i++
            }
            if (curr !== arr[i]) {
                result.push(`${curr}->${arr[i]}`)
            } else {
                result.push(`${arr[i]}`)
            }
        }
    }
    return result
};

let arr = [0, 2, 3, 4, 6, 8, 9]
console.log(summaryRanges(arr))


/**
 * 实现快排
 * @param {*} arr 
 */
function quickSort(arr = []) {
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

let a = [4,9,2,1,8,3,5,0,7]
console.log(quickSort(a))


/**
 * sum(1,2,3)
 * sum(1,2)(3)
 * sum(1)(2)(3)
 */
function add(a, b, c) {
    return a + b + c
}

function currying(fn, ...args) {
    if (fn.length > args.length) {
        return function(...innerArgs) {
            return currying(fn, ...args, ...innerArgs)
        }
    } else {
        return fn(...args)
    }
}

let sum = currying(add)

console.log(add(1,2,3))
console.log(add(1)(2,3))
console.log(add(1)(2)(3))