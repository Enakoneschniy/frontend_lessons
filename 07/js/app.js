'use strict';

let name = 'Petya';

let hello = 'Hello ' + name + '!';
let newHello = `Hello ${ name }!`;
let str = `multiple 
line
string`;

//console.log(str);
//console.log(hello);
//console.log(newHello);
//
//console.log('5' - 3);

let x = '4d5';
let y = '6';

//console.log(parseInt(x) + +y);
//console.log((-50 / 0) + (50 / 0));
//console.log(+null);
//console.log(+true);
//console.log(+false);
//console.log(true + 3);
//console.log(0.1 + 0.2);

let f = -10;
////console.log(-f);

let foo = 5;
//foo = foo + 1;

//console.log(foo++);
//console.log(foo);

let bar = 6;
//console.log(++bar);
//console.log(bar);

bar += 45;
bar = bar + 45;

let res = 5 === 5;
//console.log(res);

let str1 = '2';
let str2 = '3';
//console.log(str1 > str2);
let a1 = 4;
let b1 = 5;
if (a1 < b1) {
    let baz = 'sdsd';
    console.log('a1 < b1');
} else if (a1 > b1) {
    console.log('a1 > b1');
    let baz = 'sdsd';
} else {
    console.log('a1 === b1');
    let baz = 'sdsd';
}

let x1 = 5;
let y1 = 6;

if(x1 > 3 && y1 < 10) {
    console.log('it is work!');
}
if((x1 > 3 || y1 < 10) && y1 === 6) {
    console.log('it is work!');
}
if(x1) {

}
if(!x1) {

}

if(!!x1) {

}
if(x1 !== 0) {

}
let var1 = 3;
let var2 = 4;
let num = 3;
//num = (var1 !== var2) ? (var1 < var2) ? 7 : 9 : num + 5;
num = (var1 !== var2) ? 34 : 5;

let test1 = true;

let gh = 0 || 3;

console.log(gh);
switch (true) {
    case 4 > 6:
    case 2:
    case 3:
        console.log(333);
        break;
    case 4:
        console.log(444);
        break;
    case 5:
        console.log(555);
        break;
    //default: console.log('default')
}






