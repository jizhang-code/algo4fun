// Given a string s, find the length of the longest substring without repeating chars
// input s = "abcaabdbb"
// output 3
// input s = "bbbbb"
// output 1
// input s = "pwwkew"
// output 3
// constraints 0 <= s.length < 5 * 10^4
// s consists of english letters, digits, symbols, and spaces
//

// solutions: sliding window o(n) = n
// start = any given position
// window = keep expanding to the right until the condition is met, adjust the window from the left, and repeat
//
const lengthOfLongestSubstring = (s) => {

    let count = 0;
    let n = s.length, i = 0;
    let mp = {};
    console.log(s);
    for( let j=0; j<n; j++ ) {
        if( s.charAt(j) in mp && ((s.charAt(j)>='A' && s.charAt(j)<='Z') || (s.charAt(j)>='a' && s.charAt(j)<='z'))) {
            i = Math.max(mp[s.charAt(j)], i);
        }
        count = Math.max(count, j-i+1);
        mp[s.charAt(j)] = j+1;
    }
    return count;
};

console.log(lengthOfLongestSubstring('i am student'));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcapqzbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring('student'));