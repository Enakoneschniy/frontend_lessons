;(() => {
    'use strict';
    //open(`https://www.google.com/search?q=${prompt('Query','')}`);
    function* Colors() {
        let colors = ['red', 'green', 'yellow'];
        let index = 0;
        while(true) {
            if(index > 2) {
                index = 0;
            }
            yield colors[index++];
        }
    }

    const colorGen = Colors();
    /*console.log(colorGen.next());
    console.log(colorGen.next());
    console.log(colorGen.next());
    console.log(colorGen.next());*/

    /*let interval = setInterval(() => {
        document.bgColor = colorGen.next().value;
    }, 5000);
*/
   /* setTimeout(() => {
        clearInterval(interval);
        document.bgColor = 'pink';
    }, 30000);*/

    function* Foo(c) {
        let a = yield `c: ${c}`;
        yield `a + 5 + c: ${a + 5 + c}`;
    }

    const bar = Foo(8);

    /*console.log(bar.next());
    console.log(bar.next(4));
    console.log(bar.next());*/

    let header = document.createElement('header');
    header.innerText = 'Hello World!';
    let wrapper = document.getElementById('wrapper');
    wrapper.appendChild(header);
    let startBtn = document.getElementById('start-btn');
    //startBtn.onclick = () => { alert('click sdsd') };

    function* Lights() {
        const lights = document.getElementsByClassName('light');
        let index = 0;
        while (true) {

            yield (() => {

                lights[index++].classList.remove('active');
                if(index >= lights.length) {
                    index = 0;
                }
                lights[index].classList.add('active');
            })();


        }
    }
    const switchLights = Lights();

    function switcher() {
        let step = 0;
        let interval = setInterval(() => {
            switchLights.next();
            step++;
            if (step === 2) {
                clearInterval(interval);
                setTimeout(() => {
                    switchLights.next();
                    timeMachine(seconds);
                }, 5000);
            }
        }, 500);
    }
    function timeMachine(seconds) {
        const redLight = document.querySelector('.light.red.active');
        redLight.innerHTML = seconds.toString();
        const interval = setInterval(() => {
            seconds--;
            redLight.innerHTML = seconds.toString();
            if (seconds === 0) {
                clearInterval(interval);
                redLight.innerHTML = '';
                switcher()
            }
        }, 1000);
    }
  /*  startBtn.addEventListener('click', () => {
        switcher();
    });*/
    let seconds = 10;

    timeMachine(seconds);


})();










