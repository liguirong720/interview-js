function currying(fn) {
    let args = []
    return function f(...innerArgs) {
        if (innerArgs.length) {
            args = [...args, ...innerArgs]
            return f
        } else {
            fn.apply(this, args)
        }
    }
}