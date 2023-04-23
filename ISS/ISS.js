//link to our api resource in this case the co-ordinates of the iss
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS()
{   
    // Use fetch method to load above URL
    const response = await fetch(api_url);
    // Save the response ito the var data
    const data = await response.json();

    // Short hand to create 2 vars that store the lat and long from the JSON data
    const {latitude, longitude} = data;
    
    // Instruct the browser DOM to load the above data into HTML
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    
    // create a map object via the leaflet JS Library
    const map = L.map('map').setView([ latitude/*lat*/,longitude/*long*/],5/*zoomlevel*/);
    
    // The following two variables are requires for the leaflet 'tileLayer' function
    // const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    
    // const attribution = ' Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    
    // const tiles = L.tileLayer(tileURL, attribution);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    tiles.addTo(map);
    
    L.marker([latitude, longitude]).addTo(map);
};


