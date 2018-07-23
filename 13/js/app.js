(() => {
    'use strict';

    function makeCounter() {
        let num = 0;

        return function () {
            return num++;
        }
    }

    let counter = makeCounter();

   /* console.log(counter());
    console.log(counter());
    console.log(counter());*/

    let arrFunctions = [];

    //for(var i = 0; i < 6; i++) {
    for(let i = 0; i < 6; i++) {
        arrFunctions[i] = function () {
            //console.log(i);
        }
        /*arrFunctions[i] = (function (i) {
            return function () {
                console.log(i);
            }
        })(i);*/
    }
    arrFunctions.forEach(func => {
        func();
    });

    function User() {
        this.name = 'Admin';
        this._test = 'test';

    }

    let user = new User();
   // console.log(user.name);

    function Human(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.eyes = 2;
            /*getReligion() {
                return religion;
            },
            setReligion(value) {
                religion = value;
            },
            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }*/
    }
    Human.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };

    function Cyclops(firstName, lastName, age) {
        Human.apply(this, [firstName, lastName, age]);
        this.eyes = 1;
        this.color = 'green';
    }

    Cyclops.prototype = Object.create(Human.prototype);

    let petya = new Human('Petya', 'Petrov', 26);

    let cyclops = new Cyclops('Kolya', 'Ivanov', 46);

    /*console.log(petya);
    console.log(cyclops);
    console.log(cyclops.getFullName());
    console.log(petya.getFullName());*/
    //console.log(petya.getReligion());

    Array.prototype.pow = function (pow) {
        return this.map(num => Math.pow(num, pow));
    };
    //console.log([1, 2, 3, 4, 5, 6].pow(2));

    Number.prototype.round = function () {
      return Math.round(this);
    };

    //console.log(45.67.round());

    let arr = [];
    arr.push(1);
    arr.push(3);
    arr.push(334);
    arr.push('sdfsdf');
    //console.log(arr);

    console.log('-----------------------');



    class Transport {
        constructor(weight) {
            this.weight = weight;
        }

        getWeight() {
            return this.weight;
        }
    }
    class People {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Bus extends Transport {
        constructor(weight, peoplesCount) {
            super(weight);
            this.peoplesCount = peoplesCount;
            this.peoples = [];
            this.events = document.createElement('span');
        }
        add(people) {
            if (people instanceof People) {
                this.peoples.push(people);
                const event = new CustomEvent("added", {
                    people: people
                });
                this.events.dispatchEvent(event);
            }
        }

        list() {
            return this.peoples;
        }

    }

    let transport = new Transport(456);
    let bus = new Bus(10, 50);
    bus.events.addEventListener('added', function (event) {
       // alert('Human in bus');
        console.log(bus.list());
    });
    console.log(transport);
    console.log(bus);
    document.querySelector('button').addEventListener('click', () => {
        bus.add(new People('Nick', 56));
    });















})();