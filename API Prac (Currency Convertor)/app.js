const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const selects = document.querySelectorAll("select");
const btn = document.getElementById("btn");

for (let select of selects) {
    for (let cunCodes in countryList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = cunCodes;
        newOpt.value = cunCodes;
        select.append(newOpt);

        if (cunCodes === "USD" && select.name === "fromopts") {
            newOpt.selected = "selected";
        }
        else if (cunCodes === "INR" && select.name === "toopts") {
            newOpt.selected = "selected";
        }

    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let con = element.value;
    let conCode = countryList[con];
    // console.log(conCode);

    const img = element.parentElement.querySelector("img");

    img.src = `https://flagsapi.com/${conCode}/flat/64.png`

    // console.log(img);

}

const updateExngrate = async () => {
    const input = document.getElementById("input");
    const anstxt = document.getElementById("anstxt");
    const fromCn = document.getElementById("fromDD");
    const toCn = document.getElementById("toDD");

    let inp = input.value;

    if (inp < 1) {
        input.value = 1;
        inp = 1;
    }
    // console.log(inp);


    let apiURL = `${BASE_URL}/${fromCn.value.toLowerCase()}/${toCn.value.toLowerCase()}.json`;


    let apiRes = await fetch(apiURL);
    let apiData = await apiRes.json();

    let rateVal = apiData[toCn.value.toLowerCase()];

    // console.log(rateVal);

    anstxt.innerHTML = `${inp} ${fromCn.value} = ${inp * rateVal} ${toCn.value}`;
}

window.addEventListener("load", () => {
    updateExngrate();
})

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExngrate();
})



