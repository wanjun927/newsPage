## charAt

charAt() 方法从一个字符串中返回指定的字符

```js
str.charAt(index);
```

##### 实际用法

```javascript
// 遍历字符串
let str = "abcdefg",
  len = str.length;
for (let i = 0; i < len; i++) {
  let temp = str.charAt(i); // 获取索引对应的字符
}
```

## codePointAt

`codePointAt()` 方法返回一个 Unicode 编码点值的非负整数

```
str.codePointAt(pos)
```

##### 实际用法

```js
let arr = new Array(26);
const codePointA = "a".codePointAt(0); // 获取a的unicode码
for (let i = 0; i < str.length; i++) {
  arr[str.codePointAt(i) - codePointA] = i;
} // 将字符串按字母顺序存储到数组中
```

# replace


# slice

`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串

```js
newStr = str.slice(beginIndex[, endIndex]) // slice()提取的新字符传不包括 beginIndex, 包括 endIndex
```

> beginIndex 可以看做 strLength + beginIndex, endIndex 可以看做 strLength + endIndex
