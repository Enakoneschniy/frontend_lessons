/hello/.test('hello world!');
/hello/igm.test('Hello world!');
/^hello/i.test('Hello world!');
/^[a-z0-9_\.\-]+@[a-z0-9_\.\-]+\.[a-z]+$/i.test('hello@sad.com');
'+380(99)345-45-66'.replace(/(\+38|[\-\)\(])/g,'');
/^\+380\((68|67|93|63|95|50|99)\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test('+380(99)345-45-66');
/[a-z0-9_\.\-]+@([a-z0-9_\.\-]+\.[a-z]+)/ig.exec('herthert eternhe hello@sad.com. rweerwrwer qwerty@gmail.com');

function getProp(obj, propName) {
    return obj[propName];
}

const user = {
    name: 'User',
    age: 34
};
console.log(getProp(user, 'name'));
window.onerror = function (message, source, lineno, colno, error) {
    console.log(message, source, lineno, colno, error);
};
//try {
    console.log(getProp(null, 'age'));
    console.log('Lalalal');
/*} catch (error) {
    console.log(error.message);
    window.open('https://stackoverflow.com/search?q='+error.message);
}*/

function divide(a, b) {
    if(b === 0) {
        throw new Error('Divide by zero');
    }
    return a / b;
}
//try {
    divide(4, 0);
/*} catch (error) {
    console.log(error.message);
}*/

console.log('END!');


