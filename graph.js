//graph

class Graph {

    constructor() {
        //頂點
        this.vertices = [];
        //連結點
        this.adjList = new Dictionnary();
    }

    //增加頂點
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    //增加邊
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    } 

    toString(){
        let str = ''
        
        for(let i = 0; i < this.vertices.length; i ++) {
            str += `${this.vertices[i]} -> `;
            let link = this.adjList.get(this.vertices[i]);
            for(let j = 0; j < link.length; j ++) {
                str += `${link[j]} `;
            }
            str += '\n';
        } 

        return str;
    }

    initialColor() {
        let color = [];
        for(let i = 0; i < this.vertices.length; i ++) {
            color[this.vertices[i]] = 'white';
        }

        return color;
    }

    bfs(v, callback) {
        let color = this.initialColor(),
            queue = new Queue();

        queue.enqueue(v);

        while(!queue.isEmpty()) {
            let u = queue.dequeue(),
                link = this.adjList.get(u);
            
            color[u] = 'grey';

            for(let i = 0; i < link.length; i ++) {
                let w = link[i];

                if(color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }

            color[u] = 'black';

            if(callback) {
                callback(u)
            }
        }
        
    }

    BFS(v) {
        let color = this.initialColor(),
            queue = new Queue(),
            distance = [],
            pred = [];

        queue.enqueue(v);

        for(let i = 0; i < this.vertices.length; i ++) {
            distance[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }

        while(!queue.isEmpty()) {
            let u = queue.dequeue(),
                link = this.adjList(u);

            color[u] === 'grey';

            for(let j = 0; j < link.length; j ++) {
                let w = link[i];

                if(color[w] === 'white') {
                    queue.enqueue(w);
                    distance[w] += distance[u] + 1;
                    pred[w] = u;
                    color[w] = 'grey';
                }
            }

            color[u] = 'black';
        }

        return {
            distance: distance,
            pred: pred
        }
    }

    dfs(callback) {
        let color = this.initialColor();

        for(let i = 0; i < this.vertices.length; i ++) {
            if(color[this.vertices[i]] === 'white') {
                this.dfsVisit(this.vertices[i], color, callback);
            }
        }
    }

    dfsVisit(u, color, callback) {
        color[u] = 'grey';

        if(callback) {
            callback(u);
        }

        let link = this.adjList.get(u);

        for(let i = 0; i < link.length; i ++) {
            if(color[link[i]] === 'white') {
                this.dfsVisit(link[i], color, callback);
            }
        }

        color[u] = 'black';
    }

    DFS() {
        let color = this.initialColor(),
            d = [],//discover Time
            f = [],//finish Time
            pred = [];//predcessor
        
        for(let i = 0; i < this.vertices.length; i ++) {
            f[this.vertices[i]] = 0;
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null; 
        }

        for(let j = 0; j < this.vertices.length; j ++) {
            if(color[this.vertices[j]] === 'white') {
                this.DFSVisit(this.vertices[j], color, d, f, pred);
            }
        }

        return {
            discovery: d,
            finished: f,
            pred: pred
        }
    }

    DFSVisit(u, color, d, f , pred) {
        console.log('discoverd : ' + u);
        color[u] = 'grey';

        d[u] ++;

        let link = this.adjList.get(u);

        for(let i = 0; i < link.length; i ++) {
            let w = link[i];

            if(color[w] === 'white') {
                pred[w] = u;
                this.DFSVisit(w, color, d, f, pred);
            }
        }

        color[u] = 'black';
        f[u] ++;

        console.log('explored : ' + u);
    }
}

//Queue

class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    length() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

//dictionnary

class Dictionnary {

    constructor() {
        this.items = {};
    }

    set (key , value) {
        this.items[key] = value;
    }

    remove(key) {
        delete this.items[key];
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    get(key) {
        return this.has(key) ?  this.items[key] : undefined ;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        return Object.values(this.items);
    }
}


let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

let graph = new Graph()

for(let i = 0; i < vertices.length; i ++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

//graph.bfs('H', console.log);
//console.log(graph.BFS('A'));

//graph.dfs(console.log);

console.log(graph.DFS());



