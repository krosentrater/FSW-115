// http://api.bryanuniversity.edu/kr/list/

// Get All (returns array)

axios.get('http://api.bryanuniversity.edu/kr/list/')
.then(response => {
    console.log(response.data)
    for (let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1');
        h1.textContent = response.data[i].name;
        document.body.appendChild(h1);
    };
})
.catch(error => console.log(error))


// Get One (returns object)