
## charAt
charAt() 方法从一个字符串中返回指定的字符
```js
str.charAt(index)
```
一些实际用法
```javascript
// 遍历字符串
let str = 'abcdefg', len = str.length
for(let i = 0; i < len; i++) {
  let temp = str.charAt(i) // 获取索引对应的字符
}
```

## codePointAt
`codePointAt()` 方法返回一个 Unicode 编码点值的非负整数
```
str.codePointAt(pos)
```