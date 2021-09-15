//Queue

class Queue {
    constructor( arr = [] ) {
        this.items = arr;
    }

    push(item) {
        this.items.push(item);
        this.seeValue();
    }

    shift() {
        this.items.shift();
        this.seeValue();
    }

    clear() {
        this.items = [];
    }

    seeValue() {
        console.log(this.items);
    }

    isEmpty() {
        console.log(this.items.length === 0);
    }
}

let a = new Queue([1,2,3]);

a.push(4);
a.shift();

a.seeValue();