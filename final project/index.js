var prompt = require("prompt");
var colors = require("colors");

const turnLeft = require("./turnLeft");
const turnRight = require("./turnRight");
const moveFoward = require("./moveFoward");

prompt.start();

// grid[y][x] = ""
const grid = [
    ["n", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
];


const rover = {
    direction: "n",
    x: 0,
    y: 0,
    travelLog:[],
};

const history = {
    x: 0,
    y: 0,
}

console.table(grid);
console.log("Hi Rover, where you wanna go? Type 'l' for left or 'r' for right".green);


const play = () => {

     prompt.get(["direction"], function (err, res) {
         turnLeft(rover, res, grid, history);
         turnRight(rover, res, grid, history);
         moveFoward(rover, res, grid, history);
         play();
         
    });
}
play();

module.exports = play;