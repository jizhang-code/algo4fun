
// Given an integer array height of length n. there are n vertical lines drawn such that
// the two endpoints of the ith line are (i,0) and (i, height[i]).
// Find two lines that together with the x-axis form the a container, so to contain most water
// Return the max amount of water

// example:
// input height = [1,8,6,2,5,4,8,3,7]
// output 49
// example:
// input height = [1,1]
// output 1

const maxArea = (nums) => {

    let maxArea = 0;

    let left=0;
    let n=nums.length;
    let right=n-1;

    while( left<right ) {
        let distance = right - left;
        let height = Math.min(nums[left], nums[right]);
        let runningArea = distance * height;
        maxArea = Math.max(maxArea, runningArea);

        if(nums[left] < nums[right]) left++;
        else right--;
    }
    return maxArea;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));
