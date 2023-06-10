const weatherApi={
    Key: "b5078df82bb2b670331f73c175bd13ae",
    BaseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}
const searchInputBox=document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
    console.log(searchInputBox.value);
    }
});

function getWeatherReport(city){
    fetch('$(weatherApi.BaseUrl)?q =${city}&appid=${weatherApi.key}')
    .then(weather => {
        return weather.json();
    }).then(showweatherReport);
}
function showweatherReport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText='${weather.name},${weather.sys.country}';
    let temperature=document.getElementById('temp');
    temperature.innerHTML='${Math.round(weather.main.temp)}&deg;C';
    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML='${Math.floor(weather.main.temp_min)}&deg;C';
}