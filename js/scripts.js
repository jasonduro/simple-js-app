//created a pokemon repository within an IIFE 
let pokemonRepository = (function() {
    
    // pokemon array below
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
    ];

    //add pokemon function with rules
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          repository.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
    
    //getAll function to return all of the items in the pokemonList array
    function getAll() {
        return pokemonList;
    }

    //Add pokemon to a list with the format of a button
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    //function to add new pokemon via push
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});



