//created a pokemon repository within an IIFE 
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
    height: 1.2,
    type: ['electric'],
 });

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(printDetails);
function printDetails(pokemon) {
    document.write(`<p>${pokemon.name} (height: ${pokemon.height})`);
}
