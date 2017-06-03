$(document).ready(function () {
    var API_KEY = "a53859c5bed3efd07f32df988def05ee";
    var loc;
    $.getJSON('https://ipinfo.io', function (d) {
        console.log("assigning the data... ");
        loc = d.loc.split(",");
        console.log(loc);

        $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY,
         function (wd) {
            console.log("got the data ,", wd);
            var currentLocation = wd.name;
            var currentWeather = wd.main[0].description;
            var currentTemp = wd.main.temp;
            var high = wd.main.temp_max;
            var low = wd.main.temp_min;

            $("#cityName").html(currentLocation);
        })
    })


})