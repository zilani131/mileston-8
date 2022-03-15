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
    // join(' ') is used to avoid comma when mapping 
}
// option 2
// here we pass the object property as parameter
// as we see in option 1 countrys ={name,flags}
//  so we can directly pass object property as parameter
const countryContainer=({name,flags})=>{
           
        return `
        <div class="card">
        <div class="card-child"><h2>${name.common}</h2>
        <img src="${flags.png}"></div>
        </div>
    
        `
    }

// option-1
// const countryContainer=country=>{
//         const {name,flags}=country
//     return `
//     <div class="card">
//     <div class="card-child"><h2>${name.common}</h2>
//     <img src="${flags.png}"></div>
//     </div>

//     `
// }

// orginal

// const countryContainer=country=>{
   
//     return `
//     <div class="card">
//     <div class="card-child"><h2>${country.name.common}</h2>
//     <img src="${country.flags.png}"></div>
//     </div>

//     `
// }









loadCountries()