//Stack

class Stack{
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.pop();
    }

    clear() {
        this.items = [];
    }

    size() {
        console.log(this.items.length);
    }

    seeValue() {
        console.log(this.items);
    }

    isEmpty() {
        console.log(this.items.length === 0 );
    }
}

let a = new Stack()

a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.pop();
a.clear();

a.size();
a.seeValue();
a.isEmpty();