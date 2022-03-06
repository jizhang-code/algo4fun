
//
class MinHeap {
    constructor(size) {
        this.maxSize = size;
        this.size = 0;
        this.data = [];
    }

    isLeaf(pos) {
        if( (pos >= this.size/2) && (pos < this.size) ) return true;
        return false;
    }

    leftChild(pos) {
        return 2*pos;
    }

    rightChild(pos) {
        return 2*pos +1;
    }

    parent(pos) {
        return Math.floor(pos/2);
    }

    swap(pos1, pos2) {
        let tmp = this.data[pos1];
        this.data[pos1] = this.data[pos2];
        this.data[pos2] = tmp;
    }

    insert(val) {
        if ( this.size >= this.maxSize ) return;
        this.data[this.size] =  val;
        let current = this.size;
        while( this.data[current] < this.data[this.parent(current)] ) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
        this.size++;
        return this;
    }

    print() {
        console.log(this.data);
    }

    heapify(pos) {
        if( this.isLeaf(pos) ) return;
        if( this.data[pos] > this.data[this.leftChild(pos)] || this.data[pos] > this.data[this.rightChild(pos)] ) {
            if( this.data[this.leftChild(pos)] < this.data[this.rightChild(pos)] ) {
                this.swap(pos, this.leftChild(pos));
                this.heapify(this.leftChild(pos));
            } else {
                this.swap(pos, this.rightChild(pos));
                this.heapify(this.rightChild(pos));
            }
        }
    }

    extract() {
        if( this.size === 0 ) return null;
        let min = this.data[0];
        this.data[0] = this.data[this.size-1];
        this.size--;
        this.heapify(0);
        return min;
    }
};

var mh = new MinHeap(30);
mh.insert(10).insert(120).insert(30).insert(140).insert(50).insert(160).insert(25).insert(49).insert(13).insert(54).insert(232).insert(7).insert(44).print();
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());
console.log(mh.extract());