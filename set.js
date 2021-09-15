//set 

class Set {
    constructor (items = {}) {
        this.items = items;
    }

    add(value) {
        if(!this.items.has(value)){
            this.items[value] = value;
            return true;
        }
        return false;
    }

    remove(value) {
        if(this.items.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    has(value) {
        return this.items.hasOwnproperty(value);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.keys(this.items);
    }

    union(otherSet) {
        let value = this.items.values(),
            union = new Set();

        for(let key in value) {
            union.add(value[key]);
        }

        value = otherSet.values();

        for(let key in value) {
            union.add(otherSet[key]);
        }

        return union;
    }

    intersection(otherSet) {
        let value = this.items.values(),
            intersection = new Set();

        for(let key in value) {
            if(otherSet.has(value[key])) {
                intersection.add(value[key]);
            }
        }

        return intersection;
    }

    diffirence(otherSet) {
        let value = this.items.values(),
            diffirence = new Set();

        for(let key in value) {
            if(!otherSet.has(value[key])) {
                diffirence.add(value[key]);
            }
        }

        return diffirence;
    }

    subset(otherSet) {
        let value = this.items.values(),
            
        if(value.size() > otherSet.size()) return false;

        for(let key in value) {
            if(!otherSet.has(value[key])) {
                return false;
            }
        }

        return true
    }
}

let a = new Set()
let b = new Set()
let c = new Set()

c.add('one');

b.add('five');
b.add('six');

a.add('one');
a.add('two');
a.add('three');
a.add('four');

//a.values();
//a.size();

a.remove('four');

//a.values();
//a.size();

c.subset(a);