var citySearch = document.getElementById("search-btn");
citySearch.addEventListener('click', function() {
var cityCapture = $("#City").val();

var cityName = cityCapture;
var apiKey = "fa9784205b49292ab2414ffcca96b369";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.Runtime);
    var cardTemplate = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${response.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${response.weather[0].description}</h6>
      <p class="card-text">${response.main.temp}</p>
    </div>
  </div>`
  $("#weather_card").html(cardTemplate)
  });

} )