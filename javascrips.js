
function weather() {
  let long;
  let lat;
  navigator.geolocation.getCurrentPosition(async(position) =>{
    long = position.coords.longitude;
    lat = position.coords.latitude;
    var api = `https://api.weatherapi.com/v1/current.json?key=c50a597f33804ab0b6a162647222603&q=${lat},${long}&aqi=no`;
    let response = await fetch(api);
    let parsed = await response.json();
    console.log(parsed);
    let tempf = document.getElementById('tempdegree');
    tempf.innerHTML = parsed.current.temp_f;
    let timezoneid = document.getElementById('tzid');
    timezoneid.innerHTML = parsed.location.tz_id;
    let condition = document.getElementById('tempcondition');
    condition.innerHTML = parsed.current.condition.text;
    let imagelink = parsed.current.condition.icon;
    let image = document.getElementById('setimage');
    image.src = imagelink;
  });
}
async function getlocationweather() {
  let place = document.getElementById('searchlocation').value;
  const api = `http://api.weatherapi.com/v1/current.json?key=c50a597f33804ab0b6a162647222603&q=${place}&aqi=no`;
  let response = await fetch(api);
  let parsed = await response.json();
  console.log(parsed);
  let tempf = document.getElementById('tempdegree');
  tempf.innerHTML = parsed.current.temp_f;
  let timezoneid = document.getElementById('tzid');
  timezoneid.innerHTML = parsed.location.tz_id;
  let condition = document.getElementById('tempcondition');
  condition.innerHTML = parsed.current.condition.text;
  let imagelink = parsed.current.condition.icon;
  let image = document.getElementById('setimage');
  image.src = imagelink;

}
