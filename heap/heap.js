
// heap functions
// 1. check left child
// 2. check right child
// 3. check parent node
// 4. in-place swap
// 5. heapify 
// 6. insert
// 7. extract (min or max)
// 8. print

class MaxHeap {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.data = [];
        this.size = 0;
    }
    leftChild(pos) {
        return 2 * pos;
    }
    rightChild(pos) {
        return 2 * pos + 1;
    }
    parent(pos) {
        return Math.floor(pos/2);
    }
    isLeaf(pos) {
        if( (pos > this.size/2)  && (pos < this.size) ) return true;
        return false;
    }
    // order: parent value > child value
    insert(value) {
        let current = this.size;
        this.data[current] = value;
        while( this.data[current] > this.data[this.parent(current)] ) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
        this.size++;
        return this;
    }
    swap(pos1, pos2) {
        let tmp = this.data[pos1];
        this.data[pos1] = this.data[pos2];
        this.data[pos2] = tmp;
    }
    heapify(pos) {
        if( this.isLeaf(pos) ) return;
        if( this.data[pos] < this.data[this.leftChild(pos)] || this.data[pos] < this.data[this.rightChild(pos)] ) {
            if( this.data[this.leftChild(pos)] > this.data[this.rightChild(pos)] ) {
                this.swap(pos, this.leftChild(pos));
                this.heapify(this.leftChild(pos));
            } else {
                this.swap(pos, this.rightChild(pos));
                this.heapify(this.rightChild(pos));
            }
        }
    }
    // return top, and re-assign bottom to top, and shrink size by 1
    extract() {
        if( this.size === 0 ) return null;
        let max = this.data[0];
        this.data[0] = this.data[this.size-1];
        this.size--;
        this.heapify(0);
        return max;
    }
    print() {
        for( let i=0; i<this.size; i++ ) {
            console.log("Parent node : " + this.data[i]);
            if( this.leftChild(i) < this.size ) console.log("Left Child node : " + this.data[this.leftChild(i)]);
            if( this.rightChild(i) < this.size ) console.log("Right Child node : " + this.data[this.rightChild(i)]);
        }
    }
};

var maxHeap = new MaxHeap(25);
maxHeap.insert(5).insert(11).insert(22).insert(33).insert(44);
maxHeap.insert(3).insert(17).insert(10).insert(84).insert(19);
maxHeap.insert(6).insert(23).insert(9).insert(37).insert(49);;
console.log(maxHeap.data);
console.log("+++");
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());