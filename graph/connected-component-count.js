// write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
// the function should return the number of connected components within the graph

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};


const connectedComponentsCount = (graph) => {

    let count = 0;
    const visited = new Set();
    
    for( let node in graph) {
        if( explore(graph, node, visited) === true) {
            count++;
        }
    }
    return count;
}

const explore = (graph, current, visited) => {
    if( visited.has(String(current))) return false;
    console.log(visited);
    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }
    return true;
}

console.log(`connectedComponentsCount(${graph}) => ${connectedComponentsCount(graph)}`);
