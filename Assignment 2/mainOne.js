document.getElementById('submit').addEventListener('click', getData);
function getData(){
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        console.log(response.data)
        console.log(response.data.results[0].name); // Rick Sanchez ID 1
        for (let i = 0; i < response.data.results.length; i++){
            const array = response.data.results[i].name;
            console.log(array); // shows character names stored in variable
            const div = document.createElement('div');
            div.textContent = array;
            div.setAttribute('class', 'rm_elements')
            document.body.appendChild(div);
        };
    })
    .catch(error => console.log(error));
};