var button= document.querySelector('.button')
var inputValue = document.querySelector('#inputValue')
var resultContainer= document.querySelector('#weather-container')
var city = document.createElement('p')
resultsContainer.append(city)

button.addEventListener('click',function(event){
    event.preventDefault
    console.log(inputValue.value)
    


     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + '&appid=65ea356fac868b7989b751cef0bfce08')
    .then((response) => response.json())
    .then((data) => console.log(data));



then((response) => response.json())
.then((data) => { 
  console.log(data)
  console.log(data.main.temp)

   
})

    var city= document.createElement('p');
   city.textContent= weather.data;
   resultsContainer.append(city);

   var temp  = document.createElement("p");
   temp.textContent = "temp:" + data.main.temp+ "°F";
   resultsContainer.append(temp);

})
