//created a pokemon repository and IIFE 
let pokemonRepository = (function() {
    let pokemonList = [
    // pokemon objects listed below
    {
        name: 'Bulbasaur',
        height: 0.7,
        types: [
            'grass',
            'poison'
        ]
    },
    {
        name: 'Charmander',
        height: 1.6,
        types: 'fire'
    },
    {
        name: 'Squirtle',
        height: 0.5,
        types: 'water'
    },
];

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
};

})();

console.log(pokemonRepository.getAll);
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());

//trying to display this on the html page DOM
document.write(pokemonRepository.getAll());

/* Tried adding the Object.keys but this didn't work
Object.keys(pokemonList).forEach(getAll(property) {
    console.log(''[property]),
}); 
*/

/* tried adding the forEach function
pokemonList.forEach(getAll(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + " meters tall.")
})  
*/

//how do I set up the forEach?? 
/* function getAll(pokemonList) {
    console.log(pokemon.name);
}
 */

