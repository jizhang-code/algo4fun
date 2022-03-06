//bestSum(targetSum, numbers)
// targetSum = 7,
// numbers = [5,3,4,7]
// output ==> [7]

// targetSum = 7
// numbers = [3,5]
// output ==> []

const bestSum = (targetSum, numbers, memo={}) => {
    if ( targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return [];
    if (targetSum < 0 ) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = bestSum(remainder, numbers, memo);
        if (result !== null ) {
            const combination = [num, ...result];
            if (shortestCombination === null || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(`bestSum(7, [2,3,4,7]) => ${bestSum(7, [2,3,4,7])}`);
console.log(`bestSum(39,[5,7,17,3,2]) => ${bestSum(39, [5,7,17,3,2])}`);
//console.log(howSum(419, [4,6]));