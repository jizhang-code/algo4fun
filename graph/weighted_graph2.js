const { ECDH } = require("crypto");

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

// @param edges
// @return adjacent list of the graph
function buildGraph(edges) {
    let graph = {};
    for( let edge of edges ) {
        const [v1, v2, w] = edge;   
        if( v1 in graph ) {
            graph[v1].push([v2,w]);
        } else graph[v1] = [[v2,w]];
        if( v2 in graph ) {
            graph[v2].push([v1,w]);
        } else graph[v2] = [[v1,w]];
    }
    return graph;
};

console.log(buildGraph(edges));