//created a pokemon repository and IIFE 
let pokemonRepository = (function() {
    
    let pokemonList = [];
    
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

pokemonRepository.add({ 
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison'],
});
pokemonRepository.add({ 
    name: 'Charmander',
    height: 1.6,
    type: ['fire'],
});
pokemonRepository.add({ 
    name: 'Squirtle',
    height: 0.5,
    type: ['water'],
});
pokemonRepository.add({ 
    name: 'Pikachu',
    height: 1.2
    type: ['electric'],
 });

console.log(pokemonRepository.getAll);
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

