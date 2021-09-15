// binary search tree

class binarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        let node = new Node(key);

        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if(node === null) {
            return null
        }

        if(key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                //console.log('hit', node);
                node = null;
                //console.log(node, this.root);
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

    findMinNode(node) {
        if(node) {
            while(node.left !== null && node) {
                node = node.left;
            }

            console.log('find', node);

            return node;
        }
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node === null) {
            return null;
        }

        if (node.key > key) {
            return this.searchNode(node.left, key);
        } else if (node.key < key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        callback(node.key);
        this.preOrderTraverseNode(node.left);
        this.preOrderTraverseNode(node.right);
    }

    postOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        if(node !== null) {
            while(node.right !== null && node) {
                node = node.right;
            }

            return node.key;
        }

        return null;
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        if(node !== null) {
            while(node.left !== null && node) {
                node = node.left;
            }

            return node.key;
        }

        return null;
    }

}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let a = new binarySearchTree();

let items = [11, 7, 15, 5, 3, 6, 9, 8, 10, 13, 12, 14, 20, 18, 25];

for (let i = 0; i < items.length; i++) {
    a.insert(items[i]);
}

a.inOrderTraverse(console.log);
console.log(a);

console.log('====================');
a.remove(15);

a.remove(11);

console.log(a.max(), a.search(3));

a.inOrderTraverse(console.log);

