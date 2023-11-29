const button = document.querySelector('#btn');
const imgPoke = document.querySelector('#imgPoke');
const pokeid = document.querySelector('#pokeid');
const pokeName = document.querySelector('#pokeName');
const loadPokemon = async () => {
    // console.log('HELLO');
    let randomNumber = Math.ceil(Math.random() * 150) + 1;
    console.log(randomNumber);
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    console.log(requestString);
    let data = await fetch(requestString);
    console.log(data);
    let response = await data.json();
    console.log(response);

    imgPoke.src = response.sprites.front_default;
    pokeid.textContent = `#ID_POKEMON :  ${response.id}`;
    pokeName.textContent = `#POKEMON_NAME:  ${response.name}`;
}
button.addEventListener('click', loadPokemon)

