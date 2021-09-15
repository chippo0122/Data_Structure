//寫至get 
//hash table

class hashTable {
    constructor() {
        this.table = [];
    }

    put(key, value) {
        let position = this.hashCode(key);

        if (this.table[position] === undefined) {
            this.table[position] = new linkList();
        }

        this.table[position].append(key, value);
    }

    remove(key) {
        let position = this.hashCode(key);

        if (this.table[position] !== undefined) {
            this.table[position].remove(key);
        }

        if(this.table[position].isEmpty()) {
            this.table[position] = undefined;
        }
    }

    get(key) {
        let position = this.hashCode(key);

        if(this.table[position] !== undefined) {
            let current = this.table[position].head;
            
            while(current.next) {
                if(current.element.key === key) {
                    return current.element.value;
                }
                current = current.next
            }
            
            if(current.element.key === key) {
                return current.element.value;
            }
        }
    }

    //encode
    hashCode(key) {
        let hash = 0,
            mod = 37;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % mod;
    }

    printAll() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i);
                this.table[i].print();
            }
        }
    }
}

class linkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(key, value) {
        let node = new valuePair(key, value),
            current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }
        this.length++;
    }

    remove(key) {
        let current = this.head,
            prev;

        if (current.element.key === key) {
            this.head = current.next;
        } else {

            while (current.element.key !== key) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }

        this.length--;
    }

    print() {
        let current = this.head;

        if (current !== null) {
            console.log(current.element.key + ' : ' + current.element.value);
        }

        while (current.next !== null) {
            current = current.next;
            console.log(current.element.key + ' : ' + current.element.value);
        }
    }

    isEmpty() {
        return this.length === 0;
    }
}

class valuePair {
    constructor(key, value) {
        this.element = {
            key: key,
            value: value
        }
        this.next = null;
    }

    toString() {
        return `[${this.key} - ${this.value}]`;
    }
}

let a = new hashTable();
a.put('chippo', '0931840008');
a.put('capybara', '0987487487');
a.put('ching-chong', '1100110010');
a.put('Jonathan', '19940531');
a.put('Sue', '19940831');
a.put('Jamie', '19930201')

//console.log(a.get('capybara'));
//a.printAll()
//console.clear();
a.printAll();

console.log('=====================');

a.remove('Sue');
a.remove('chippo');

a.printAll();

console.log('get' + a.get('Jamie'));