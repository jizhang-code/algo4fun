class MaxHeap2 {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.size = 0;
        this.data = [];
    }

    // @param: current pos
    // @Return: boolean {true: is leaf}
    isLeaf(current) {
        if( current >= this.size/2 && current < this.size ) return true;
        return false;
    }

    // @param: current pos
    // @return: right child pos
    rightChild(current) {
        return 2*current+1;
    }

    // @param: current pos
    // @return: left child pos
    leftChild(current) {
        return 2*current;
    }

    // @param: current pos
    // @return: the parent pos
    parent(current) {
        return Math.floor(current/2);
    }

    // @param: none
    // @return: none
    print() {
        console.log(this.data);
    }

    // @param: the value 
    // @return: none
    insert(val) {
        if( this.size >= this.maxSize ) return;
        this.data[this.size] = val;
        this.size++;

        let current = this.size-1;
        while(this.data[current] > this.data[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
        return this;
    }

    // @param: pos1, pos2
    // @return: none
    swap(pos1, pos2) {
        let tmp = this.data[pos1];
        this.data[pos1] = this.data[pos2];
        this.data[pos2] = tmp;
    }

    // @param: none
    // @return: the max
    extractMax() {
        if ( this.size < 1 ) return null;
        let max = this.data[0];
        this.data[0] = this.data[this.size-1];
        this.size--;
        this.heapify(0);
        return max;
    }

    // @param: pos
    // return none
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
};


var mh = new MaxHeap2(50);
mh.insert(22).insert(43).insert(1).insert(91).insert(35).insert(36).insert(44).insert(56).insert(39).print();
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());
console.log(mh.extractMax());