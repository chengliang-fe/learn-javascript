# DOM操作
HTML DOM 定义了访问和操作 HTML 文档的标准方法。

1. document 对象
2. element 对象
3. attribute 对象
4. events 对象

## DOM节点
- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

## document 对象
当浏览器载入`HTML`文档, 它就会成为`document`对象。
`document`对象是`HTML`文档的根节点与所有其他节点（元素节点，文本节点，属性节点, 注释节点）。

- document.addEventListener()  向文档添加句柄

```javascript
var title = document.getElementById("title");

title.addEventListener('click', function(){
    alert("给id为title的html元素添加句柄");
})
```

- document.activeElement()  返回当前获取焦点元素

```javascript
var x = document.activeElement.tagName;
```

- document.anchors  返回对文档中所有 Anchor 对象的引用

```javascript
var len = document.anchors.length;  //返回文档的链接数
```

- document.baseURI  返回文档的绝对基础 URI

```javascript
var url = document.baseURI;
```

- document.close()  关闭用 document.open() 方法打开的输出流，并显示选定的数据。

```javascript
doc.close();
```

- document.cookie 设置或返回与当前文档有关的所有 cookie。

```javascript
document.write(document.cookie);
```

- document.createAttribute()  创建一个属性节点

```jvascript
var h1=document.getElementsByTagName("H1")[0];
var att = document.createAttribute("class");
att.value = "demo";
h1.setAttributeNode(att);
```

- document.createComment()  可创建注释节点

```javascript
var c = document.createComment("My personal comments");
document.body.appendChild(c);
```

- document.createElement()  创建元素节点

```javascript
var p = document.createElement("p");
var t = document.createTextNode("我是段落节点");

p.appendChild(t);
```

- document.createTextNode()  创建文本节点

```javascript
var t = document.createTextNode("我是段落节点");
```

- document.doctype  属性可返回与文档相关的文档类型声明

- document.getElementsByClassName()  返回文档中所有指定类名的元素集合，作为 NodeList 对象

- document.getElementById()  返回对拥有指定 id 的第一个对象的引用

- document.getElementsByName()  返回带有指定名称的对象集合

- document.getElementsByTagName()  返回带有指定标签名的对象集合

- document.images 返回当前文档中所有图片的数组

```javascript
var imgLength = document.images.length;  //返回文档所以图片的数量
```

- document.links  返回对文档中所有 Area 和 Link 对象引用

- document.normalize()  方法合并相邻的文本节点并删除空的文本节点

- document.querySelector()  返回文档中匹配指定的CSS选择器的第一元素

- document.querySelectorAll()  返回文档中匹配的CSS选择器的所有元素节点列表

- document.referrer  返回载入当前文档的文档的 URL

- document.removeEventListener()  移除文档中的事件句柄(由 addEventListener() 方法添加)

- document.URL  返回文档完整的URL

- document.title  返回当前文档的标题

- document.write()  向文档写 HTML 表达式 或 JavaScript 代码

## element 对象

- element.accessKey  accessKey 属性可设置或返回访问单选按钮的快捷键。使用 Alt + accessKey 为拥有指定快捷键的元素赋予焦点。

```javascript
document.getElementById('link').accessKey="w";
```

- element.addEventListener()  向指定元素添加事件句柄

- element.appendChild()  为元素添加一个新的子元素

```javascript
var p = document.getElementById("p");
var txt = document.createTextNode("我是一个段落");  //创建一个文本节点

p.appendChild(txt); 为p元素添加文本节点
```

- element.removeChild()  删除一个子元素

- element.replaceChild()  替换一个子元素

- element.attributes  返回一个元素的属性数组

```javascript
var p = document.getElementById("p");
var len = p.attributes.length;
```

- element.childNodes  返回包含被选节点的子节点的 NodeList

- element.classlist  返回元素的类名

```javascript
element.classlist.add();  //在元素中添加一个或多个类名

element.classlist.remove();  //移除元素中一个或多个类名

element.classlist.contains();  //返回布尔值，判断指定的类名是否存在

element.classlist.item();  //返回类名在元素中的索引值

element.classlist.toggle(class, true|false);  //在元素中切换类名
```

- element.className  设置或返回元素的 class 属性

- element.clientWidth  在页面上返回内容的可视高度

- element.clientHeight  在页面上返回内容的可视宽度

- element.cloneNode(deep)  克隆某个元素

```javascript
var node = document.getElementById("myList").lastChild.cloneNode(true);
document.getElementById("myList1").appendChild(node);
```

- node.compareDocumentPosition(node)  按照文档顺序，比较当前节点与指定节点的文档位置

- element.fristChild  回元素的第一个子节点

- element.focus()  设置文档或元素获取焦点

- element.getAttribute(attributename)  通过名称获取属性的值

- element.getAttrbuteNode(attributename)  返回指定属性节点

- element.hasAttrbute(attributename)  如果元素中存在指定的属性返回 true，否则返回false

- element.hasAttributes()  如果元素有任何属性返回ture，否则返回false

- element.removeAttribute()  从元素中删除指定的属性

- element.removeAttributeNode()  删除指定属性节点并返回移除后的节点

- element.hasfocus()  返回布尔值，检测文档或元素是否获取焦点

- element.hasChildNodes()  返回一个元素是否具有任何子元素

- element.id  设置或者返回元素的 id

- element.innerHTML  设置或者返回元素的内容

- element.innerBefore(newnode, existingnode)  现有的子元素之前插入一个新的子元素

- element.lastChild  返回的最后一个子元素

- element.nextSibling  返回某个元素之后紧跟的元素

- element.nodeName  返回元素的标记名

- element.nodeType  属性返回节点类型

- element.nodeValue  返回元素的类型

- element.offsetHeight  返回任何一个元素的高度包括边框和填充，但不是边距

- element.offsetWidth  返回元素的宽度，包括边框和填充，但不是边距

- element.offsetLeft  返回当前元素的相对水平偏移位置的偏移容器

- element.offsetParent  返回元素的偏移容器

- element.offsetTop  返回当前元素的相对垂直偏移位置的偏移容器

- element.parentNode  返回元素的父节点

- element.perviousSibling  返回某个元素紧接之前元素

- element.scrollHeight  返回整个元素的高度

- element.scrollLeft  返回当前视图中的实际元素的左边缘和左边缘之间的距离

- element.scrollTop  返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离

- element.scrollWidth  返回元素的整个宽度（包括带滚动条的隐蔽的地方）

- element.setAttribute(attributename, attributevalue)  设置或者改变指定属性并指定值

- element.setAttributeNode(attributenode)  设置或者改变指定属性节点

- element.style  设置或返回元素的样式属性

- element.TagName  作为一个字符串返回某个元素的标记名

- element.title  设置或返回元素的title属性

- element.textContent  设置或返回一个节点和它的文本内容

- nodelist.item()  返回某个元素基于文档树的索引

- nodelist.length  返回节点列表的节点数目

## attribute 元素

- attr.isId  检查属性是否为元素的 ID 属性

- attr.name  返回属性名称

- attr.value 设置或者返回属性值

- attr.specified  检查属性是否有指定的值

- nodemap.getNamedItem()  从节点列表中返回的指定属性节点。

- nodemap.item(index)  返回节点列表中处于指定索引号的节点
 
- modemap.length 返回节点列表的节点数目

- nodemap.removeNamedItem()  删除指定属性节点

- nodemap.setNameItem()  设置指定属性节点

```javascript
btn.attributes.setNamedItem('demo');
```

## event 对象

- onclick  当用户点击某个对象时调用的事件句柄。

- oncontextmenu  在用户点击鼠标右键打开上下文菜单时触发

- ondbclick  当用户双击某个对象时调用的事件句柄

- onmousedown  鼠标按钮被按下

- onmouseenter  当鼠标指针移动到元素上时触发

- onmouseleave  当鼠标指针移出元素时触发

- onmousemove  鼠标被移动

- onmouseover  鼠标移到某元素之上

- onmouseout  鼠标从某元素移开

- onmouseup  鼠标按键被松开

- onbeforeload  该事件在即将离开页面（刷新或关闭）时触发

- onhaschange  该事件在当前 URL 的锚部分发生修改时触发

- onload  一张页面或一幅图像完成加载

- onpageshow  该事件在用户访问页面时触发

- onpagehide  该事件在用户离开当前网页跳转到另外一个页面时触发

- onresize  窗口或框架被重新调整大小

- onscroll  当文档被滚动时发生的事件

- onunload  用户退出页面

- onblur  元素失去焦点时触发

- onchange  该事件在表单元素的内容改变时触发

- onfocus  元素获取焦点时触发

- onfocusin  元素即将获取焦点是触发

- onfocusout  元素即将失去焦点是触发

- oninput  用户输入时触发

- onreset  表单重置时触发

- onsearch  用户向搜索域输入文本时触发

- onselect  用户选取文本时触发

- onsubmit  表单提交时触发

- oncopy

- oncut

- onpaste

- ondrag  该事件在元素正在拖动时触发

- ondragend  该事件在用户完成元素的拖动时触发

- ondragenter

- ondragleave

- ondragover

- ondragstart

- ondrop

- animationonend  该事件在 CSS 动画结束播放时触发

- animationonterration  该事件在 CSS 动画重复播放时触发

- animationonstart  该事件在 CSS 动画开始播放时触发

- transtionend  该事件在 CSS 完成过渡后触发

- onwheel  该事件在鼠标滚轮在元素上下滚动时触发

- event.bubbles  返回布尔值，指示事件是否是起泡事件类型

- event.cancelable  返回布尔值，指示事件是否可拥可取消的默认动作

- event.currentTarget  返回其事件监听器触发该事件的元素

- event.eventPhase  返回事件传播的当前阶段

- event.target  返回触发此事件的元素

- event.timeStamp  返回事件生成的日期和时间

- event.type  返回当前 Event 对象表示的事件的名称

- event.initEvent()  初始化新创建的 Event 对象的属性

- event.preventDefault()  通知浏览器不要执行与事件关联的默认动作

- event.stopPropagation()  不再派发事件
 
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


