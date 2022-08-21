const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const block = document.querySelector('.block');
const city = document.querySelector('.city');
const deg = document.querySelector('.deg');
const wind = document.querySelector('.wind');
const desc = document.querySelector('.desc');
const humd = document.querySelector('.humd');


let weatherData;

btn.addEventListener('click', () => {
        let val = input.value
        input.focus()
        if(val){
        fetch(`
            https://api.openweathermap.org/data/2.5/weather?q=${val}
            &appid=7770b866502e2b12ef91772124cb2858&units=metric&cnt=7
            `)
        .then((response) => response.json())
        .then((data) => {
            weatherData = data;
            console.log(data)
            return weatherData;
        })
        .then(buildHTML)
        }else{
            alert('error');
        }
});

// input.addEventListener('keypress', function() {
//     if(e.key == "Enter"){
//          req();
//     }
// });

// const buildHTML = ({ weatherData }) =>
// list.map(({ weatherData }) => (`
//   <div class = "">
//     <h2>${weatherData.name}</h2>
//     <p>${weatherData.description}</p>
//   </div>
// `)).join("");

const buildHTML = (weatherData) => {
    city.innerHTML = weatherData.name;
    desc.innerHTML = weatherData.weather[0].description;
    humd.innerHTML = `humidity ${weatherData.main.humidity} %`;
    deg.innerHTML = `temperature ${weatherData.main.temp} °C`;
    wind.innerHTML = `wind speed ${weatherData.wind.speed} m/s`;
}