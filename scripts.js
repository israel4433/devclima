


let key = "64c36026e0d86eac65e5a9560cb1dcbf"

function screen(data) {


    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML = "     Umidade   " + data.main.humidity + "%"
}
async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +
        "&appid=" + key +
        "&lang=pt_br" +
        "&units=metric")

        .then(response => response.json())

    screen(data)
}


function buttonClick() {
    let city = document.querySelector(".input-city").value

    searchCity(city)
}