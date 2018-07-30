(() => {
    'use strict';
    const button = document.querySelector('.click');
    const click = Rx.Observable.fromEvent(button, 'click')
        .throttleTime(1000)
        .scan(count => count + 1, 0);

    click.subscribe(count => console.log(`Clicked ${count} times`));



    const observable = Rx.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);

        setTimeout(() => {
            observer.next(4);
            observer.complete();
            observer.next(68);
        }, 1000);
    });

    observable.subscribe((data) => {
        console.log(data);
    });
    class Product {
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }

    }
    class Basket {
        constructor() {
            this.items = [];
            this.add = new Rx.Subject();
        }

        addProduct(product) {
            this.items.push(product);
            this.add.next(product);
        }
    }

    const basket = new Basket();

    basket.add.subscribe(product => {
        alert(product.title + ' added to basket!');
        //console.log('subscribe:', product);
    });



    const iphone13 = document.querySelector('.iphone');
    const iphoneClick = Rx.Observable.fromEvent(iphone13, 'click');

    iphoneClick
        .throttleTime(1000)
        .map(event => {
          console.log('map', event);
          return event.target;
        })
        .map(button =>  button.innerText)
        .subscribe(button => {
            console.log('subscribe', button);
           // button.style.background = 'green';
            basket.addProduct(new Product('iPhone 13', 3000));
        });


        function load(diskName, callback) {
            setTimeout(() => {
                callback('data from ' + diskName);
            }, 2000);
        }

        function prompt(message, callback) {
            console.log(message);
            setTimeout(() => {
                callback();
            }, 1000);
        }

        /*load('disk1', function (data1) {
            console.log(data1);
            prompt('insert disk2', function () {
                load('disk2', function (data2) {
                    console.log(data2);
                })
            })
        });*/

        function rand() {
            return Math.round(Math.random() * 10);
        }

        function loadPromise(diskName) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    if(rand() < 8) {
                        resolve({
                            status: 'success',
                            parts: [1, 2, 3, 4]
                        });
                    }
                    reject('disk not found!');

                }, 2000);
            });
        }

        function promptPromise(message) {
            return new Promise(function (resolve, reject) {
                console.log(message);
                setTimeout(() => {
                    if(rand() < 8) {
                        resolve('disk inserted');
                    }
                    reject('reading error!');

                }, 2000);
            });
        }

        function install() {
            loadPromise('disk1').then(function(data) {
                console.log(data);
                return data.parts;
                //return promptPromise('insert disk2');
                //return { message: 'Hello World!', status: '200 OK' };
            }).then(function (parts) {
                console.log(parts);
                return loadPromise('disk2');
            }).then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            })
        }

        install();

    let a ={
        status: 'sdfsd',
        products: []
    };


})();