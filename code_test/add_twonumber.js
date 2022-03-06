// Given two non-empty linked lists representing two non-negative integers. The digits are stored
// in reverse order, and each of their nodes contains a single digit. Add the two numbers and
// return the sum as a linked list.
// you may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly linked list.
 */
  
class ListNode {
    constructor(val) {
       this.val = val;
       this.next = null;
    }

    print() {
        var current = this;
        var msg = 'LL$:    ';
        while( current ) {
            msg = msg + current.val + '--->';
            current = current.next;
        }
        console.log(msg + 'nil');
    }
};
 
const printListNode = (list) => {
    var current = list;
    var msg = 'LL$:    ';
    while( current ) {
        msg = msg + current.val + '--->';
        current = current.next;
    }
    console.log(msg + 'nil');
};

const readFromArray = (nums) => {
    const result = new ListNode(0);
    var current = result;
    for (let d of nums) {
        current.next = new ListNode(d);
        current = current.next;
    }
    return result.next;
};

const addTwoNumbers = (l1, l2) => {
    const result = new ListNode(0);
    var current = result;
    var p=readFromArray(l1);
    var q=readFromArray(l2);
    var carry=0;

    while( p || q ) {
        var sum = (p? p.val : 0) + (q? q.val: 0) + carry;
        carry = Math.floor(sum/10);
        sum = sum%10;
        p = (p? p.next : null);
        q = (q? q.next : null);
        current.next = new ListNode(sum);
        current = current.next;
    }
    if(carry>0) {
        current.next = new ListNode(carry);
    }
    return result.next;
};




printListNode(addTwoNumbers([2,4,3],[5,6,4]));
printListNode(addTwoNumbers([2,4,8],[5,6,4]));

addTwoNumbers([1,2,3,4,5,7], [9,9,9,9,9]).print();