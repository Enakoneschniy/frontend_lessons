'use strict';
let num = 1;

while (num <= 5) {
    console.log(num++);
    //num += 1;
    //num++;
}
console.log('---------------');

do {
    console.log(num++);
} while (num <= 5);

let x;
do {
    x = parseFloat(prompt('input x', ''));
    if (isNaN(x)) {
        alert('x should be number!');
    }
} while (isNaN(x));
console.log(x);

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

let y;
while (true) {
    y = parseFloat(prompt('input y', ''));
    if (isNaN(y)) {
        alert('y should be number!');
    } else {
        break;
    }
}
console.log('y:', y);

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}