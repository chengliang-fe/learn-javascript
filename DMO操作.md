# DOM操作
HTML DOM 定义了访问和操作 HTML 文档的标准方法。

1. 操作DOM元素
2. 操作DOM样式
3. 操作DOM事件
4. 操作DOM节点

## 操作DOM元素

### 查找HTML元素
- 通过`id`查找`HTML`元素，使用`.getElementById()`，没有找到就返回`null`

```javascript
var h1 =document.getElementById("title");
```

- 通过标签名查找`HTML`元素，使用`getElementsByTagName()`

```javascript
var p = document.getElementsByTagName('p');
```

- 通过类名找到`HTML`元素，使用`getElementsByClassName`

```javascript
var con = document.getElementsByClassName('con');
```

### 修改HTML内容
- 通过`innerHTML`属性修改

```javascript
var title = document.getElementById('title');
title.innerHTML = 'HELLO DOM';
```

### 改变HTML属性

```javascript
//语法
document.getElementById(id).attribute = new value;

//例子
document.getElementById("image").src="landscape.jpg";
```

### 改变HTML样式

```javascript
//语法
document.getElementById('title').style.property = new style;

//例子
document.getElementById("p2").style.color="blue";
```

## 操作DOM事件
- 事件属性

```html
<div id="myBtn" onclick="changeHtml()"></div>
```

- 使用 HTML DOM 来分配事件

```javascript
document.getElementById("myBtn").onclick= function(){
    changeHtml();
};
```

- HTML DOM EventListener addEventListener() 方法
    - 用于向指定元素添加事件句柄
    - 添加的事件句柄不会覆盖已存在的事件句柄
    - 可以向一个元素添加多个事件句柄
    - 可以向任何 DOM 对象添加事件监听
    - 可以更简单的控制事件（冒泡与捕获）
    
```javascript
//语法
element.addEventListener(event, function, useCapture);

//例子
var title = document.getElementById("myBtn");
title.addEventListener('clcik', changeHtml);
```

### 事件的捕获和冒泡
事件传递有两种方式：冒泡与捕获。
在*冒泡*中，内部元素的事件会先被触发，然后再触发外部元素
在*捕获*中，外部元素的事件会先被触发，然后才会触发内部元素的事件

```javascript
addEventListener(event, function, useCapture); //useCapture参数定义是否采用捕获传递，默认是false（即冒泡传递）

document.getElementById("myP").addEventListener("click", function() {
    alert("你点击了 P 元素!");
}, true);

```

### removeEventListener()
removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄

```javascript
element.removeEventListener("mousemove", myFunction);
```

### 事件兼容方式

```
var title = document.getElementBy('title');

if(title.addEventListener){
    title.addEventListener('click', function(){
        alert('支持addEventListener');
    });
}else{
    title.attachEvent('onclick', function(){
        alert('不支持addEventListener');
    });
}
```

## DOM节点
- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

- `appendChild()` 把新的子节点添加到指定节点
- `removeChild()` 删除子节点
- `replaceChild()` 替换子节点
- `insertBefore()` 在指定的子节点前面插入新的子节点
- `createAttribute()` 创建属性节点
- `createElement()` 创建元素节点
- `createTextNode()` 创建文本节点

- `innerHTML` 属性对于获取或替换 HTML 元素的内容
- `nodeName` 属性规定节点的名称
- `nodeValue` 属性规定节点的值
- `nodeType` 属性返回节点的类型
- `name`
- `value`
- `attributes` 属性的集合
- `specified` 检查属性是否有指定的值

- `getAttributeNode()` 
- `getNamedItem()` 返回节点列表中指定属性名的值
- `item()` 返回节点列表中处于指定索引号的节点

