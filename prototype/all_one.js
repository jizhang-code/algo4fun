var AllOne = function() {
    this.map = new Map();
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if( this.map.has(key) ) this.map.set(key, this.map.get(key)+1);
    else this.map.set(key, 1);
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if( this.map.has(key) ) {
        if( this.map.get(key) === 1 ) this.map.delete(key);
        else this.map.set(key, this.map.get(key)-1);
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    let __max_keyc = -Infinity;
    let ret = "";

    if(this.map.size === 0) return ret;
    this.map.forEach((value,key)=>{
        if( value > __max_keyc ) {
            __max_keyc = value;
            ret = key;
        }
    });
    return ret;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    let __min_keyc = Infinity;
    let ret = "";

    if(this.map.size === 0) return ret;
    this.map.forEach((value,key) => {
        if( value < __min_keyc ) {
            __min_keyc = value;
            ret = key;
        }
    });
    return ret;
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */


var allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "hello"
allOne.inc("leet");
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "leet"
allOne.inc("lobby");
allOne.inc("lobby");
allOne.inc("lobby");
allOne.dec("hello");
console.log(allOne.getMaxKey()); // return "lobby"
console.log(allOne.getMinKey()); // return "leet"
allOne.dec("leet");
console.log(allOne.map);
allOne.inc("leet");
allOne.inc("leet");
console.log(allOne.getMaxKey()); // return "lobby"
console.log(allOne.getMinKey()); // return "hello"
console.log(allOne.map);
