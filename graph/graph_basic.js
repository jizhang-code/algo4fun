const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const graph_map = new Map([
    ['a', ['c', 'b']],
    ['b', ['d']],
    ['c', ['e']],
    ['d', ['f']],
    ['e', []],
    ['f', []]
]);

// use a stack, first in last out 
const depthFirstPrint = (graph, source) => {
    const stack = [ source ];
    var output = ["DF=>"];
    
    while( stack.length > 0 ) {
        const current = stack.pop();
        output.push(current);
        for( let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    console.log(output);
};

//use a queue, first in first out
const breadthFirstPrint = ( graph, source) => {
    const queue = [source];
    var output = ["BF=>"];

    while( queue.length > 0 ) {
        const current = queue.shift();
        output.push(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    console.log(output);
};

const test = (graph) => {
    console.log("output for let in");
    for( let subject in graph ) {
        console.log(subject);
    }
    console.log("output for let of");
    for( let subject of graph ) {
        let [key, value] = subject;
        console.log(key);
        console.log(value);
    }
};

console.log(graph);
depthFirstPrint(graph, 'a'); //abdfce
breadthFirstPrint(graph, 'a'); //acbedf
test(graph_map);