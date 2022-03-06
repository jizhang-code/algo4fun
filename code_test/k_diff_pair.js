// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
// a k-diff pair is an integer pair (nums[i], nums[j]), where the following are true
// 0 <=i <j < nums.length
// | nums[i] - nums[j] | == k
//
// nums = [3,1,4,1,5], k = 2
// output = 2
//
// nums = [1,2,3,4,5], k = 1
// output = 4

const findPairs = (nums, k) => {

    if ( nums.length < 2 ) return 0;
    nums.sort(function(a,b){ return b-a;});
    console.log(nums);

    let count = 0;
    for( let i=0; i<nums.length-1; i++ ) {
        if( i===0 || (i>0 && nums[i] !== nums[i-1])) {
            var lo = i;
            var hi = nums.length-1;
            while ( lo < hi ) {
                if (nums[lo] - nums[hi] === k) {
                    count++;
                    while( lo<hi && nums[lo] === nums[lo+1] ) lo++;
                    while( lo<hi && nums[hi] === nums[hi-1] ) hi--;
                    lo++; hi--;
                } else if ( nums[lo] - nums[hi] > k ) {
                    hi--;
                } else {
                    lo++;
                }
            }
        }
    }
    return count;
};

console.log(findPairs([3,1,4,1,5], 2));
console.log(findPairs([3,1,3,1,5], 2));
console.log(findPairs([1,2,3,4,5], 1));
console.log(findPairs([1,3,1,5,4], 0));
