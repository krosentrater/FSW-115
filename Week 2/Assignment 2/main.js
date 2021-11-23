let jokeOne = {
    "categories": [],
    "created_at": "2020-01-05 13:42:21.455187",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "qvkOfhGrRL6JsOqxxlVE7A",
    "updated_at": "2020-01-05 13:42:21.455187",
    "url": "https://api.chucknorris.io/jokes/qvkOfhGrRL6JsOqxxlVE7A",
    "value": "Its always dark when Chuck Norris wakes up cause the sun dares not glare at Chuck Norris"
};
let jokeTwo = {
    "categories": [],
    "created_at": "2020-01-05 13:42:21.455187",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "-5RuEx54Qsm-kH9QwN5CdQ",
    "updated_at": "2020-01-05 13:42:21.455187",
    "url": "https://api.chucknorris.io/jokes/-5RuEx54Qsm-kH9QwN5CdQ",
    "value": "Chuck Norris wears glasses to protect the sun."
};
let jokeThree = {
    "categories": [],
    "created_at": "2020-01-05 13:42:19.104863",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "52B8XDJ6R9-0lp0z_JLUdA",
    "updated_at": "2020-01-05 13:42:19.104863",
    "url": "https://api.chucknorris.io/jokes/52B8XDJ6R9-0lp0z_JLUdA",
    "value": "Every time Chuck Norris walks into a graveyard he simply smiles and says \"good times\"."
};
let jokeFour = {
    "categories": [],
    "created_at": "2020-01-05 13:42:29.296379",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "r-KTBUQYTjKllCxkrI47yQ",
    "updated_at": "2020-01-05 13:42:29.296379",
    "url": "https://api.chucknorris.io/jokes/r-KTBUQYTjKllCxkrI47yQ",
    "value": "Chuck Norris' first roundhouse kick ever is now known as The Big Bang."
};

let link = document.getElementById('list');
let itemOne = document.createElement('li');
itemOne.textContent = jokeOne.value;
link.append(itemOne);

let itemTwo = document.createElement('li');
itemTwo.textContent = jokeTwo.value;
link.append(itemTwo);

let itemThree = document.createElement('li');
itemThree.textContent = jokeThree.value;
link.append(itemThree);

let itemFour = document.createElement('li');
itemFour.textContent = jokeFour.value;
link.append(itemFour);