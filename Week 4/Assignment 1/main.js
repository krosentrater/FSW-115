// http://api.bryanuniversity.edu/kr/list/

// Get All (returns array)

axios.get('http://api.bryanuniversity.edu/kr/list/')
.then(response => {
    console.log(response.data)
    for (let i = 0; i < response.data.length; i++){
        const toDoList = document.createElement('h1');
        toDoList.textContent = response.data[i].name;
        document.body.appendChild(toDoList);

        if (response.data[i].isComplete === true){
            toDoList.setAttribute('class', 'strike')
        }
    };
})
.catch(error => console.log(error))


// Get One (returns object)