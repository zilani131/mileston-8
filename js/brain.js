const loadCountries=()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=country=>{
   
    const countryHtml=country.map(country=>countryContainer(country))
    // console.log(country.name.common)
    const containerCountries=document.getElementById("countries")
    containerCountries.innerHTML=countryHtml.join(' ')
}


const countryContainer=country=>{
   
    return `
    <div class="card">
    <div class="card-child"><h2>${country.name.common}</h2>
    <img src="${country.flags.png}"></div>
    </div>

    `
}









loadCountries()