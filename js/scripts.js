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

/* added the forEach function but commented out when testing the arrow function below
pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + " meters tall.")
}) */

//testing out the arrow function
pokemonList.forEach(pokemon => console.log(pokemon));

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



/* old pokemon list 2 code from a previous exercise
let pokemonList2 = [
    // pokemon objects listed below
    {
        name: 'Randomon',
        height: 0.9,
        types: [
            'grass',
            'poison'
        ]
    },
    {
        name: 'Strageobob',
        height: 0.8,
        types: 'fire'
    },
    {
        name: 'Scittles',
        height: 0.6,
        types: 'water'
    },
];

function printArrayDetails(list){
    for (let i = 0; i < list.length; i++){
        document.write("<p>" + list[i].name + "</p>")
        console.log(list[i].name);
    }
}

 */