(() => {
    let array = [];
    array.push(223);
    array.push(354);
    console.log(array);
    console.log(array.length);
    let lastElement = array.pop();
    console.log(lastElement);
    console.log(array);
    console.log(array.length);
    array.length = 0;

    let mt = [];
    let N = 10;//parseInt(prompt('N', ''));
    for (let row = 0; row < N; row++) {
        mt[row] = [];
        for (let cell = 0; cell < N; cell++) {
            mt[row][cell] = 2;
        }
    }
//console.log(mt);

    let mas = [2, 3, 5, 8, 4, 45];

    /*let a = mas[0];
    let b = mas[1];
    console.log('sum', a + b);*/

    let [x, y, ...newMas] = mas;
    console.log('sum xy', x + y);

    console.log(mas);
    console.log(newMas);

    let xxxArray = [1, 2, 3, 4, 5, 35];
    /*for(let el of xxxArray) {
        newMas.push(el);
    }
    console.log(newMas);*/

    newMas.push(
        ...xxxArray.slice(
            xxxArray.length / 2
        )
    );
    console.log(newMas);

    newMas.splice(3, 1, newMas[3] / 2);
    console.log(newMas);

    newMas.splice(3, 2);
    console.log(newMas);

    let xArray = [1, 2, 3, 4, 5];
    let yArray = [6, 7, 8, 9, 10];

    xArray = yArray.concat(xArray);
    console.log(xArray);

//console.log(resArray);

    function genMatrix() {
        let mt = [];
        let N = 10;
        for (let row = 0; row < N; row++) {
            mt[row] = [];
            for (let cell = 0; cell < N; cell++) {
                mt[row][cell] = 2;
            }
        }
        return mt;
    }

    console.log('-----------------');
    let newMatrix = genMatrix();
    let newMatrix1 = genMatrix();
    console.log(newMatrix);
    console.log(newMatrix1);

    function foo() {
        return [2, 5];
    }

    let [num1, num2] = foo();
    console.log(num1, num2, num1 + num2);

    function genMatrix1(m, n = 10) {
        // n = n || 10;
        // n = n ? n : 10;
        let mt = [];
        for (let row = 0; row < n; row++) {
            mt[row] = [];
            for (let cell = 0; cell < n; cell++) {
                mt[row][cell] = m;
            }
        }
        return mt;
    }

    let mt1 = genMatrix1(43);
    console.log(mt1);

    function bar() {
        console.log(arguments.length);
    }

    bar(1, 2, 3, 6);

    function sum(...args) {
        //let sumArray = 0;
        /*for (let arg of args) {
            sumArray += arg;
        }*/
        /*args.forEach(function(arg) {
            sumArray += arg;
        });

        return sumArray;*/
        /*args = args.map(function(arg) {
            return Math.pow(arg, 2);
        });
        return args.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);*/
        args = args.map(arg => Math.pow(arg, 2));

        return args.reduce((acc, curr) =>  acc + curr, 0);
    }

    console.log(sum(1, 2, 3, 4, 5));

    function myForEach(array, callback) {
        for(let index = 0; index < array.length; index++) {
            callback(array[index], index);
        }
    }
    function test(el, ind) {
        console.log(el, ind);
    }
    myForEach([1, 2, 3, 4, 5], test);

    /*let myFunc = function (message) {
        alert(message);
    };*/

    let myFunc = (message, df) => {
        alert(message);
    };


//myFunc('Hello world');

    let s = (a, b) => a + b;
    console.log(s(2, 2));
    let s1 = a => b => a + b;

    console.log(s1(2)(68));
})();








