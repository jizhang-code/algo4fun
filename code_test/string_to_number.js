
const stringToNumber = (s) => {
    let sign = 1;
    let max = 2 * Math.pow(31) - 1;
    let min = - 2 * Math.pow(31) * -1;
    let n = s.length;
    let num = 0;

    console.log(s);
    for( let i=0; i<n; i++ ) {
        if( s.charAt(i) === ' ' ) continue;
        if( s.charAt(i) === '-' ) sign = -1;
        if( s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 ) num = num * 10 + (s.charCodeAt(i) - 48);
    }
    num *= sign;
    return num < min ? min : num > max ? max: num;
}

console.log(stringToNumber('  -4 2'));
console.log(stringToNumber('  -4 0 9'));