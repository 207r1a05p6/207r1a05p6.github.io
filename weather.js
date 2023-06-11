const weatherApi={
    Key: "b5078df82bb2b670331f73c175bd13ae",
    BaseUrl: "https://api.openweathermap.org/data/2.5/weather?",
}
const searchInputBox=document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display="block";
    }
});

function getWeatherReport(city){
    fetch(`$(weatherApi.BaseUrl)?q =${city}&appid=${weatherApi.Key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showweatherReport);
}
function showweatherReport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;
    
    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('istockphoto-162428248-612x612.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('clouds_from_above.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('desktop-wallpaper-rain-forest-rain-and-background-rain-for-your-mobile-tablet-explore-beautiful-rain-beautiful-rain-most-beautiful-rain-forest-rain-cute.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('BEST-SNOW-PLACES-IN-INDIA-FEATURE-compressed.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('GettyImages-940296124-scaled.jpg')";
        
    } 
}

function dateManage(dateArg){
    let days= ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    let months=["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}