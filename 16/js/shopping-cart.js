function initShoppingCart({ db }) {
    const subscribers = [];
    return Object.freeze({
        addProduct,
        removeProduct,
        getProducts,
        clear,
        subscribe
    });
    function subscribe(callback) {
        subscribers.push(callback);
    }
    function addProduct(product) {
        db.add(product);
        subscribers.forEach(callback => {
            callback(product, db.all())
        });
    }

    function removeProduct(id) {
        db.remove(id);
    }
    function getProducts () {
        return db.all();
    }
    function clear() {
        db.clear();
    }
}
function* Gen() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const idGen = Gen();

class Product {
    constructor({ title, price }) {
        this.title = title;
        this.price = price;
        this.id = idGen.next().value;
    }
}

function DataBase() {
    let db = [];
    return Object.freeze({
        add,
        clear,
        remove,
        all
    });
    function add(product) {
       db = db.concat(product);
    }

    function clear() {
        db = [];
    }

    function remove(id) {
        db = db.filter(product => product.id !== id);
    }

    function all() {
        return Object.freeze(db);
    }
}

let db = DataBase();

let basket = initShoppingCart({ db });

db = null;
