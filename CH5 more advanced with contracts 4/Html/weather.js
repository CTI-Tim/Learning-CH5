function GetWeather()
{
    var apikey = "GET YOUR OWN API KEY AT openweathermap.org";
    var ZipCode="32712";

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
  if(d.main.temp.length > 1)
  {
  document.getElementById("temperature").innerHTML = d.main.temp + '&deg;F ';
  }
  else
  {
    document.getElementById("temperature").innerHTML = '999&deg;F ';
  }
}
GetWeather();
setInterval(GetWeather, 1800000); // every 30 minutes (free account is hard limited to 100 requests a day. thing will make 48 requests per day per touchpanel)