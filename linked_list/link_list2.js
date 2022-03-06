
class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    print() {
        let current = this;
        let valstring = "LinkedList : { ";
        while( current ) {
            valstring = valstring + current.val + "->";
            current = current.next;
        }
        valstring += "null }";
        console.log(valstring);
    }

    insert(val) {
        let current = this;
        let prev = null;
        while( current ) {
            prev = current;
            current = current.next;
        }
        let tmp = new LinkedList(val);
        prev.next = tmp;
        return this;
    }

    // only modify the links without creating new list
    reverse() {
        if( this === null ) return null;
        let prev = null;
        let current = this; // head
        let next = current.next;
        while( current ) {
            current.next = prev; // modify the link
            prev = current;
            current = next;
            if( next === null ) next = null; else next = next.next; 
        }
        return prev;
    }

    // only modify the links without creating new list
    // use heapsort to sort o(nlogn), in js use sort() which is quicksort to simulate
    sort() {
        let arr = [];
        let current = this;
        if ( current === null ) return null;
        // time: o(n), space: o(n)
        while( current ) {
            arr.push(current.val);
            current = current.next;
        }
        current = this;
        let i = 0;
        // time: o(nlogn)
        arr.sort(function(a,b) {return a-b;});
        // time: o(n), space: o(n)
        while( current ) {
            current.val = arr[i];
            i += 1;
            current = current.next;
        }
        return this;
    }

    // merge two list and return sorted list
    // assume size is n=l1+l2;
    // time: sort o(nlogn)
    merge(list) {
        let arr = [];
        let current = this;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        current = list; 
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        // time: o(nlogn) where n=l1+l2
        arr.sort(function(a,b){ return a-b;});
        current = this;
        for( let i=0; i<arr.length; i++ ) {
            current.val = arr[i];
            if( current.next === null && i !== arr.length-1 ) current.next = list;
            current = current.next;
        }
        return this;
    }
};

// swap every pair nodes from the beginning of the list
// input [1,2,3,4]
// output [2,1,4,3]
// input []
// output []
// input [1]
// output [1]

var ll = new LinkedList(10);
ll.insert(11).insert(29).insert(33).insert(41).insert(59).print();
var ll1 = new LinkedList(39);
ll1.insert(29).insert(38).insert(44).insert(55).insert(66).print();
ll.merge(ll1).print();