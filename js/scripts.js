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

/* printArrayDetails function declaration
function printArrayDetails(){
    for (let i = 0; i < pokemonList.length; i++){
        document.write("<p>" + pokemonList[i].name + " is average height. " + "</p>");
    }
}
*/

//created the 'for' loop with a conditional 'and' statement. also added line breaks
for (let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].height<1 && pokemonList[i].height>=0.5){
        document.write("<p>" + pokemonList[i].name + " is average height. " + "</p>");
    } else if (pokemonList[i].height > 1.5){
        document.write("<p>" + pokemonList[i].name + " Wow, that's big!" + "</p>");
    }
}