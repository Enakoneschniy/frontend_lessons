(() => {
    'use strict';
    const a = document.querySelector('a');
    a.addEventListener('click', (event) => {
        //event.preventDefault();
        let src = event.target.getAttribute('data-src');
        event.target.setAttribute('href', 'https://learn.javascript.ru/dom-console');
        console.log(event.target.getAttribute('data-src'));
        //event.target.
        //return false;
    });

    document.querySelector('.btn').addEventListener('click', () => {
        let input = document.querySelector('.input');
        alert(input.value);
    });
    const figure = document.querySelector('.figure');
    function toggleActive() {
        this.classList.toggle('active');
    }
    figure.addEventListener('mouseover', toggleActive.bind(figure));
    // figure.removeEventListener('mouseover', toggleActive.bind(figure));

    figure.addEventListener('mouseleave', toggleActive.bind(figure));


    let input = document.querySelector('.input');
    input.addEventListener('keyup', (event) => {
        console.log('keyup', event);

    });
    input.addEventListener('keydown', (event) => {
        console.log('keydown', event);
        /*if (/[a-z ]/i.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }*/
    });
    input.addEventListener('input', (event) => {
        console.log('input', event);
    });
    document.querySelector('.parent').addEventListener('click', (event) => {
        console.log(event.target);
    });
    document.querySelector('.child').addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('child');
    });

})();





