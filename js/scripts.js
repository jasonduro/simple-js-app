//created an array of pokemon with three attributes
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

//created a second pokemonList array
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

