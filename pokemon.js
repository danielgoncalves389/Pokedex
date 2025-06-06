const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
const pokemonList = document.getElementById("lista-pokemon")

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon ${pokemon.types[0].type.name}">
                <p class="nome">${pokemon.name}
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="Babaulsar">
            </li>
    `
}

function getPokemonDetails(pokemon){
    return fetch (pokemon.url)
        .then((response) => response.json())
}

fetch (url)
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse.results)
    .then((list) => list.map(getPokemonDetails))
    .then((details) => Promise.all(details))
    .then((newList) => pokemonList.innerHTML = newList.map(convertPokemonToLi).join(""))
    .catch((error) => console.log(error))  
