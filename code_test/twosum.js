// problem statement
// given an array of integers and a value, determine if any two integers in the array whose sum is equal to the given value

// [2,4,5,6,11]
// 17
// output true

// [2,5,9]
// 18
// output false

// time complexity
// o(n) = n*n
const twoNumberSum_bruteForce = (target, numbers) => {

    if( numbers.length < 2) return false;

    for (let i=0; i<numbers.length; i++) {
        const remainder = target - numbers[i];
        for (let j=i+1; j<numbers.length; j++) {
            if ( remainder === numbers[j] ) {
                return true;
            }
        }
    }
    return false;
}


console.log(twoNumberSum_bruteForce(10, [2]));
console.log(twoNumberSum_bruteForce(17, [2,4,5,6,11]));
console.log(twoNumberSum_bruteForce(18, [2,5,9]));


const twoNumberSum_map = (target, numbers) => {
    if ( numbers.length < 2 ) return false;
    const memo = {};
    for( let i=0; i<numbers.length; i++ ) {
        memo[numbers[i]] = i;
    }
    for( let j=0; j<numbers.length; j++ ) {
        let remainder = target - numbers[j];
        if ( (remainder in memo) &&  (memo[remainder] !== j ) ) return true;
    }
    return false;
}


console.log(twoNumberSum_map(10, [2]));
console.log(twoNumberSum_map(17, [2,4,5,6,11]));
console.log(twoNumberSum_map(18, [2,5,9]));


const twoNumberSum_map2 = (target, numbers) => {
    if ( numbers.length < 2 ) return [];
    const memo = {};
    for( let i=0; i<numbers.length; i++ ) {
        memo[numbers[i]] = i;  
    }
    for( let j=0; j<numbers.length; j++ ) {
        let remainder = target - numbers[j];
        if( (remainder in memo) && (memo[remainder] !== j) ) return [numbers[memo[remainder]], numbers[j]];
    }
    return [];
}

console.log(twoNumberSum_map2(10, [2]));
console.log(twoNumberSum_map2(17, [2,4,5,6,11]));
console.log(twoNumberSum_map2(18, [2,5,9]));

const twoNumberSum_map3 = (target, numbers) => {
    if ( numbers.length < 2 ) return [];
    const memo = {}
    for (let i=0; i<numbers.length; i++) {
        let remainder = target - numbers[i];
        if ( remainder in memo ) return [numbers[memo[remainder]], numbers[i]];
        memo[numbers[i]] = i;
    }
    return [];
}

console.log(twoNumberSum_map3(10, [2]));
console.log(twoNumberSum_map3(17, [2,4,5,6,11]));
console.log(twoNumberSum_map3(18, [2,5,9]));