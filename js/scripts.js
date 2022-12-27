//created a pokemon repository within an IIFE 
let pokemonRepository = (function() {
    
    let pokemonList = [
        {  
            name: 'Bulbasaur',
            height: 0.7,
            type: ['grass', ' poison'],
        },
        {
            name: 'Charmander',
            height: 1.6,
            type: ['fire'],
        },
        {
            name: 'Squirtle',
            height: 0.5,
            type: ['water'],
        }
    ]
    
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
    name: 'Pikachu',
    height: 1.2,
    type: ['electric'],
 });

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(printDetails);
function printDetails(pokemon) {
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) (type: ${pokemon.type})`);
}


/* Commented out this forEach function because it is similar to the code above
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write('<p>' + pokemon.name + '<br>' + 'Height: ' + pokemon.height + 'm<br>' + 'Types: ' + pokemon.type + '</p>');
    });
/*