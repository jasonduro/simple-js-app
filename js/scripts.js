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

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);


/* older code from exercise 1.3
for (let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].height<1 && pokemonList[i].height>=0.5){
        document.write("<p>" + pokemonList[i].name + " is average height. " + "</p>");
    } else if (pokemonList[i].height > 1.5){
        document.write("<p>" + pokemonList[i].name + " Wow, that's big!" + "</p>");
    }
}
*/

// the function return statement example code 
function divide(dividend, divisor){
    if(divisor === 0){
        return "You're trying to divide by zero silly goose."
    }else{
        let result = dividend / divisor;
        return result;
    }
}

document.write(divide(7, 0))
console.log(divide(7, 0));