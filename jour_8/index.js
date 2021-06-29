let axios = require("axios");
// 01 - Countries //
/*
axios.get("https://restcountries.eu/rest/v2/all").then(function getCountries(res) {
    let countriesName = [];
    let data = res.data;

    countriesName = data.map(function(country) {
        return country.name;
    });

console.log(countriesName.join(' - '));
});
*/
// 02 - Chuck Norris //
/*
axios.get("https://api.chucknorris.io/jokes/random").then(function getFact(res) {
    let joke = res.data.value;

    console.log(joke);
});
*/
// 03 - Pokemon // 
/*
const random = Math.floor(Math.random() * (898 - 1) + 1);

axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then(function catchPokemon(num) {
    let pokemonId = num.data.id;
    let pokemonName = num.data.name;

    console.log(`id: ${pokemonId}`);
    console.log(`name: ${pokemonName}`);
});
*/
