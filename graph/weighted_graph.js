
// edge syntax : vertex, vertex, distance
var edges = [
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


// build a weighted graph
// 0:[[1,4], [7,8]]

const weightedGraph = (edges) => {
    let graph = {};
    for( let edge of edges ) {
        // [v,v,w] ==> v: [v,w]
        if( edge[0] in graph ) graph[edge[0]].push([edge[1], edge[2]]);
        else graph[edge[0]] = [[edge[1], edge[2]]];
        if( edge[1] in graph ) graph[edge[1]].push([edge[0], edge[2]]);
        else graph[edge[1]] = [[edge[0], edge[2]]];
    }
    return graph;
};

console.log(edges);
console.log(weightedGraph(edges));

const shortestPath = (src, tgt, graph) => {
    let queue = [[src, 0]];
    let visited = new Set([src]);

    while( queue.length > 0 ) {
        queue.sort(function (a,b){return a[1]-b[1];});
        //console.log(queue);
        const [current, distance] = queue.shift();
        if( current === tgt ) {
            return distance;
        }
        for (let neighbor of graph[current]) {
            //console.log(queue);
            const [ node, weight ] = neighbor;
            if( visited.has(node) ) {
                if( node === src ) continue;
                // check and update the weight
                let __weight = weight + distance;
                queue.forEach(function(item,i) {
                    if( item[0] === node && item[1] > __weight ) {
                        queue[i][1] = __weight;
                    }
                });
                //console.log(queue);
                continue;
            }
            visited.add(node);
            queue.push([node, distance+weight]);
            //console.log(queue);
        }
    }
    return -1;
};

graph = weightedGraph(edges);
console.log(`(0=>6) == ` + shortestPath(0,6,graph));
console.log(`(8=>4) == ` + shortestPath(8,4,graph));
console.log(`(6=>4) == ` + shortestPath(6,4,graph));
console.log(`(1=>4) == ` + shortestPath(1,4,graph));
console.log(`(1=>5) == ` + shortestPath(1,5,graph));


edges = [
    [1,2,3],
    [1,3,1],
    [3,2,1]
];
graph = weightedGraph(edges);
console.log(graph);
console.log(`(1=>2) == ` + shortestPath(1,2,graph));

edges = [
    [1,2,10],
    [1,3,1],
    [3,4,1],
    [4,5,1],
    [5,6,1],
    [6,2,1]
]

graph = weightedGraph(edges);
console.log(graph);
console.log(`(1=>2) == ` + shortestPath(1,2,graph));