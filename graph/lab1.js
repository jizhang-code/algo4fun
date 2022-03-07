
// DAG == Directed Acyclic Graph
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    //g: ['h', 'j'],
    h: ['o', 'p'],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
    o: [],
    p: []
};

function hasPath(v1, v2, graph) {
    if( v1 === v2 ) return true;
    for( let n of graph[v1] ) {
        if( hasPath(n, v2, graph) === true ) return true;
    }
    return false;
}

function whatPath(v1, v2, graph) {
    let queue = [[v1, []]];
    let visited = new Set();
    while( queue.length > 0 ) {
        let [current, prev] = queue.shift();
        if( current === v2 ) {
            prev.push(v2);
            return prev;
        }
        if( visited.has(current) ) {
            continue;
        }
        visited.add(current);
        let path = [];
        path = [...prev, current];
        for( let n of graph[current] ) {
            queue.push([n,path]);
        }
    }
    return [];
}

console.log(`hasPath('f','k', graph) ==> ${hasPath('f','g',graph)}`);
console.log(whatPath('f','k',graph));
console.log(`hasPath('k','o',graph) ==> ${hasPath('k','o', graph)}`);
console.log(whatPath('k','o',graph));
console.log(`hasPath('f','p',graph) ==> ${hasPath('f','p',graph)}`);
console.log(whatPath('f','p',graph));
console.log(`hasPath('i','o',graph) ==> ${hasPath('f','p',graph)}`);
console.log(whatPath('i','o',graph));