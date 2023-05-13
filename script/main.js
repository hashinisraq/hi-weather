const API_KEY = `ebb2969e16910960692eadcf3d885bd7`;
const weather = () => {
    const city = document.getElementById("input_data").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
}

const innerData = (id, value) => {
    let param = document.getElementById(id);
    param.innerHTML = value;
}

const setData = data => {
    innerData("city", data.name);
    innerData("temp", data.main.temp);
    innerData("max-temp", data.main.temp_max);
    innerData("condition", data.weather[0].main);
}