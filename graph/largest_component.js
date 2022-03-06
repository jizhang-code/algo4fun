const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}; // --> 4


const largestComponent = (graph) => {
    let count = 0;
    let visited = new Set();
    let path = [];
    let result = {}, longest = {};

    for( let node in graph) {
        if (explore(graph, node, visited, path) === true) {
            result[path.length] = [...path];
            count = Math.max(count, path.length);
            path = [];
        }
    }
    longest[count] = result[count];
    console.log(longest);
    return count;
}

const explore = (graph, current, visited, path) => {
    if ( visited.has(String(current))) return false;
    visited.add(String(current));
    path.push(current);

    for( let neighbor of graph[current] ) {
        explore(graph, neighbor, visited, path);
    }
    return true;
}

console.log(graph);
console.log(`largestComponent(graph) => ${largestComponent(graph)}`);