
// given a string s, return the longest palindromic substring in s
// constraints:
// 1 <= s.length <= 1000
// s consists of only digits and english letters

// it's not a good use case for sliding window
// 1) at at any given position, it's difficult to decide if
//    to continue to expand toward the right or
//    to start to shrink from the left
// However it's a good use case for identifying repetion
// for any given string: s(left, right), it's a paliondrome if
// s(left+1, right-1) is a palindrome and s[left] == s[right]
const longestPalindrome = (s) => {

    let n = s.length;
    if( n < 1 || n > 1000 ) return "";

    console.log(s);
    let mp={};
    let longest=0;
    let longsetstring = [];
    for( let i=0; i<n; i++ ) {
        for( let j=i; j<n; j++ ) {
            let result = isPalindrome(i,j,s,mp);
            if( result > longest ) {
                longest = result;
                longsetstring = s.substring(i, j+1);
            }
        }
    }
    console.log(mp);
    return longsetstring;
};

// return the size or -1 if it's no palindrome
const isPalindrome = (left, right, s, memo={}) => {
    let size = right-left+1;
    let key = left + ',' + right;
    if( size < 0 ) return -1;
    if( size === 0 ) return -1;
    if( size === 1 ) return 1;
    if( key in memo ) return memo[key];
    if( size === 2 && s[left] === s[right] ) {
        memo[key] = 2;
        return memo[key];
    }
    if( isPalindrome(left+1,right-1,s,memo) !== -1 ) {
        if( s[left] === s[right] ) {
            memo[key] = size;
            return memo[key];
        }
    } 
    memo[key] = -1;
    return memo[key];
};

//console.log(isPalindrome(0,1,"aaa"));
//console.log(isPalindrome(0,2, "bacbad"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));