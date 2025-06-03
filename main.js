let list = document.querySelector("#list")
let innerList = document.querySelector("#innerList")
let fetchCountries = async (url) => {
    let res = await fetch(url)
    let json = await res.json()

    WriteCountries(json)
}

fetchCountries("https://restcountries.com/v3.1/all")

function WriteCountries(data) {
    data.forEach((country) => {

        let li = document.createElement("li")
        li.innerHTML = `<div class="bg-gray-300 rounded-md ">
<h3 class="text-center font-bold text-[20px]">
${country.name.common}
</h3>
<img class="w-[200px] h-[100px] mx-auto" src="${country.flags.png}" alt="${country.flags.alt}">
</div>`



        li.addEventListener("click", () => {
            InnerFunction(country)
        })
        list.appendChild(li)
    })
}


function InnerFunction(country) {
    list.style.display = "none"

    console.log(country)
    innerList.innerHTML = `
<div class="bg-gray-300 rounded-md ">
<p>Name: ${country.name.common}</p>
<p>Region: ${country.region}</p>
<p>Area: ${country.area}</p>

<img class="w-[200px] h-[100px] mx-auto" src="${country.flags.png}" alt="${country.flags.alt}">


</div>

`
    let card = document.querySelector("div")
}
