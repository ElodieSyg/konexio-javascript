const play = require("./index");

const turnLeft = (rover, res, grid, history) => {
    if (res.direction === "l") {
        if (rover.direction === "n") {
            rover.direction = "w";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "w") {
            rover.direction = "s";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "s") {
            rover.direction = "e";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        }
        else if (rover.direction === "e") {
            rover.direction = "n";
            grid[rover.y][rover.x] = rover.direction;
            console.table(grid);
        } 
    }
};

module.exports = turnLeft;
