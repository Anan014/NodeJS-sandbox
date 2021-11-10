const getVideos = async() => {
    const response = await axios.get("https://swapi.dev/api/films")
}

const getStars = async() => {
    const response = await (await fetch('https://swapi.dev/api/films')).json();
}

const request = require('request');

request('https://swapi.dev/api/films', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
});