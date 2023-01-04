//created a pokemon repository within an IIFE
//added pokemon API 
let pokemonRepository = (function() {

    let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //add pokemon function via push
    function add(pokemon) {
        pokemonList.push(pokemon);
    }


    //Add pokemon to a list with the format of a button
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
    //Added an event listener to button that logs pokemon info to the console
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        })
    }

    //function to load pokemon API List
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json){
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name, 
                    detailsUrl: item.url
            };
            add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }  
    
    //function to use the detailsUrl to load detailed pokemon data
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
            item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });        
        }

    //getAll function to return all of the items in the pokemonList array
    function getAll() {
        return pokemonList;
        }

    //function to show modal
    function showModal(item) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');
        let $modalContainer = $("#modal-container");

        modalHeader.empty();
        modalTitle.empty();
        modalBody.empty();
    
    //creating element for name in modal content
    let nameElement = $('<h1>' + item.name + '</h1>');
    //create img in modal content
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr("src", item.imageUrl);
    //create element for height in modal content
    let heightElement = $("<p>" + "height: " + item.height + "</p>");
    //create element for weight in modal content
    let weightElement = $("<p>" + "weight: " + item.weight + "</p>");
    //create element for type in modal content
    let typesElement = $("<p>" + "types: " + item.types + "</p>");
    //create element for abilities in modal content
    let abilitiesElement = $("<p>" + "abilities: " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
}

   //function to showDetails of pokemon object
   function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
           console.log(pokemon);
            showModal();
        });
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
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});