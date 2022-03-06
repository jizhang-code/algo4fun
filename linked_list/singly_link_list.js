/*
You are given a linked list where the node has two pointers. 
The first is the regular ‘next’ pointer. 
The second pointer is called ‘arbitrary_pointer’ and it can point to any node in the linked list.

Your job is to write code to make a deep copy of the given linked list. 
Here, deep copy means that any operations on the original list (inserting, modifying and removing) 
should not affect the copied list.


** deep copy means do not copy the reference of pointer, rather a new node is created.
*/

class SinglyLinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    insert(val, pos) {
        let head = this;
        let current = head;
        let right = current.next;
        let index = 1;
        // insert at the head
        // swap with head so that **this** context is updated
        if( pos === 1 ) {
            let tmp = new SinglyLinkedList(head.val);
            this.val = val;
            this.next = tmp;
            tmp.next = right;
            return this;
        }
        //inset after the head
        while(current) {
            if( index === pos-1 ) {
                let tmp = new SinglyLinkedList(val);
                tmp.next = right;
                current.next = tmp;
                return head;
            }
            index++;
            current=current.next;
            if( right === null ) right === null;
            else right=right.next; 
        }
        return this;
    }

    deleteVal(val) {
        let head = this;
        if( head === null ) return null;
        // delete the head
        // swap with second node so that **this** point is updated
        if( head.val === val ) {
            if( this.next === null ) {
                this.val = null;
                this.next = null;
                return this;
            }
            this.val = this.next.val;
            this.next = this.next.next;
            return this;
        }
        let current = head.next;
        let left = head;
        while( current ) {
            if( current.val === val ) {
                left.next = current.next;
                return head;
            }
            left = left.next;
            current = current.next;
        }
        return this;
    }

    delete(pos) {
        // one node list
        if (pos === 1 ) {
            if( this.next === null) {
                return null;
            } else {
                this.val = this.next.val;
                this.next = this.next.next;
                return this;
            }
        }
        let index=1;
        let head = this;
        let current = head;
        let left = current;
        while( current.next && index < pos ) {
            left = current;
            current = current.next;
            index++;
        } 
        if( index+1 < pos ) return this;
        if( current.next === null )
            left.next = null;
        else
            left.next = current.next;
        return head;
    }

    print() {
        let current = this;
        let output = [];
        while( current ) {
            output.push(current.val);
            current = current.next;
        }
        console.log(output);
    }
};

const buildSLL = (array) => {
    var head = new SinglyLinkedList(null);
    var current = head;
    for( let i=0; i<array.length; i++ ) {
        current.next = new SinglyLinkedList(array[i]);
        current = current.next;
    }
    return head.next;
};

const compareTwoSLL = (list1, list2) => {
    let q1 = list1;
    let q2 = list2;
    while( q1 || q2 ) {
        if( q1 === null || q2 === null ) return false;
        if( q1.val !== q2.val ) return false;
        q1 = q1.next; q2 = q2.next;
    }
    return true;
};

// time = o(n)
// space = o(n)
const reverse = (list) => {
    var stack = [];
    let node = list;
    while( node ) {
        stack.push(node.val);
        node = node.next;
    }
    let head = new SinglyLinkedList(0);
    let current = head;
    while( stack.length > 0 ) {
        current.next = new SinglyLinkedList(stack.pop());
        current = current.next;
    }
    return head.next;
};

// time = o(n)
// space = o(1)
const reverse2 = (list) => {
    if( list === null ) return null;
    let prev = null;
    let current = list;
    let next = current.next;
    while( current ) {
        current.next = prev;
        prev = current;
        current = next;
        next = (current === null) ? null: current.next;
    }
    return prev;
}

// time = o(n);
// space = o(1);
const merge = (list1, list2) => {
    let head = list1;
    let current = list1;
    while( current.next ) {
        current = current.next;
    }
    current.next = list2;
    return head;
};

// time = o(n)
// space = o(n)
const reverseK = (list,k) => {
    if( k === 1 ) return list;
    let head = list;
    let current = head;
    let left = list;
    let right = list;
    let count = 0;

    // base case
    // 1. if the list is shorter than k, return the list
    // 2. if the list equals to k, return the reverse
    // 3. otherwise, merge the k reverse and reversek of remaining
    while(current.next && count < k) {
        left = current;
        right = current.next;
        count++;
        current = current.next;
    }
    if( count === k-1 ) {
        return reverse(head);
    }
    if( count === k ) {
        left.next = null;
        return merge(reverse(head), reverseK(right,k));
    }
    return head;
};


// swap nth node pair in the list
// nth from the beginning and the end
const swapNodePair = (list, k) => {
    let current = list;
    let count = 0;

    // count and memorize
    while(current) {
        current = current.next;
        count ++;
    }

    if( k > count ) return list;
    if( k === count-k+1 ) return list;

    current = list;
    let index=1;
    let prev = null;
    let next = current.next;
    let __k_prev = null, __k_current = null, __k_next = null;
    let __k_pair_prev = null, __k_pair_current = null, __k_pair_next = null;
    while(current) {
        if( index > k && index > count-k+1 ) break;
        if( k === index || count-k+1 === index) {
            if( k === index ) {
                __k_current = current;
                __k_prev = prev;
                __k_next = next;
            }
            if( count-k+1 === index ) {
                __k_pair_current = current;
                __k_pair_prev = prev;
                __k_pair_next = next;
            }
        }
        prev = current;
        current = current.next;
        next = (current === null) ? null : current.next;
        index++;
    }
    // now swap
    // if k and count-k+1 are adjacent
    if( __k_current.next !==null && __k_pair_current !== null && __k_current.next === __k_pair_current ) {
        __k_pair_current.next = __k_current;
        __k_current.next = __k_pair_next;
        if( __k_prev === null ) list = __k_pair_current; else __k_prev.next = __k_pair_current;

    } else
    if( __k_pair_current.next !== null && __k_current !== null && __k_pair_current.next === __k_current ) {
        __k_current.next = __k_pair_current;
        __k_pair_current.next = __k_next;
        if( __k_pair_prev === null ) list = __k_current; else __k_pair_prev.next = __k_current;
    } else {
        __k_pair_current.next = __k_next;
        __k_current.next = __k_pair_next;
        if( __k_prev === null ) list = __k_pair_current; __k_prev.next = __k_pair_current;
        if( __k_pair_prev === null ) list = __k_current; __k_pair_prev.next = __k_current;
    }
    return list;
};


// remove nth node from the end of the list
const remove = (list, k) => {
    let rlist = reverse(list);
    rlist = rlist.delete(k);
    return reverse(rlist);
};

// swap every pair nodes from the beginning of the list
// input [1,2,3,4]
// output [2,1,4,3]
// input []
// output []
// input [1]
// output [1]
const swapEachPair =(list) => {

    if( list === null ) return null;
    if( list.next === null ) return list;

    let current = list;
    let prev = null;
    let __swap_head = null;
    let __node_a = null;
    let __node_b = null;

    while( current ) {
        __node_a = current;
        __node_b = current.next;
        if( __node_b === null ) {
            break;
        }
        if ( prev === null ) {
            __swap_head = __node_b; 
        } else {
            prev.next = __node_b;
        }
        __node_a.next = __node_b.next;
        __node_b.next = __node_a;
        prev = __node_a;
        current = __node_a.next;
    }
    return __swap_head;
};


buildSLL([1,3,5,7,2,4,6,8]).print();
var list1 = buildSLL([1,2,3,4]);
var list2 = buildSLL([1,2,3,4]);
console.log(compareTwoSLL(list1,list2));
list2.insert(10,0).print();
list2.insert(15,2).print();
list2.insert(11,6).print();
list2.insert(11,5).print();
list2.print();
var list3 = buildSLL([10]);
list3.print();
list3.delete(10).print();
list3.print();
list2.print();
list3 = reverse(list2);
list3.print();
list3.insert(22,9).print();
list3.insert(22,3).print();
var list4 = buildSLL([41,45,46]);
list3 = merge(list2, list4);
list3.print();
list4 = reverseK(list3,1);
list4.print();
list4 = reverseK(list3,2);
list4.print();
list4 = reverseK(list4,3);
list4.print();
list4 = reverseK(list4,4);
list4.print();
list4.insert(33,8).insert(52,6).insert(83,10).print();
list4 = reverseK(list4, 5);
list4.print();
list4 = remove(list4,2);
list4.print();
list4.insert(101,4).print();
list4 = reverse(list4);
list4.print();

list4=swapNodePair(list4, 4);
list4.print();

var list6 = buildSLL([7,9,6,6,7,8,3,0,9,5]);
list6.print();
list6=swapNodePair(list6,5);
list6.print();
list6=swapNodePair(list6,6);
list6.print();

var list7 = buildSLL([1,2]);
list7.print();
list7 = swapNodePair(list7,1);
list7.print();

var list8 = buildSLL([7,9,6,6,7,8,3,0,9,5]);
list8.print();
list8 = swapEachPair(list8);
list8.print();

var list9 = buildSLL([1]);
list9.print();
list9 = swapEachPair(list9);
list9.print();
