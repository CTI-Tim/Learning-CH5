function GetWeather()
{
    const apikey = "OpenWEather.com api key goes here";
    const ZipCode="32712";

    var key = '{yourkey}';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + ZipCode+ '&units=imperial&appid=' + apikey)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      DrawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
}
function DrawWeather(d)
{
    document.getElementById("temperature").innerHTML = d.main.temp + '&deg;F';
}
setInterval(refreshTime, 1800000); // every 30 minutes (free account is hard limited to 100 requests a day. thing will make 48 requests per day per touchpanel)