
    'use strict';

    //console.log(basket.getProducts());
   /* basket.subscribe((product, basketProducts) => {
        console.log('Subscriber one!');
        console.log(product);
        console.log(basketProducts)
    });

    basket.subscribe((product, basketProducts) => {
        console.log('Subscriber two!');
        console.log(product);
        console.log(basketProducts)
    });*/

   let user = {
       name: 'Vasya',
       age: 45,
       followers: 4000
   };

   user = new Proxy(user, {
       get(target, name) {
          // console.log(target, name);
           if(typeof target[name] === 'number') {
               if(target[name] >= 1000 && target[name] < 1000000) {
                   return (target[name] / 1000).toFixed(1) + 'K';
               } else if(target[name] >= 1000000) {
                   return (target[name] / 1000000).toFixed(1) + 'M';
               }
               return target[name];
           }
           if(typeof target[name] === 'string') {
               return target[name].toUpperCase();
           }
           return target[name];
       },
       set(target, name, value) {
           if(typeof value === 'string') {
               target[name] = value.toLowerCase();
           } else {
               target[name] = value;
           }
       }
   });

   console.log(user.name);

