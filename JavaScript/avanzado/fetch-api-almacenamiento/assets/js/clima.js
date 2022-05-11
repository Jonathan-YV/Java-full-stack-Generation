let lat = 0
let lon = 0
const APIkey = "e71cf9cf0c241685c7e9236a97749247"

/* https://openweathermap.org/ */
/* https://openweathermap.org/weather-conditions */

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);

            lat = position.coords.latitude
            lon = position.coords.longitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

            fetch(url).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                return data
            })

        })
    }else{

    }

})

