var button= document.querySelector('#button')
var inputElement = document.querySelector('#location-input')
var resultContainer= document.querySelector('#weather')
var city = document.createElement('p')
 resultContainer.append(city)

var localWeatherHeader = document.querySelector('.local-weather')
var placesToGo = document.querySelector('.places-to-go')

const options = {
    strictBounds: false,
    types: ["establishment", "geocode"],
  };

let checkBoxValue = " ";
let restaurantsBox = document.getElementById ("restaurants");
let theatersBox = document.getElementById ("theaters");




button.addEventListener('click',function(event){
    event.preventDefault()


    })

    function renderWeather(city) {

        var city = inputElement.value;
    
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

    function initMap () {
        const autoComplete = new google.maps.places.Autocomplete(inputElement, options);
        autoComplete.addListener("place_changed", () => {
            console.log(autoComplete.getPlace())
            
            const selectedPlace = autoComplete.getPlace()
            const latitude = selectedPlace.geometry.location.lat()
            const longitude = selectedPlace.geometry.location.lng()
            const coordinates = {
                lat: latitude,
                lng: longitude,
            }
         

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: coordinates,
            });

            let getNextPage; 
            const places = new google.maps.places.PlacesService(map)

            if (restaurantsBox.checked == true ) {
                checkBoxValue = "restaurants";
            } else if (theatersBox.checked == true) {
                checkBoxValue = "theaters";
            }

            places.textSearch({
                location: coordinates,
                radius: 5000,
                query: checkBoxValue,

            }, (results, status, pagination) => {
                if (status !== "OK" || !results)
                return;
                
                addPlaces(results, map)

                if (pagination && pagination.hasNextPage) {
                  getNextPage = () => {
                    pagination.nextPage()
                  }  
                }

            })

            function addPlaces(locations, map) {
                for (const location of locations) {
                    if (location.geometry&&location.geometry.location) {
                        const image = {
                            url: location.icon,
                            size: new google.maps.Size(71,71),
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(17,34),
                            scaledSize: new google.maps.Size(25,25),
                        };
                        new google.maps.Marker({
                            map,
                            icon: image,
                            title: location.name,
                            position: location.geometry.location,
                    })
                }
            }}

            const city = selectedPlace.address_components[0]; 

            renderWeather(city)
        
        })
    }

 

    window.initMap=initMap;
