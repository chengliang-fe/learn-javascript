/**
 * Created by qingzhui on 2015/11/5.
 */
//'use strict';

//声明一个变量
var a;

//声明一个变量同时为其赋值
var b = 2;

//声明多个变量
var c, d, e;

//声明多个变量并同时赋值
var a1 = 'qingzhui', a2 = 5, a3 = 6;

//如果一个变量只是声明，没有赋值的话，其默认值是`undefined`
var f;
console.log(f); //undefined

//打印一个没有赋值的变量
//console.log(eee); //ReferenceError: eee is not defined

//同一个变量只能声明一次
var g = 5;
var g;
console.log(g); //5

//同一个变量，可以被多次赋值
var h = 5;
h = 'qingzhui';
console.log(h) //'qingzhui'

//变量是用来存储数据的，所以变量赋值的过程是返回一个值
var i;
console.log(i = 3);

//可以连续赋值
var j = 4;
var k = j;
console.log(j); //4
console.log(k); //4

//上面的可以理解为 var j, k = j = 4;

var l = m, m = 6;
console.log(l); //undefined
console.log(m);  //6

//连续赋值
var xx = 6;

function a(){
    var xx = yy = 7;
}
a();

console.log(xx);
console.log(yy);


