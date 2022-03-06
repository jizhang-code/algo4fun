

const minWindow = (s,t) => {

    const __base_window_size = t.length;
    const n = s.length;
    let left=0;
    let right = left+__base_window_size;
    let __t_map = {};
    let result = {};
    let __shortest = Infinity;

    for( let i=0; i<__base_window_size; i++ ) {
        if( t[i] in __t_map ) __t_map[t[i]] += 1;
        else __t_map[t[i]] = 1;
    }
    console.log(__t_map);
    if( right > n ) return "";
    if( right === n ) {
        let __running_map = {};
        for( let i=left; i<right; i++ ) {
            if ( s[i] in __running_map ) __running_map[s[i]] += 1;
            else __running_map[s[i]] = 1;
        }
        //console.log(__running_map);
        if( aeqb(__t_map, __running_map) ) return s;
        else return "";
    }

    while( right <= n && left < right ) {
        let __running_map = {};
        for( let i=left; i<right; i++ ) {
            if( s[i] !== undefined ) {
            if ( s[i] in __running_map ) __running_map[s[i]] += 1;
            else __running_map[s[i]] = 1;
            }
        }
        console.log("line38");
        console.log(__running_map);
        while( agtb(__t_map, __running_map) && !(aeqb(__t_map, __running_map)) && right < n+1 ) {
            if( s[right] !== undefined ) {
            if( s[right] in __running_map ) __running_map[s[right]] += 1;
            else __running_map[s[right]] = 1;
            }
            right++;
            console.log("line47");
            console.log(__t_map);
            console.log(__running_map);
        }
        console.log("line51");
        console.log(__t_map);
        console.log(__running_map);
        console.log(right);
        while( altb( __t_map, __running_map) && !(aeqb(__t_map, __running_map)) ) {
            console.log("line56");
            console.log(__running_map[s[left]]);
            __running_map[s[left]] -= 1;
            left++;
        }
        console.log("line61");
        console.log(__t_map);
        console.log(__running_map);
        /*
        while( aeqb(__t_map, __running_map) ) {
            console.log(left);
            __running_map[s[left]]--;
            left++;
        }
        */
        let runninglength = right-left+1;
        if( runninglength < __shortest){
            __shortest = runninglength;
            result[__shortest] = s.substring(left-1, right);
        }
        console.log("line74");
        console.log(left);
        console.log(right);
        //left = right;
        right = left + __base_window_size;
    }
    console.log(result);
    console.log(__shortest);
    return (__shortest === Infinity)? "": result[__shortest];
};

const agtb = (a, b) => {
    let keys = Object.keys(a);
    let result = true;
    for( let key of keys ) {
        if( b[key] === undefined ) return true;
        result = result || (a[key] > b[key])
    }
    console.log(result);
    return result;
};

const aeqb = (a, b) => {
    let keys = Object.keys(a);
    let result = true;
    for( let key of keys ) {
        if( b[key] === undefined ) return false;
        result = result && (a[key] === b[key])
    }
    //console.log(result);
    return result;
};

const altb = (a, b) => {
    let keys = Object.keys(a);
    let result = true;
    for (let key of keys) {
        if( b[key] === undefined ) return false;
        result = result || (a[key] < b[key]);
    }
    //console.log("line109");
    //console.log(result);
    return result;
}

//console.log(`("ADOBECODEBANC", "ABC") ==> ${minWindow("ADOBECODEBANC", "ABC")}`);
//console.log(`("a","a") ==> ${minWindow("a", "a")}`);
//console.log(`("a","aa") ==> ${minWindow("a", "aa")}`);
//console.log(`("a","b") ==> ${minWindow("a","b")}`);
//console.log(`("ab","a") ==> ${minWindow("ab","a")}`);
//console.log(`("ab","A") ==> ${minWindow("ab","A")}`);
//console.log(`("abc","cba") ==> ${minWindow("abc","cba")}`);
//console.log(`("bbba","ab") ==> ${minWindow("bbba","ab")}`);
console.log(`("bda","ab") ==> ${minWindow("bda","ab")}`);
