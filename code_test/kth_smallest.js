
// sorted matrix = each row and column are sorted in the same order
const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
];

// find the kth smallest element from the sorted matrix in ascending order
const findKthSmallest =(m,k) => {
    let arrFromMatrix = [];
    for( let arr of m ) {
        arrFromMatrix = [...arrFromMatrix, ...arr];
    }
    console.log(arrFromMatrix);
    arrFromMatrix.sort(function(a,b){return a-b;});
    return arrFromMatrix[k-1];
};
// complexity analysis
// sort() in JS uses quicksort sort in-place - ave o(nlogn) and worst o(n^2)
// access array member - o(1)
// space - o(n)

console.log(findKthSmallest(matrix, 8));
console.log(findKthSmallest(matrix, 4));