var button= document.querySelector('#button')
var inputValue = document.querySelector('#location-input')
var resultContainer= document.querySelector('#weather')
var city = document.createElement('p')
 resultContainer.append(city)

button.addEventListener('click',function(event){
    event.preventDefault()
    console.log(inputValue)
    var city = inputValue.value;
    

    function renderWeather(weather) {
        console.log(weather);
        event.preventDefault
    
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=65ea356fac868b7989b751cef0bfce08&units=imperial")

            
        
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            
    
            var city = document.createElement("p");
            city.textContent = data.name;
            resultContainer.append(city);
    
            var temp = document.createElement("p");
            temp.textContent = "temp:" + data.main.temp + "°F"; 
            resultContainer.append(temp);

          });
        }
           console.log(renderWeather)
          renderWeather()
    })