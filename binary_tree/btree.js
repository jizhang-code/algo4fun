class bNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const populate = (root, height) => {
    if ( root === null ) return;
    if (height === 0) return;
    root.left = new bNode(Math.floor(Math.random()*5000));
    root.right = new bNode(Math.floor(Math.random()*5000));
    populate(root.left, height-1);
    populate(root.right, height-1);
}

const buildBst = (input) => {
    if ( input.length < 1) return null;
    
    const tree = new bNode(input[0]);
    for( let i = 1; i< input.length; i++ ) {
        let current = tree;
        let parent = current;
        while( current ) {
            parent = current;
            current = (current.val > input[i]) ? current.left : current.right;
        }
        if( parent.val > input[i]) parent.left = new bNode(input[i]); else parent.right = new bNode(input[i]);
    }
    return tree;
}

const dTraverse = (root) => {
    if ( root === null ) return [];
    return [root.val, ...dTraverse(root.right), ...dTraverse(root.left)];
}

const bTraverse = (root) => {
    if ( root === null ) return [];
    const queue = [], values=[];
    queue.push(root);
    while( queue.length > 0 ) {
        let current = queue.shift();
        values.push(current.val);
        if( current.left) queue.push(current.left);
        if( current.right) queue.push(current.right);
    }
    return values;
}

const iTraverse = (root) => {
    if ( root === null ) return [];
    return [...iTraverse(root.left), root.val, ...iTraverse(root.right)];
}

const jTraverse = (root) => {
    if ( root === null ) return [];
    return [...jTraverse(root.right), root.val, ...jTraverse(root.left)];
}

const preTraverse = (root) => {
    if ( root === null ) return [];
    return [root.val, ...preTraverse(root.left), ...preTraverse(root.right)];
}

const postTraverse = (root) => {
    if ( root === null ) return [];
    return [...postTraverse(root.left), ...postTraverse(root.right), root.val];
}

const minTree = (root) => {
    if ( root === null ) return 0;
    if ( root.left === null && root.right === null ) return root.val;
    if ( root.left === null ) return Math.min(root.val, minTree(root.right));
    if ( root.right === null ) return Math.min(root.val, minTree(root.left));
    return Math.min(root.val, minTree(root.left), minTree(root.right));
}

const maxTree = (root) => {
    if ( root === null ) return 0;
    if ( root.left === null && root.right === null ) return root.val;
    if ( root.left === null ) return Math.max(root.val, maxTree(root.right));
    if ( root.right === null ) return Math.max(root.val, maxTree(root.left));
    return Math.max(root.val, maxTree(root.left), maxTree(root.right));
}



const root = new bNode(Math.floor(Math.random()*1000));
populate(root, 5);
console.log(dTraverse(root));
const binary_search_tree = buildBst(dTraverse(root));
//console.log(bTraverse(binary_search_tree));
console.log(iTraverse(binary_search_tree));
console.log(jTraverse(binary_search_tree));
//console.log(minTree(root));
//console.log(maxTree(root));


