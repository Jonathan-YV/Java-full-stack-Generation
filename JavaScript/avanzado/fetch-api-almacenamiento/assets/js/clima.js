let lat = 0
let lon = 0
const APIkey = ""

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

