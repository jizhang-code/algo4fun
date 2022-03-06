// Given an array, return the number of subarray where the number of different integers is exactly K

// solutions: a sliding window problem
// sliding window size: min = k and can grow to the right
// time complexity = n*n
const subarrayWithKdiff =(nums, k) => {

    let n = nums.length;
    let count = 0;
    console.log(nums);
    for( let i=0; i<n-k+1; i++ ) {
        let mp = new Map();
        let dup = 0;
        for( let j=i; j<i+k; j++ ) {
            if( mp.has(nums[j]) === false ) mp.set(nums[j],j);
        }
        if( mp.size === k ) count++;
        // expand to the right
        for( let j=i+k; j<n; j++ ) {
            //console.log("i:j=" + i + ":" + j);
            //console.log(count);
            //console.log(mp);
            if( mp.has(nums[j]) === false ) mp.set(nums[j],j);
            if( mp.size === k ) count++;
            if( mp.size > k ) break;
        }
    }
    return count;
};

// time complexity = n;
// build two count maps left and right
const subarrayWithKdiff_on = (nums,k) => {
    let ans = 0;
    let left=0, right=0;
    let leftUniques = 0;
    let leftDic = {};
    let rightUniques = 0;
    let rightDic = {};
    let n = nums.length;

    console.log(nums);
    for( let i=0; i<n; i++ ) {
        leftDic[nums[i]] = leftDic[nums[i]] ? leftDic[nums[i]] + 1 : 1;
        rightDic[nums[i]] = rightDic[nums[i]] ? rightDic[nums[i]] + 1 : 1;
        if( leftDic[nums[i]] === 1 ) leftUniques++;
        if( rightDic[nums[i]] === 1 ) rightUniques++;

        console.log("i:" + i);
        while( leftUniques > k ) {
            if( leftDic[nums[left]] === 1 ) {
                leftUniques--;
            }
            leftDic[nums[left]] -= 1;
            left++
        }
        console.log("leftUn:" + leftUniques);
        console.log("left:" + left);

        while( rightUniques >= k ) {
            if( rightDic[nums[right]] === 1) {
                rightUniques--;
            }
            rightDic[nums[right]] -= 1;
            right++;
        }
        console.log("rightUn:" + rightUniques);
        console.log("right:" + right);

        ans += right - left;
        console.log("ans:" + ans);
        console.log(leftDic);
        console.log(rightDic);
    }
    return ans;
}

//console.log(subarrayWithKdiff([1,2,1,2,3], 2));
//console.log(subarrayWithKdiff([1,2,1,3,4], 3));
//console.log(subarrayWithKdiff([2,1,2,1,1], 3));
//console.log(subarrayWithKdiff_on([1,2,1,2,3], 2));
//console.log(subarrayWithKdiff_on([1,2,1,3,4], 3));
//console.log(subarrayWithKdiff_on([2,1,2,1,1], 3));
//console.log(subarrayWithKdiff_on([1,1,1,1,1,1], 2));
console.log(subarrayWithKdiff_on([2,1,2,1,2,3,4], 2));