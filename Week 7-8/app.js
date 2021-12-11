const requestChar = (endPathway) => {
    return new Promise((resolve, reject) => {
        axios.get(endPathway)
        .then(res => resolve(res.data.results))
        .catch(err => reject(err))
    }) 
}

const initiate = () => {
    let pathway = 'https://swapi.dev/api/people/?page=';
    let endPathway = '';
    let pendingPathways = [];
    for (let i = 1; i < 10; i++){
        endPathway = pathway + i;
        pendingPathways.push(requestChar(endPathway))
    };

    Promise.all(pendingPathways)
    .then(data => { 
        let organizedData = data.flat();
        displayChars(organizedData);
    })

};

initiate();

let favCharacter;

const displayChars = (organizedData) => {
    let container = document.querySelector('.characters');
    console.log(organizedData)
    organizedData.forEach(character => {
        
        let characterSlot = document.createElement('div');
        characterSlot.classList.add('char-div');

        let innerCharacterSlot = document.createElement('div');
        innerCharacterSlot.classList.add('inner-char-div');
        characterSlot.appendChild(innerCharacterSlot);

        let characterName = document.createElement('div');
        characterName.innerHTML = character.name
        innerCharacterSlot.appendChild(characterName);

        favCharacter = document.createElement('button');
        favCharacter.innerHTML = 'Like';
        favCharacter.classList.add('fav-button');
        favCharacter.id = character.url;
        characterName.appendChild(favCharacter);

        container.append(characterSlot);

    })
};








const getFavoriteChars = () => {
    axios.get('http://api.bryanuniversity.edu/kr/list/')
        .then(response => displayFavoriteItems(response))
        .catch(error => console.log(error))
};
getFavoriteChars();

const displayFavoriteItems = (response) => {
    let list = response.data;
    let favorites = document.querySelector('.fav-list');
    list.forEach(item => {
        let listItem = document.createElement('h2');
        listItem.innerHTML = item.name;
        listItem.classList.add('favorite-item');

        let deleteFavorite = document.createElement('button');
        deleteFavorite.innerHTML = 'Remove';
        deleteFavorite.classList.add('delete-button');
        deleteFavorite.id = item._id;

        listItem.appendChild(deleteFavorite);
        deleteFavorite.addEventListener('click', deleteFavoriteItems);
        favorites.appendChild(listItem);
    });
};

const deleteFavoriteItems = (event) => {
    let favoriteItemId = event.target.id;

    axios.delete(`http://api.bryanuniversity.edu/kr/list/${favoriteItemId}`)
        .then( () => getFavoriteChars())
        .catch(error => console.warn(error))
};


