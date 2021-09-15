//linkList

class LinkList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(item) {
        let node = new Node(item),
            current;

        if (!this.head) {
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

    insertAt(index, item) {
        let node = new Node(item),
            prev,
            current = this.head,
            idx = 0;

        if (index > this.length || index < 0) return;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {

            while (idx < index) {
                prev = current;
                current = current.next;
                idx++;
            }

            node.next = current;
            prev.next = node;
        }

        this.length++;
    }

    removeAt(index) {
        let prev,
            current = this.head,
            idx = 0;

        if (index > this.length || index < 0) return;

        if (index === 0) {
            this.head = current.next;
        } else {

            while (idx < index) {
                prev = current;
                current = current.next;
                idx++;
            }

            prev.next = current.next
        }

        this.length--;
    }

    indexOf(index) {
        let current = this.head,
            idx = 0;

        if (index > this.length || index < 0) return;

        if (index === 0) {
            console.log(this.head);
        } else {

            while (idx < index) {
                current = current.next;
                idx++;
            }

            console.log(current.item);
        }
    }

    size() {
        console.log(this.length);
    }

    isEmpty() {
        console.log(this.length === 0);
    }


}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

let a = new LinkList();
a.isEmpty();
a.append(1);
a.append(2);
a.append(3);

a.insertAt(1, 1.5);

a.indexOf(1);
a.indexOf(3);

a.isEmpty();
