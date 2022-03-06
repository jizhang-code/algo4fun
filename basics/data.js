
// javascript
// data: int

var number = 1;
//let number = 1;
//const number =1;
var stringnumber = '10';

number = 2;
number = parseInt(stringnumber);
console.log(number);


stringnumber = 'hello world';
number = parseInt(stringnumber);
console.log(number);

var x=10, y=21;
console.log(Math.min(x,y));
console.log(Math.max(x,y));
console.log(Math.pow(x,2));

x = Math.floor(Math.random() * 1000);
y = Math.floor(Math.random() * 1000);
console.log(x);
console.log(y);

// when n is set to 19
// this function calls itself 
// fib(18), fib(17), fib(16), ..., f(2), f(1)

// recursive call and its tree structure
// use a map to memorize and reduce the repeated computation
const fib =(n, memo={}) => {
    if (n===1) return 1;
    if (n===2) return 1;
    if( n in memo ) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    console.log(memo);
    return memo[n];
};


/*
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
*/

console.log(fib(19));
//console.log(fib(100));


// what is an array
// array is indexed and continuous structure
// __________________________________________
//   |  |  |  |  |  |  |  |  |  |  |  |  |  |
// ------------------------------------------
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13

var nums = [11,45,67,98,101,7,29];
console.log(nums);
console.log(nums[1]);

var maxNum = (nums) => {
    if( nums.length < 1 ) return 0;
    let __max_num = -Infinity;
    for( var i=0; i<nums.length; i++ ) {
        __max_num = Math.max(__max_num, nums[i]);
        console.log("i::__max_num==>" + i + "::" + __max_num);
    }
    return __max_num;
};
console.log(maxNum(nums));


nums = [1,2,1,3,4,1,2,4,3];
// if you need to write a function to return the unique numbers in the array, and remove the duplicates
// input : [1,2,1,3,4,1,2,4,3]
// output : 4, [1,2,3,4,_,_,_,_,_]

// it might be easir to sort it then work on a sorted array by ascending order
// the input then becomes [1,1,1,2,2,3,3,4,4]
// we can scan the array using a window defined by left and right
// keep increment right until left-v is different from right-v and we know find 1 unique number
// then reset the window, and repeat the process until the end of array

const removeDuplicate =(nums) => {
    if( nums.length < 1 ) return 0;
    nums.sort(function(a,b){return a-b;});

    let count = 0;
    let left=0;
    let right=0;
    let pos=0;

    while( right < nums.length ) {
        left = right;
        right = left + 1;
        while( nums[left] === nums[right] ) right++;
        count++;
        nums[pos] = nums[left];
        pos++;
    }
    for( let i=pos; i<nums.length; i++ ) {
        nums[i] = '*';
    }
    console.log(nums);
    return count;
};

console.log(nums);
console.log(removeDuplicate(nums));


var __built_in_map = new Map();
__built_in_map.set('nancy', 98);
__built_in_map.set('dog', "like meat");
__built_in_map.set('dog', "also like fruit");

console.log(__built_in_map);
let key = 'dog';
key = 'cat';
if( __built_in_map.has(key) ) {
    console.log(__built_in_map.get(key));
} else {
    console.log( key + " don't exit in the map");
}

let myset = new Set([nums]);
console.log(myset);
myset.add("a dog");
console.log(myset);
myset.add(__built_in_map);
console.log(myset);
myset.add("a dog");
console.log(myset);

var first_name = 'hello world! "jian zhang"';
console.log(first_name);
console.log(typeof(first_name));

var my_memo = {};
console.log(typeof(my_memo));

var my_set = new Set();
var my_map = new Map();
console.log(typeof(my_set));
console.log(typeof(my_map));

console.log(typeof(fib));

var my_array = [["first_name", "last_name", "age"], [1,2], [90, 10, 20, 30, 40]];
console.log(my_array);
console.log(my_array.length);
console.log(my_array[0].length);
console.log(my_array[2].length);
console.log(typeof(my_array));