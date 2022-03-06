const edges = [
    ['w', 'v'],
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v']
];


//write a function, shortestPath, takes in an array of edges for an undirected graph and two nodes. 
// the function should return the length of the shortest path between a and b. consider the length 
// as the number of edges in the path, not the number of nodes. 
// if there is no path between a and b, then return -1.

const shortestPath = (edges, start, end) => {
    graph = printGraph( edges );

    const visited = new Set([start]);
    const queue = [[start,0]];
    let __shortestPath = Infinity;

    while( queue.length > 0 ) {
        const [node, distance] = queue.shift();
        if( node === end ) {
            return distance;
        };
        for( let neighbor of graph[node] ) {
            if (visited.has(neighbor)) continue;
            visited.add(neighbor);
            queue.push([neighbor,distance+1]);
        }
        console.log(queue);
    }
    return -1;
};

const printGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        let [a, b] = edge;
        if( a in graph) graph[a].push(b); else graph[a] = [b];
        if( b in graph) graph[b].push(a); else graph[b] = [a];
    }

    return graph;
};

//console.log(edges);
console.log(printGraph(edges));
console.log(`shortestPath(edges, 'w','z') => ${shortestPath(edges, 'w', 'z')}`);
