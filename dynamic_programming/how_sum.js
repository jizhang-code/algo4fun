//howSum(targetSum, numbers)
// targetSum = 7,
// numbers = [5,3,4,7]
// output ==> [7] or [3,4]

// targetSum = 7
// numbers = [3,5]
// output ==> []

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return [];
    if (targetSum < 0 ) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers, memo);
        if (result !== null ) {
            memo[remainder] = [num, ...result];
            return memo[remainder];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(`howSum(7, [2,3,4,7]) =>, ${howSum(7, [2,3,4,7])}`);
console.log(`howSum(39,[5,7,17,3,2]) =>, ${howSum(39,[5,7,17,3,2])}`);
console.log(howSum(419, [4,7]));

