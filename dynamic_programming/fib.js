const fib_nondp = (n) => {
    if ( n === 1 || n === 2 ) return 1;
    return fib_nondp(n-1) + fib_nondp(n-2);
}

const fib = (n, memo = {}) => {
    if ( n === 1 || n === 2 ) return 1;
    if ( n in memo ) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(50));
