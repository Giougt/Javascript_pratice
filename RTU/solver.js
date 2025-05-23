// LOGUT Alexandre 250AEB021
// Group: Solo
// Approach: Dijkstra in JavaScript, run with Node.js

// module "fs" for read file
const fs = require('fs');
// module "path" for handling file paths
const path = require('path');

// read a file and return a 2D version
function readMaze(file) {
    const lines = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
    return lines.map(line => line.trim().split(''));
}

// find S and G
function findStartGoal(maze) {
    let start = null, goal = null;
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[0].length; x++) {
            if (maze[y][x] === 'S') start = [y, x];
            if (maze[y][x] === 'G') goal = [y, x];
        }
    }
    return { start, goal };
}

// all direction search (8 possible directions)
const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
];

// solves the maze using BFS-like strategy
function solveMaze(maze) {
    const { start, goal } = findStartGoal(maze);
    const rows = maze.length, cols = maze[0].length;

    // [steps, coins, y, x, path]
    const queue = [[0, 0, start[0], start[1], []]]; 
    const visited = new Map();

    while (queue.length > 0) {
        // steps asc, then coins asc
        queue.sort((a, b) => a[0] - b[0] || a[1] - b[1]); 
        const [steps, coins, y, x, path] = queue.shift();

        // create a unique key for current position (y,x)
        const key = `${y},${x}`;
        if (visited.has(key)) {
            const [prevSteps, prevCoins] = visited.get(key);
            if (steps > prevSteps || (steps === prevSteps && coins >= prevCoins)) {
                continue;
            }
        }
        visited.set(key, [steps, coins]);  
        // create a new path including the current position
        const newPath = [...path, [y, x]];

        if (y === goal[0] && x === goal[1]) {
            return { coins, path: newPath };
        }

        for (let [dy, dx] of directions) {
            const ny = y + dy;
            const nx = x + dx;
            // skip if the new position is out of maze boundaries
            if (ny < 0 || ny >= rows || nx < 0 || nx >= cols) continue;
            const cell = maze[ny][nx];
            if (cell === 'X') continue;
            const value = (cell === 'S' || cell === 'G') ? 0 : parseInt(cell, 10);
            // add the new state to the queue with updated steps, coins, and path
            queue.push([steps + 1, coins + value, ny, nx, newPath]);
        }
    }
    // no path found
    return null; 
}

// all file where the maze are
const mazeFiles = [
    path.join(__dirname, 'maze_11x11.txt'),
    path.join(__dirname, 'maze_31x31.txt'),
    path.join(__dirname, 'maze_101x101.txt'),
];
let output = '';

for (const file of mazeFiles) {
    console.log(`\nResult for : ${file}`);
    // read the maze file and convert it into a 2D array
    const maze = readMaze(file);
    // solve the maze and get the result (path and coins)
    const result = solveMaze(maze);

    if (result) {
        const coinSum = result.coins;
        const pathString = result.path.map(p => `${p[0]},${p[1]}`).join(' -> ');
        console.log("Path :", pathString);
        console.log("Collects coins :", coinSum);

        // name of the maze file
        output += `File: ${path.basename(file)}\n`;
        // number of coins
        output += `Coins: ${coinSum}\n`;
        // path of the solution
        output += `Path: ${pathString}\n\n`;

    } else {
        // debug part
        console.log("Debug: not correct path.");
        output += `Fichier: ${path.basename(file)}\nNothing in path.\n\n`;
    }
}

// print result with the path of solution
console.log('\nResult for all maze\n');
console.log(output);


