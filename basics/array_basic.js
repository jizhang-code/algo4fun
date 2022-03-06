
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6 );

console.log(result);
console.log(words);

function calc(item, i, array) {
    return item.length > 8;
}
console.log(words.every(calc));
console.log(words.filter(calc));


var list = ['a','b','c','d','e','f','g'];
console.log("list");
console.log(list);
console.log(list.length);

// subset
// 1. slice - immutable, return a modified array
// slice(start, end) - start is inclusive, end is exclusive, 
// end defaults to the length-1 if not present
console.log(list.slice(0,1));
console.log(list.slice(0,4));
console.log(list.slice(2));
console.log(list.slice(4));
console.log(list.slice(1,2));

// 2. splice - mutable
// splice(start, end) - start is inclusive, end is exclusive,
// end defaults to length-1 if not present
console.log(list.splice(6));
console.log(list.splice(4,5));
console.log(list);

// insert
// 1. splice(pos, o, new) - insert 'new' to the pos
console.log(list.splice(list.length, 0, 'aa'));
console.log(list);
console.log(list.splice(list.length-1, 0, 'bb'));
console.log(list);

// 2. push(new) - add to the tail of queue or top of stack
console.log(list.push('cc'));
console.log(list);

var stringarr = [];
stringarr = Array.from("abcde");
console.log(stringarr);

var newArr = stringarr.map(function(item) {
    return item + " is a letter";
});
console.log(stringarr);
console.log(newArr);

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

edges.forEach((item) => {
    let [noeda, nodeb, weight] = item;
    console.log(`node ${noeda} <-> node ${nodeb} has distance ${weight}`);
});

var newEdges = edges.filter((item) => {
    let [nodea, nodeb, weight] = item;
    if( weight > 5 ) return item;
});
console.log(newEdges);

var total = edges.reduce((prev,curr, index, array) => {
    console.log(`prev ==> ${prev}`);
    console.log(`curr ==> ${curr}`);
    return 0;
});
console.log(total);