# 前言

该文件夹主要用于收集历次面试头条过程中，碰到的比较典型的面试题

## 编程题

1、实现批量请求控制，sendRequest(urls, max, callback)

2、使用reduce实现map函数功能

3、实现promise.all函数功能

4、给定一个升序整形数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间为如下：["0->2", "4->5", "7", "13", "15->16"]

5、实现快排算法quickSort

6、实现函数sum，使得以下的输出都是6

> sum(1,2,3)
> sum(1,2)(3)
> sum(1)(2)(3)

## 论述题

1、commojs 和 es module的区别

2、vue中用户自定义了data中某个属性的getter、setter会如何？例如：

```js
export default {
    data () {
        return {
            list: {
                getter () {
                    return 1
                },
                setter (newVal) {
                    console.log(newVal)
                }
            }
        }
    }
}
```

3、vue响应式原理

4、vue中的keep-alive的使用场景和作用

5、webpack打包优化

## 网络原理

1、https原理

2、跨域原理（jsonp原理和cors原理）

3、csrf原理及防御

4、http缓存（协商缓存和强制缓存）

