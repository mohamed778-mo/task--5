
let form = document.getElementById('form1')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(weatherFunction, 5000);
    form.reset();
});
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeAlongtitudef=document.getElementById('latitudeAlongtitude')

// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            latitudeAlongtitudef  .innerText="" 
        }
        else {
            
            locationF.innerText = data.location
            forecastF.innerText = data.forecast
            latitudeAlongtitudef.innerText=data.latitudeAlongtitude
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}
