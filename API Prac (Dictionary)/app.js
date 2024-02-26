const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btn = document.getElementById("btn");

const findWord = async () => {
    const inp = document.getElementById("inp");

    url = `${BASE_URL}${inp.value}`

    let apiData = await fetch(url);
    let data = await apiData.json();

    console.log(data);

}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    findWord();
})

