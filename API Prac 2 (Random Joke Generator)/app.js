let BASE_URL = "https://v2.jokeapi.dev/joke/Any";

let btn = document.getElementById("btn");

const updateJoke = async () => {
    let joke = document.getElementById("joke");

    let fetchData = await fetch(BASE_URL);

    let dataJoke = await fetchData.json();

    console.log(dataJoke);

    if (dataJoke.type === "single") {
        joke.innerHTML = dataJoke.joke;
    }
    else if (dataJoke.type === "twopart") {
        joke.innerHTML = `Setup : ${dataJoke.setup} <br> Delivery : ${dataJoke.delivery}`;
    }
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateJoke();
})

window.addEventListener("load", () => {
    updateJoke();
})