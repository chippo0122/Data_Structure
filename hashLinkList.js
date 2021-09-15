//寫至get 
//hash table

class hashTable {
    constructor () {
        this.table = [];
    }

    put(key, value) {
        let position = this.hashCode(key);
        
        if(this.table[position] === undefined) {
            this.table[position] = new linkList()
        }
        this.table[position].append(key, value);
    } 

    remove(key) {
        let position = this.hashCode(key);

        if(this.table[position] !== undefined) {
            let current = this.table[position].head;

            while(current.next) {

                if(current.element.key === key) {
                    this.table[position].remove(current.element);

                    if(this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }

                    return true;
                }

                current = current.next;
            }

            if(current.element.key === key) {
                this.table[position].remove(current.element);

                if(this.table[position].isEmpty()) {
                    this.table[position] = undefined;
                }

                return true;
            }

            return false;
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

                current = current.next;
            }

            if(current.element.key === key) {
                return current.element.value;
            }
        }

        return undefined;
    }

    //encode
    hashCode(key) {
        //djb2 hash function
        let hash = 5381;
        
        for(let i = 0; i < key.length; i ++) {
            hash = hash * 33 + key.charCodeAt(i);
        }

        return hash % 1013
    }

    printAll() {
        for(let i in this.table) {
            if(this.table[i] !== undefined) {
                console.log(i, this.table[i]);
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
            current = this.head;

        if(!this.head) {
            this.head = node;
        } else {

            while(current.next !== null) {
                current = current.next
            }

            current.next = node;
        }

        //console.log(node);

        this.length ++;
    }

    remove(item) {
        let current = this.head,
            prev;

        if(current.element.key === item.key) {
            this.head = current.next;
        } else {

            while(current.element.key !== item.key) {
                prev = current;
                current = current.next;
                
            }
    
            prev.next = current.next;
        }

        this.length --;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class valuePair {
    constructor(key, value) {
        this.element = {
            key : key,
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
console.clear();
console.log(a.get('Sue'));

a.remove('Jonathan');

a.printAll();