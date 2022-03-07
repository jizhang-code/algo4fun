// undirected weighted graph
// [v1, v2, weight]
const edges = [
    [0,1,4],
    [0,7,8],
    [1,7,11],
    [1,2,8],
    [7,8,7],
    [7,6,1],
    [2,8,2],
    [8,6,6],
    [6,5,2],
    [2,5,4],
    [2,3,7],
    [3,5,14],
    [3,4,9],
    [5,4,10]
];

function createGraph(edges) {
    let graph = {};
    for( let edge of edges ) {
        const [v1,v2,w] = edge;
        if( v1 in graph ) graph[v1].push([v2,w]);
        else graph[v1] = [[v2,w]];
        if( v2 in graph ) graph[v2].push([v1,w]);
        else graph[v2] = [[v1,w]];
    }
    return graph;
}

console.log(edges);
console.log(createGraph(edges));

function shortestPath(v1, v2, edges) {
    let graph = createGraph(edges);
    let queue = [[v1, 0, []]];
    let visited = new Set();
    while( queue.length > 0 ) {
        queue.sort(function(a,b){return a[1]-b[1];});
        const [current, weight, path] = queue.shift();
        if( current === v2 ) {
            path.push(v2);
            return [weight, path];
        }
        if( visited.has(current) ) continue;
        visited.add(current);
        let tmp = [...path, current];
        for( let n of graph[current] ) {
            const [node, distance] = n;
            queue.push([node, weight+distance, tmp]);
        }
    }
    return [[]];
}

console.log(`(0=>6) =>  ${shortestPath(0,6,edges)}`);
console.log(`(8=>4) =>  ${shortestPath(8,4,edges)}`);
console.log(`(6=>4) =>  ${shortestPath(6,4,edges)}`);
console.log(`(1=>4) =>  ${shortestPath(1,4,edges)}`);
console.log(`(1=>5) =>  ${shortestPath(1,5,edges)}`);