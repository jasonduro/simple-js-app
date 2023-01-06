//created a pokemon repository within an IIFE
//added pokemon API link
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListElement = $('.pokemon-list');



    //getAll function to return all of the items in the pokemonList array
    function getAll() {
        return pokemonList;
    }

    //add pokemon function via push
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //Add pokemon to a list with the format of a button
    function addListItem(pokemon) {
        let listItem = $('<li class="list-group-item"></li>');
        let button = $('<button class="pokemon-button btn-primary btn-lg" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');
        listItem.append(button);
        pokemonListElement.append(listItem);
        button.on('click', function() {
            showDetails(pokemon);
        });
    }

    //function to load pokemon API List
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json){
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name, 
                    detailsUrl: item.url,
            };
            add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }  
    
    //function to use the detailsUrl to load detailed pokemon data
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = [];
            for (let i = 0; i < details.types.length; i++){
                item.types.push(details.types[i].type.name);
            }
            item.abilities = [];
            for (let i = 0; i < details.abilities.length; i++){
                item.abilities.push(details.abilities[i].ability.name);
            }
        }).catch(function (e) {
            console.error(e);
        });        
    }

    //function to show details
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showDetailsModal(pokemon);
        });
    }

    //function to show modal
    function showDetailsModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalBody.empty();
        modalTitle.text(pokemon.name);
        
    let image = $('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');
    let height = $("<p>" + "Height: " + pokemon.height + "</p>");
    let weight = $("<p>" + "Weight: " + pokemon.weight + "</p>");
    let types = $("<p>" + "Types: " + pokemon.types + "</p>");
    let abilities = $("<p>" + "Abilities: " + pokemon.abilities + "</p>");

    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(weight);
    modalBody.append(types);
    modalBody.append(abilities);
}

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
}());

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

    //search functionality
    let filter = document.querySelector('#searchBar');
    let noResults = document.createElement('h3');
    noResults.innerText = 'No Pokémon found.';

    filter.addEventListener('input', () => {

    let list = document.querySelector('.pokemon-list');

    let value = filter.value.toLowerCase();
    listItems = list.getElementsByTagName('li');
    let isPokemonFound = false; // Help to control the no result message

    for (let i = 0; i < listItems.length; i++) {
    let button = listItems[i].getElementsByTagName('button')[0];
    let pokemon = button.textContent || button.innerText;

    if (pokemon.toLowerCase().indexOf(value) > -1) {
    listItems[i].style.display = "";
    isPokemonFound = true;
    } else {
    listItems[i].style.display = "none";
    }
    }

    if (!isPokemonFound) {
    list.appendChild(noResults);
    }

    if (list.contains(noResults) && isPokemonFound) {
    list.removeChild(noResults)
    }
    });