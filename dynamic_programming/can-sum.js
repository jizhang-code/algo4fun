//canSum(targetSum, numbers)
// targetSum = 7,
// numbers = [5,3,4,7]
// output ==> true

// targetSum = 7
// numbers = [3,5]
// output ==> false

const canSum_nondp = (targetSum, numbers) => {
    if ( numbers.length < 1 ) return false;
    if (targetSum === 0 ) return true;
    if (targetSum < 0 ) return false;
    for( let i=0; i<numbers.length; i++ ) {
        const remainder = targetSum - numbers[i];
        if (canSum_nondp(remainder, numbers) === true) return true;
    }
    return false;
}

const canSum = (targetSum, numbers, memo={}) => {
    if ( numbers.length < 1 ) return false;
    if ( targetSum === 0 ) return true;
    if ( targetSum < 0 ) return false;
    if ( targetSum in memo ) return memo[targetSum];
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[remainder] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [1,3,4,6]));
console.log(canSum(3700, [7,14]));
