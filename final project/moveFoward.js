const play = require("./index");

const moveFoward = (rover, res, grid, history) => {
    if (res.direction === "f") {
        if (rover.direction === "n") {
            grid[rover.y][rover.x] = "";
            rover.y--;
            grid[rover.y][rover.x] = rover.direction;

            history.x = rover.x;
            history.y = rover.y;
//enregistrer 
            rover.travelLog.push(history);

            console.table(grid);
            console.log(rover);
        }
        else if (rover.direction === "e") {
            grid[rover.y][rover.x] = "";
            rover.x++;
            grid[rover.y][rover.x] = rover.direction;

            history.x = rover.x;
            history.y = rover.y;

            rover.travelLog.push(history);

            console.table(grid);
            console.log(rover);
        }
        else if (rover.direction === "s") {
            grid[rover.y][rover.x] = "";
            rover.y++;
            grid[rover.y][rover.x] = rover.direction;

            history.x = rover.x;
            history.y = rover.y;

            rover.travelLog.push(history);

            console.table(grid);
            console.log(rover);
        }
        else if (rover.direction === "w") {
            grid[rover.y][rover.x] = "";
            rover.x--;
            grid[rover.y][rover.x] = rover.direction;

            history.x = rover.x;
            history.y = rover.y;

            rover.travelLog.push(history);
            
            console.table(grid);
            console.log(rover);
        }
    }
}

module.exports = moveFoward;

