
// 3.Use the same rest countries and print all countries name, region, 
// sub region and population


const getCountries2=(value)=>{
    const xhr = new XMLHttpRequest();
    // data - API endpoint (URL which contains json data)
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    // xhr.responseType = 'json';    
    xhr.onload = () =>{
        const countries = xhr.response;             
        const val=JSON.parse(countries);
        for(let i in val)
        {
            console.log("Country Name=",val[i].name+', '+'Region=',val[i].region+', '+'Population=',val[i].population);       
        }
    }    
    xhr.send();
}

getCountries2();