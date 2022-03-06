const { timeStamp } = require("console");

class DoubleLinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    print() {
        let current = this;
        let valstring = "DoubleLinkedList : { null<->";
        while(current) {
            valstring += current.val + "<->";
            current = current.next;
        }
        valstring += "null };"
        console.log(valstring);
    }

    insert(val) {
        if( this === null ) return null;
        let current = this;
        let next = current.next;
        let prev = current.prev;
        while( current ) {
            prev = current;
            current = next;
            if( next === null ) next = null; else next = next.next;
        }
        let tmp = new DoubleLinkedList(val);
        prev.next = tmp;
        tmp.prev = prev;
        return this;
    }

    reverse() {
        if( this === null ) return null;
        let current = this;
        let prev = current.prev;
        let next = current.next;
        while( current ) {
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
            if( next === null ) next = null; else next = next.next;
        }
        return prev;
    }
}

var dll = new DoubleLinkedList(10);
dll.insert(12).insert(49).insert(52).insert(69).insert(77).print();
dll = dll.reverse();
dll.print();