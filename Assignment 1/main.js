const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon', true);

xhr.send();

xhr.onreadystatechange = function(){
    console.log(xhr.responseText);
    if (this.readyState === 4){
        let data = JSON.parse(xhr.response);
        console.log(data)
        showData(data);
    };
};

function showData(data) {
    let pokemonResults = data.results;
    console.log(pokemonResults);
    for (let i = 0; i < pokemonResults.length; i++){
        let pokemon = document.createElement('div');
        pokemon.innerHTML = pokemonResults[i].name;
        document.body.appendChild(pokemon);
    }
};