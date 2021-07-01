const play = require("./index");

const turnRight = (rover, res, grid, history) => {
    if (res.direction === "r") {
        if (rover.direction === "n") {
            rover.direction = "e";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "e") {
            rover.direction = "s";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "s") {
            rover.direction = "w";            
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "w") {
            rover.direction = "n";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
    }
};

module.exports = turnRight;
