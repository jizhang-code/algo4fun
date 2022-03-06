
// how to define a variable
// three ways - var, const, let

var x; // this declares a variable, however the type is unknow
const y = 6;// this declares and defines a variable that can not be mutated
let z; // this also declares a varibale that is only visible in the block

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));

//y = 7; // is this statement ok? NO, because y is declared as "constant"
x = 8; // is this ok? YES, this just assigns a value to x
console.log(x);
console.log(typeof(x));
x = "hello world!"; // is this ok? YES, this just re-assigns a value to x
console.log(x);
console.log(typeof(x));

if ( x !== true ) {
    console.log("it is not true")
}

x = true; // is this ok? yes, re-assignment
console.log(typeof(x));
if ( x !== true ) {
    console.log("it is not true");
} else {
    console.log("it is true");
}

x = [0, 1, 2, 3, 4]; // is this ok? yes, another re-assignment
console.log(typeof(x));

console.log(x[3]); // array is 0-indexed, meaning 3-> 4th element, so it prints 3
console.log(x[5]);
if( x[5] === undefined ) {
    x.push(121);
}
console.log(x[5]);
x.push(222);
console.log(x.length);
console.log(x[6]);
console.log(x[7]);
console.log(x);
console.log(x.pop());
console.log(x);
console.log(x.shift());
console.log(x);

// conceptually, the shift()+push() make the array looks like a queue
// the pop() +push() make the array looks like a stack


// use array to solve problems
// 1. can i sum up all the numbers in the array?
var nums = [2,6,4,14,12,10,8];
console.log(nums.length);
let sum = 0;
for( let i=0; i<nums.length; i++ ) {
    sum = sum + nums[i];
}
console.log(sum);

// 2. can i sort the array in ascending or descending order?
function sort_rule (a,b) {
    return a-b;
}

console.log(sort_rule);
console.log(sort_rule(10, 9));
//console.log(sort_rule);
nums.sort(sort_rule);
nums.sort(function (a,b) { return b-a;});
console.log(nums);

// 3. how can i get the largest num in the array?
nums = [2,5,1,23, 190, 24, 26, 28];
console.log(nums);
let __max_num = -Infinity;
for( let i=0; i<nums.length; i++ ) {
    if( nums[i] > __max_num ) __max_num = nums[i];
}
console.log(__max_num);

let __min_num = Infinity;
for( let i=0; i<nums.length; i++ ) {
    if( nums[i] < __min_num ) __min_num = nums[i];
}
console.log(__min_num);

// 4. how can i compute the multiplication of all nums in the array?
let p = 1;
for( let i=0; i<nums.length; i++) {
    p = p*nums[i];
}
console.log(p);

// 5. how can i compute the mulitplication of even indexed nums in the array?
p = 1;
for( let i=0; i<nums.length; i++ ) {
    if( i%2 > 0 ) continue;
    p = p*nums[i];
}
console.log(p);

p = 1;
for( let i=0; i<nums.length; i=i+2 ) {
    p = p*nums[i];
}
console.log(p);

// 6. how can i compute the multiplication of odd indexed nums in the array?
p = 1;
for( let i=1; i<nums.length; i=i+2 ) {
    p = p*nums[i];
}
console.log(p);

// 7. how i can compute the sum of odd indexed nums the arry
p = 0;
for( let i=1; i<nums.length; i=i+2) {
    p = p + nums[i];
}
console.log(p);






/*


example of algebra equation

bob bought apples, tom bought 5/6 as many as bob's, ketty boght 6/7 as many as tom's. what is the ratio of amount of apple bob bought over ketty?

let x = bob's apple
then tom's apple = 5/6 *x;
then ketty's apple = 6/7 *5/6 *x
ratio = bob's apple / ketty's apple = x / (6/7*5/6*x) = 1/ (6/7*5/6) = 1/(30/42) = 1/(5/7) = 7/5

let 
f(i) = i where i = 1,2,..., N

then 
f(0) = undefined
f(1) = 1
f(2) = 2
...


let
f(i) = 8*i +3 where i > 0
this essential is coordinate function y = 8*x +3 where y can be rewritten as f(x)

then f(1) = 11
f(2) = 19


let 
f(0) = 1;
f(n) = f(n-1) + 1 where n > 0;

then
f(1) = 2;
f(2) = f(1) + 1 = 2 + 1 = 3;
f(3) = f(2) + 1 = f(1) + 1 + 1 = 2 + 1 + 1 = 4;
f(4) = f(3) + 1 = f(2) + 1 + 1 = f(1) + 1 + 1 + 1 = 2 + 1 + 1 + 1 = 5;

add all even indexed nums in the array
means to add nums[0] + nums[2] + nums[4] + ...

let 
f(0) = nums[0]
f(i) = f(i-2) + nums[i] where i >= 2


f(0) = nums[0]
f(2) = f(0) + nums[2] = nums[0] + nums[2]
f(4) = f(2) + nums[4] = f(0) + nums[2] + nums[4] = nums[0] + nums[2] + nums[4]
f(20) = f(18) + nums[20] = f(16) + nums[18] + nums[20] = f(14) + nums[16] + nums[18] + nums[20] = f(12) + nums[14] + nums[16] + nums[18] + nums[20] = ......
= nums[0] + .... + nums[20]
*/

























/*
//x = {1,2,3,4}; // is this ok? not, because each element needs to have key/value pair
x = {'1':1, '2':2, 'name':3, "dog":4, 4:"bob"}; // is this ok?
console.log(x);
console.log(typeof(x));

// an object can be used in such way ==> object.property
*/