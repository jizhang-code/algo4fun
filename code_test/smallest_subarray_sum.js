// given an array, return the smallest subarray whose sum is greater than sum


const smallestSubarraySum = (nums, sum) => {

    let n = nums.length;
    let runningSum = 0;
    let runningSize = 0;
    let smallestSize = Infinity;
    let left=0;
    let right=0;
    let mp = new Map();
    console.log(nums);
    for( let i=0; i<n; i++ ) {
        // expand to the right
        if( runningSum < sum ) {
            runningSum += nums[i];
            right++;
        }
        // need to remember current subarray
        // shrink to exclude far left until condition is met
        while ( runningSum >= sum ) {
            runningSize = right-left;
            smallestSize = Math.min(smallestSize, runningSize);
            mp.set(runningSum, [left,right]);
            runningSum -= nums[i-(right-left-1)];
            left++;
        }
    }
    return smallestSize;
};

console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],11));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],10));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],9));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],8));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],7));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],6));
console.log(smallestSubarraySum([4,2,2,7,8,1,2,8,1,0],5));
