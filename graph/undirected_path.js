const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

//write a function, undirectedPath, that takes in an array edges for an undirected graph
// and two nodes (nodesA, nodeB). The function should return a boolean indicating if or not
// there exists a path between nodeA and nodeB

const undirectedPath = (edges, src, dst) => {

    const graph = {};
    for (let edge of edges) {
        if( edge[0] in graph ) graph[edge[0]].push(edge[1]); else graph[edge[0]] = [edge[1]];
        if( edge[1] in graph ) graph[edge[1]].push(edge[0]); else graph[edge[1]] = [edge[0]];
    }

    const stack = [src];
    const memo = {};
    while( stack.length > 0) {
        const current = stack.pop();
        memo[current] = true;
        if ( current === dst ) return true;
        for( let neighbor of graph[current]) {
            if (memo[neighbor] !== true) {
                stack.push(neighbor);
            }
        }
    }
    return false;
}

console.log(undirectedPath(edges, 'j', 'm')); // --> true