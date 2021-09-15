// this is binary search tree

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        let newNode = new Node(key);

        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        //right side
        if(newNode.key > node.key) {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
        //left side
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }

    remove(key) {
        return this.removeNode(this.root, key);
    }

    removeNode(node, key) {

        if(node === null) {
            return null
        }

        if(node.key > key) {
            this.removeNode(node.left, key);
        } else if(node.key < key) {
            this.removeNode(node.right, key);
        } else {// node equal to key
            
            //if node is leaf
            if(node.right === null && node.left === null) {
                node = null;
                return node;
            }

            //if node has one child node
            if(node.right === null) {
                node = node.left;
                return right;
            } else if(node.left === null) {
                node = node.right;
                return node;
            }

            //if node has two children
            let aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux);
            return node;
        }
    }

    findMinNode(node) {
        if(node) {
            while(node.left !== null && node) {
                node = node.left;
            }

            return node;
        }

        return null;
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {

        if(node === null) {
            return false;
        }

        if(node.key > key) {
            this.searchNode(node.left, key);
        } else if(node.key < key) {
            this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if(node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback) {
        if(node !== null) {
            callback(node.key);
            this.inOrderTraverseNode(node.left, callback);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if(node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {

        if(node) {

            while(node.left !== null && node) {
                node = node.left;
            }

            return node.key;
        }

        return null;
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {

        if(node) {
            
            while(node.right !== null && node) {
                node = node.right;
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


//function print (value) {
//    console.log(value);
//}

let a = new binarySearchTree();

a.insert(10);
a.insert(9);
a.insert(11);
a.insert(7);
a.insert(13);
a.insert(23);

//a.inOrderTraverse(console.log);
//a.preOrderTraverse(console.log);
//a.postOrderTraverse(console.log);

console.log(a.max(), a.min());
console.log(a.search(10));
console.log(a.search(8));

a.remove(10);

console.log(a);