document.getElementById('anime_submit').addEventListener('click', animeData);
function animeData(){
    axios.get('https://animechan.vercel.app/api/random')
    .then(response => {
        console.log(response.data)
        const anime = response.data.anime;
        const character = response.data.character;
        const quote = response.data.quote;
        let list = document.getElementById('anime_list');
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'new_div')
        newDiv.textContent = `Character: ${character} Anime: ${anime} Quote: ${quote}`
        list.append(newDiv); 
    })
    .catch(error => console.log(error))
}