
// example
// input strs = ["flower", "flow", "flight"]
// output "fl"
// input strs = ["dog", "racecar", "car"]
// output ""


const commonPrefix = (s) => {

    let commonStr = "";
    for( let i=0; i<s.length; i++ ) {
        const firstLetter = s[i].substring(0,1);
        if( commonStr === "" ) {
            commonStr = firstLetter;
        } else {
            if( firstLetter != commonStr ) {
                return "";
            }
        }
    }
    const newStrs = s.map(item => item.substring(1));
    return commonStr + commonPrefix(newStrs);
}

console.log(commonPrefix(["flower", "flow", "flight"]));
console.log(commonPrefix("dog", "cat", "fish"));