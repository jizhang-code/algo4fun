// Given an array, return max sum of a subarray of size k

// solutions:
// a sliding window problem
// window size == subarray size
// running max = sum of the subarray
const maxSumSubarray2 = (nums, k) => {
    let n = nums.length;
    let sum = -Infinity;
    let xs = 0;
    for( let i=0; i<n; i++ ) {
        xs += nums[i];
        if( i >= k-1 ) {
            sum = Math.max(sum, xs);
            xs -= nums[i-(k-1)];
        } 
    }
    return sum;
}
console.log(maxSumSubarray2([10,11,23,23,4,5,6,7,8,9,10,20,20,21,13,24,25,16,20,1,2,3,4,5,6,7,9], 10));