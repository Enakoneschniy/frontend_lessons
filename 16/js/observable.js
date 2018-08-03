function Observable(target) {

    return new Proxy(target, {
        apply(target, thisArg, args) {
            console.log('Test!');
            target(...args);
        }
    });
}