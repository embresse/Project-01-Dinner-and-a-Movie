var button= document.querySelector('.button')
var inputValue = document.querySelector('inputValue')
var desc = document.querySelector('desc');
var temp = document.querySelector('.temp')



    fetch('https://api.openweathermap.org/data/2.5/weather?q=Richmond&units=imperial&appid=65ea356fac868b7989b751cef0bfce08')
    .then((response) => response.json())
    .then((data) => console.log(data));

    button.addEventListener(click)

 