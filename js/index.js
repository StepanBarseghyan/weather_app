
import config from '../config.js'
const apiKey = config.apiKey;
let coordinate = $(".coordinate");
let cont = document.getElementById("cont");
$(".coordinate").click(function() {
  let lat = $(this).data("latitude");
  let lon =  $(this).data("longitude");
  let api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  function loadDoc() {
    fetch(api_url)
    .then(data=> data.json())
    .then(data=>{
      $("#date").html(new Date());
      $("#region").html(data.name);
      $("#celcus").html(Math.round(data.main.temp) + '&deg;' + 'C');
      $("#icon").html(`<img src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`);
      $("#weather").html(data.weather[0].description);
      $("#wind_speed").html("Wind Speed:" + "  " + data.wind.speed + "m/s");
    })
  }
  loadDoc();
});

$(".coordinate").click(function() {
  let coordinateY = this.getBoundingClientRect().top;
  let coordinateX = this.getBoundingClientRect().left;
  let plane = document.querySelector(".plane");
  plane.style.left = coordinateX + "px";
  plane.style.top = coordinateY + "px";
  plane.style.cursor = "pointer";

  
});
 


