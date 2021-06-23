let words = ["Hello", "goodbye", "yes", "no", "stop", "go go go"];
let index = '';
let count = 0;

for (var i = 0; i < words.length; i++) {
    const word = words[i];

    for (var j = 0; j < word.length; j++) {
        if (word[j] === "o") {
            count++;
        }
    }
} 

console.log(`Il y a au total ${count} 'o'`)
