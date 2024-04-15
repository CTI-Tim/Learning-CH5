`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
 
    var date = new Date();
    var hours = date.getHours();
    var ampm = (hours>=12?'PM':'AM');
    hours = hours % 12; // Mod 12 to get 12 hour time
    var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    timeDisplay.textContent = hours + ":" + minutes + " " + ampm;
}
refreshTime();
setInterval(refreshTime, 1000);