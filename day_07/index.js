var fs = require("fs");
// 01 - File System //

//     fs.readFile("jour07.txt", function(err, data) {
//     if (err) {
//          return console.log(err);
//     }

//     console.log("Lecture du fichier : "+ data.toString());
// });

// 02 - Map Double //

// let array = [1, 2, 3, 4, 5];
// let double = array.map(function(num) {
//     return num * 2;
//});

//console.log(double);

// 03 - Map Names //

 let longNames = [
  	{
  		firstName: "Jane",
  		lastName: "Doe"
  	},
  	{
  		firstName: "John",
  		lastName: "Smith"
  	}
 ]

let shortNames = longNames.map(longName => ({
    name: `${longName.firstName} ${longName.lastName}`
    }));

//console.log(shortNames);

// 04 - Filter Number //

// let array = [1, "toto", 34, "javascript", 8];
// let numbers = array.filter(num => typeof num === "number");

//console.log(numbers);

// 05 - Filter Even //

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let even = number.filter(double => double % 2 == 0)

//console.log(even);

// 06 - Cakes // 

let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let chocoCake = cakes.filter(num => num.flavor === "chocolate");
//console.log(chocoCake)

// => sans {} = return directement
let soldOut = chocoCake.map(cake => {
    // modif de l'objet//
    cake.status = "sold out";
    // return
    return cake;
});

console.log(soldOut);
