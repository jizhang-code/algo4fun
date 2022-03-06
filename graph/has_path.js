const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

// write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph 
// and two nodes (src, dst). The function should return a boolean indicating if or not there exists a directed
// path between the source and destination nodes.

const hasPath = (graph, src, dst) => {
    const stack = [src];

    while( stack.length > 0) {
        const current = stack.pop();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return false;
}

console.log(hasPath(graph, 'f', 'k')); // true;
console.log(hasPath(graph, 'f', 'j')); // false;

// write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph 
// and two nodes (src, dst). The function should return an array of nodes representing a path between src and dst

const hasPath2 = (graph, src, dst) => {
    const stack = [src];
    const path = [];

    while( stack.length > 0 ) {
        const current = stack.pop();
        path.push(current);
        if( current === dst ) {
            return path;
        }
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return [];
}

console.log(hasPath2(graph, 'f', 'k')); // [f,i,k];
console.log(hasPath2(graph, 'f', 'j')); // [];