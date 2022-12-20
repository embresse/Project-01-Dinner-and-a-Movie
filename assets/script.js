var button= document.querySelector('#button')
var inputValue = document.querySelector('#location-input')
var resultContainer= document.querySelector('#weather')
var city = document.createElement('p')
 resultContainer.append(city)

var localWeatherHeader = document.querySelector('.local-weather')
var placesToGo = document.querySelector('.places-to-go')

button.addEventListener('click',function(event){
    event.preventDefault()
    localWeatherHeader.style.display = "block";
    placesToGo.style.display = "block";

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

    // if all is selected then checks both theaters and restaurants, if unselected deselects all
    $("#all").change(function () {
        if (!$("input:checkbox").is("checked")) {
            $("input:checkbox").prop("checked", this.checked);
    
        } else {
            $("input:checkbox").prop("checked", false);
        }
    });

    // unchecks "both" if one box is unchecked
    $(".check-single").change(function () {
        $(".check-single").click(function () {
            if ($(this).is(":checked")) {
                var isAllChecked = 0;
    
                $(".check-single").each(function () {
                    if (!this.checked) isAllChecked = 1;
                });
    
                if (isAllChecked == 0) {
                    $("all").prop("checked", true);
                }
            } else {
                $("#all").prop("checked", false);
            }
        });
    });

