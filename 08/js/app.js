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

for (let i = 1; i <= 5; i++) {
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
console.log('-----------------');

let arNumbers = [1, 2, 3, 4, 5, 6];
let arStrings = ['fff', 'cccc', 'ddddd'];
let arAnyData = ['fff', 3, true, 4, 'ssds'];
console.log(arNumbers);
console.log(arStrings);
console.log(arAnyData);

let temArray = [];
temArray.push(3);
temArray.push(4);
temArray.push(35, 5, true, 'asdas');
temArray.unshift(333);
temArray.pop();

console.log('==================');

let arNumbers1 = [1, 2, true, 4, false, 6];

for (let index = 0; index < arNumbers1.length; index++) {
    console.log(index, arNumbers1[index]);
}

for (let index in arNumbers1) {
    console.log(index, arNumbers1[index]);
}

for (let element of arNumbers1) {
    console.log(element);
}
for (let element of arNumbers1) {
    element = element + 3;
}
console.log(arNumbers1);
for (let index in arNumbers1) {
    arNumbers1[index] = arNumbers1[index] + 3;
}
console.log(arNumbers1);

for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
        console.log(`${a} * ${b}:`, a * b);
    }
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
console.log(matrix);
for (let row = 0; row < matrix.length; row++) {
    for (let cell = 0; cell < matrix[row].length; cell++) {
        console.log(`matrix[${row}][${cell}]`, matrix[row][cell]);
    }
}
