// GET REQUEST SECTION

const getListItems = () => {
    axios.get('http://api.bryanuniversity.edu/kr/list/')
        .then(response => displayListItems(response))
        .catch(error => console.log(error))
};
getListItems();

// DISPLAY & APPEND SECTION

const displayListItems = (response) => {
    let listItem = response.data //Set data to variable 
    console.log(listItem) //Check to see if data passed through correctly
    const list = document.getElementById('todoList'); 
    list.innerHTML = ''; // Clear out DOM

    listItem.forEach(item => { //Had to change to forEach method since my for loop was failing. Basically the same? lol
        let itemName = document.createElement('h1'); 
        itemName.innerHTML = `${item.name}` + `<br>` + `$${item.price}` + `<br>` + `${item.description}`;
        itemName.setAttribute('class', 'list-item')
        list.appendChild(itemName);
        if (item.isComplete === true) {
            itemName.setAttribute('class', 'strike');
        };

        let completeButton = document.createElement('button'); //Create button for completed items
        completeButton.setAttribute('class', 'completeButton'); //Button has class
        completeButton.setAttribute('value', item.isComplete); // Value = is complete status
        completeButton.innerHTML = 'Click to Complete';
        completeButton.id = item._id; //! Tired to set ID again here but still getting undefined
        itemName.appendChild(completeButton);

        if (item.isComplete === true){
            completeButton.remove();
            let alreadyCompleted = document.createElement('button'); //Create button for incomplete items
            alreadyCompleted.setAttribute('class', 'incompleteButton'); //Create class
            alreadyCompleted.setAttribute('value', item.isComplete); //Value = is complete status
            alreadyCompleted.innerHTML = 'Click to uncomplete';
            alreadyCompleted.id = item._id; //! Tired to set ID again here but still getting undefined
            itemName.appendChild(alreadyCompleted) //Adds button to uncomplete an item. Could not get rid of line through on button.
            alreadyCompleted.addEventListener('click', updateToDoList);
        };
        completeButton.addEventListener('click', updateToDoList);

        let deleteButton = document.createElement('button'); //Create delete button 
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.innerHTML = 'Delete Item';
        deleteButton.id = item._id; //Sets id of button to id of item
        itemName.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteToDo); 

    });
};

// POST/CREATE SECTION

const createNewToDoList = (event) => {
    event.preventDefault();
    
    let newName = document.getElementById('nameInput').value; //Value of input for name
    let newPrice = document.getElementById('priceInput').value; //Value of input for price
    let newDescription = document.getElementById('descriptionInput').value; //Value of input for description
    let newCompleteStatus = document.getElementById('completeInput').checked; //Value of complete status

    let newToDo = {
        name: newName,
        price: newPrice,
        description: newDescription,
        isComplete: newCompleteStatus
    };
    // Create new item ^
    axios.post('http://api.bryanuniversity.edu/kr/list/', newToDo)
        .then(response => getListItems(response))
        .catch(err => console.log(err))
};
document.getElementById('todoForm').addEventListener('submit', createNewToDoList);

// PUT/UPDATE SECTION 

const updateToDoList = (event) => {
    let id = event.target.id; //Grabs item's ID
    let value = event.target.value; //Grabs item's value which is the complete status
    console.log(id)
    console.log(value)
    let newValue = null; //? Not sure what this exactly does. Kinda like clearing out the DOM ish?

    if(value === 'true'){
        newValue = false
    } else {
        newValue = true
    };

    let update = {
        isComplete: newValue
    };

    axios.put(`http://api.bryanuniversity.edu/kr/list/${id}`, update)
    .then(() => getListItems())
    .catch(err => console.error(err))
};

// DELETE REQUEST

const deleteToDo = (event) => {
    let itemId = event.target.id;

    axios.delete(`http://api.bryanuniversity.edu/kr/list/${itemId}`)
        .then(() => getListItems())
        .catch(error => console.log(error))
};