
// 2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and 
// display all the country flags in console


const getCountries1=(value)=>{
    const xhr = new XMLHttpRequest();
    // data - API endpoint (URL which contains json data)
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    // xhr.responseType = 'json';    
    xhr.onload = () =>{
        const countries = xhr.response;        
        const val=JSON.parse(countries);
        for(let i in val)
            console.log(val[i].flag);      
    }    
    xhr.send();
}

getCountries1();

