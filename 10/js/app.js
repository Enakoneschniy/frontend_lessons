;(() => {
    'use strict';

    let foo = a => b => a + b;

    let bar = a => b => c => a + b + c;

    let step1 = bar(2);
    let step2 = step1(3);
    let step3 = step2(4);

    /*console.log(step1);
    console.log(step2);
    console.log(step3);
    console.log(bar(2)(3)(4));*/

    function f1(a, b) {
        return function () {
            return a + b;
        }
    }

    //console.log(f1(2, 3)());

   /* f1.create = function (a) {
        return a + 3
    };
    console.log(f1.create(2), f1(2, 4)());*/

    let fact = function factorial(n) { // n!
        if (n === 1) {
            return 1;
        }

        return n * factorial(n - 1);
    };

    const bazzz = fact;
    fact = '';

    console.log(bazzz(5));

    const frodo = {
        name: 'Frodo',
        age: 500,
        phone: 12345436,
        'user-name': '@frodo'
    };
    frodo['email'] = 'frodo@gmail.com';
    console.log(frodo);
    console.log(frodo.name, frodo['age'], frodo['user-name'])
    const arr = ['a1', 'a2', 'a3'];
    for(const el of arr) {
        frodo[el] = 0;
    }
    console.log(frodo);
    console.log(Object.keys(frodo));
    console.log(Object.values(frodo));
    function redSum (acc, el) {
        return acc + el.price;
    }
    const phone = {
        name: 'iPhone',
        price: 1000,
        model: 'X',
        test1: function () {},
        test2() {},
        test3: () => {},
        toString() {// override toString method
           return `${this.name} ${this.model} price: $${this.price}`;
        },
        accessoriesPrice: () => this.accessories.reduce(redSum, 0),
        /*accessoriesPrice() {
            return this.accessories.reduce(redSum, 0);
        },*/
        accessories: [
            {
                name: 'Розовый чехол',
                price: 123
            },
            {
                name: 'Белый чехол',
                price: 45
            }
        ],
        prop: {
            title: 'test title',
            prop: {

            }
        }
    };

    console.log(phone.toString());
    console.log(phone.accessories[0].name);
    console.log(phone.accessoriesPrice());

    //alert(phone);
})();