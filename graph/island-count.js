const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]; // -> 3


// write a function, islandCount, takes in a grid containing Ws and Ls. W represents
// water and L represents land. The function return the number of islands on the grid. 
// An island is a veritcally or horizontally connected region of land.

const islandCount = (grid) => {

    let count = 0;
    const visited = new Set();

    for (let r=0; r<grid.length; r++ ) {
        for (let c=0; c<grid[0].length; c++ ) {
            if (explore(grid,r,c,visited) === true) {
                count++;
            }
        }
    }
    return count;
    
};

const explore = (grid,r,c,visited) => {

    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] === 'w') return false;

    const pos = r + ',' + c;
    if( visited.has(pos)) return false;
    visited.add(pos);
    explore(grid, r-1,c,visited);
    explore(grid,r+1,c,visited);
    explore(grid,r,c-1,visited);
    explore(grid,r,c+1,visited);

    return true;
};

console.log(islandCount(grid));


