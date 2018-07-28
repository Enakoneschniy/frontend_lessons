(($) => {
    'use strict';

    function foo(a, b) {
        console.log(a, b);
        console.log(Object.values(this));
    }

    const user = {
        name: 'Petya',
        age: 10
    };
    const car = {
        speed: 132,
        weight: 3
    };
    const bar = foo.bind(user);
    const baz = foo.bind(car);
    bar(1, 2);
    baz(3, 4);
    console.log('--------------------');
    foo.apply(car, [5, 6]);
    foo.call(user, 34, 54);

    function sumArgs() {
        const args = [].slice.call(arguments, 0);
        console.log(arguments, args);
        return [].reduce.call(arguments, function (acc, element) {
            return acc + element;
        }, 0)
    }
    console.log(sumArgs(1, 2, 3, 4));

    function delay(func, time) {
        console.log('DELAY');
        return function() {
            console.log('catInfo');
            setTimeout(func, time);
        }
    }
    let cat = {
        age: 123,
        name: 'Толик',
        tail: '40cm',
        showInfo() {
            console.log(this.name, this.age);
        },
    };
    const catInfo = delay(cat.showInfo.bind(cat), 5000);

    catInfo();

    let [a, b] = [1, 3];

    /*let name = cat.name;
    let age = cat.age;*/

    let { name, age, ...smallCat } = cat;
    console.log('distruct', name, age);
    console.log('smallCat', smallCat);

    cat = Object.assign({}, cat, { age: 44 }, { test: 34 });
    console.log(cat);

    $('.btn.sum').click(function (e) {
        //console.log($('li.item'));
        let sum = 0;
        $('li.item').each(function () {
            sum += parseInt($(this).html());
        });
        const strong = $('<strong/>', {
            class: 'test',
            text: sum
        });
        console.log(strong);
        $('#result').html(strong);

       // $('#result').html(sum);
        /*$('li.item').each(() => {
            console.log(this);
        });*/
    });

    $('body').on('click', '.btn.remove', function() {
        $('li.item').each(function () {
            if (parseInt($(this).html()) % 2 === 0) {
                $(this).remove();
            }
        });
        $('.btn.hide').slideUp();
    });
    $('#city').change(function(e) {
        let city = $('#city option:selected').html();
        alert(city);
    });
    //$('select option:selected')





    // $('.btn.sum').click();
})(jQuery);






