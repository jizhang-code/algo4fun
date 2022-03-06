
// use a edge to describe the two vertexes and the weight on the edge between them
// for example: [1,2,8] ==> there is an edge between vertex 1 and vertex 2, and its weight is 8

const edges = [
    [0,1,4],
    [0,7,8],
    [1,7,11],
    [1,2,8],
    [7,8,7],
    [7,6,1],
    [6,8,6],
    [8,2,2],
    [2,3,7],
    [2,5,4],
    [6,5,2],
    [3,5,14],
    [3,4,9],
    [5,4,10]
];

const weightedGraph = (edges) => {

    let graph = {};
    let adja = [];
    let adjb = [];
    for( let edge of edges ) {
        const [nodea, nodeb, weight] = edge;
        adja = [nodeb, weight];
        adjb = [nodea, weight];
        if( nodea in graph ) graph[nodea].push([nodeb,weight]);
        else graph[nodea] = [[nodeb,weight]];
        if( nodeb in graph ) graph[nodeb].push([nodea,weight]);
        else graph[nodeb] = [[nodea, weight]];
    }
    return graph;
};

const shortestPath = (start, end, edges) => {
    const graph = weightedGraph(edges);
    console.log(`compute shortest path for (${start} ==> ${end})`);
    console.log(graph);

    let queue = [[start, 0]];
    let visited = new Set([start]);

    while(queue.length > 0) {
        // sort by weight so it will start with lowest weight
        queue.sort(function(a,b) {return a[1]-b[1];});
        console.log(queue);
        let [current, distance] = queue.shift();
        if( current === end ) return distance;
        for( let neighbor of graph[current] ) {
            let [node, weight] = neighbor;
            if(visited.has(node)) {
                if ( node === start ) continue;
                let __weight = weight + distance;
                queue.forEach(function(item,i) {
                    if( item[0] === node && item[1] > __weight ) {
                        //console.log(`node = ${node}, old distance = ${item[1]}, new distance = ${__weight}`);
                        item[1] = __weight;
                    }
                });
                continue;
            }
            visited.add(node);
            queue.push([node, weight+distance]);
        }
    }
    return -1;
};

const shortestPath2 = (start, end, edges) => {
    const graph = weightedGraph(edges);
    console.log(`compute shortest path for (${start} ==> ${end})`);
    console.log(graph);

    let queue = [[start,0]];
    let visited = new Set([start]);
    let shortest = [];

    // cost : o(v)
    while( queue.length > 0 ) {
        queue.sort(function(a,b){return a[1]-b[1];});
        console.log(queue);
        let [current, distance] = queue.shift();
        if( shortest.length < 1 ) shortest = [[current,distance]];
        else shortest.push([current,distance]);
        if( current === end ) {
            shortest= cleanArray(shortest);
            return shortest;
            //return distance;
        }
        console.log(`==> [${current}, ${distance}]`);
        //if( current === 8 ) console.log(visited);
        if( !(current in graph) ) return [];
        let num_neighbors = 0;
        let num_neighbors_visited = 0;
        let smallest_weight = Infinity;
        let smallest_node = null;
        // cost : o(e)
        for( let neighbor of graph[current] ) {
            let [node, weight] = neighbor;
            num_neighbors++;
            if( visited.has(node) ) {
                num_neighbors_visited++;
                if( node === start ) continue;
                for( let i=0; i<queue.length; i++ ) {
                    let item = queue[i];
                    if( item[0] === node && item[1] > (weight+distance) ) {
                        item[1] = weight + distance;
                console.log(`"visited ==> [${node}, ${weight}]`);
                        for( let neighbor of graph[node]) {
                            let [_x, _y] = neighbor;
                            if( _x !== current && visited.has(_x) ) {
                                for( let j=0; j<shortest.length; j++ ) {
                                    if (shortest[j][0] === _x ) {
                                        console.log(`"distance = ${item[1]}`);
                                        if( item[1] < shortest[j][1] ) {
                                            shortest[j][0] = 399;
                                            shortest[j][1] = 399;
                                        }
                                    }
                                    if (shortest[j][0] === item[0]) {
                                        
                                    }
                                }
                            }
                        }
                    }
                }
                continue;
            }
            if( smallest_weight > weight ) {
                smallest_weight = weight;
                smallest_node = node;
            }
            visited.add(node);
            queue.push([node, weight+distance]);
        }
        if( smallest_node !== null ) shortest.push([smallest_node,smallest_weight+distance]);
        if( smallest_node === null || num_neighbors === num_neighbors_visited ) {
            //console.log(`[${current}, ${distance}]`);
            // need to remove this from shortest list
            shortest.forEach(function(item,i) {
                //console.log(item);
                if( item[0] === current ) {
                    item[0] = 399;
                    item[1] = 399;
                }
            });
            //console.log("shortest list ==>");
            //console.log(shortest);
        }
    }
    console.log(graph);
    return [];
};

// o(nlogn)
const cleanArray = (array) => {
    // sort it first;
    // cost : o(nlogn)
    array.sort(function(a,b) {
        return a[1]-b[1];
    })
    // flag dup
    // cost : o(n)
    for( let i=0; i<array.length-1; i++ ) {
        if( array[i][0] === array[i+1][0] && array[i][0] !== 399 ) {
            array[i][0] = 399;
            array[i][1] = 399;
        }
    }
    // sort it again
    // cost : o(nlogn)
    array.sort(function(a,b){
        return a[1]-b[1];
    })
    // remove dup
    // cost : o(n)
    let index = -1;
    for( let i=0; i<array.length; i++ ) {
        if( array[i][0] === 399 ) {
            index = i;
            break;
        }
    }
    // cost : o(1)
    array.splice(index);
    return array;
};

console.log(shortestPath2(8,4,edges));
console.log(shortestPath2(9,4,edges));
console.log(shortestPath2(7,4,edges));
console.log(shortestPath2(1,4,edges));

