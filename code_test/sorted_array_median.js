
// given two sorted arrays nums1 and nums2 of size m and n respectively
// return the median of the two sorted array


const findMedianSortedArray = (nums1, nums2) => {

    let nums = [...nums1, ...nums2];
    nums.sort(function(a,b){ return a-b;});
    console.log(nums);

    let n = nums.length;
    if( n%2 === 0 ) return (nums[n/2]+nums[n/2-1])/2;
    else return nums[n/2-0.5];
}

console.log(findMedianSortedArray([1,3], [2,4]));
console.log(findMedianSortedArray([1,3], [2]));
console.log(findMedianSortedArray([-1,-2],[3]));