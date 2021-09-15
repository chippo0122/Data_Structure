class dictionary {
    constructor() {
        this.items = {}
    }

    set(key, item){
        this.items[key] = item;
    }

    remove(key) {
        if(this.has(key)) {
            delete this.items[key];
            return true;
        }

        return false;
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    clear() {
        this.items = {};
    }

    size () {
        return Object.keys(this.items).length;
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        return Object.values(this.items);
    }

    getItems() {
        return this.items;
    }
}

let a = new dictionary();

a.set('capybara', '0918181818');
a.set('mango', '0987487487');
a.set('chippo', '09123456789')

console.log(a.getItems());

export default {
    dictionary
}