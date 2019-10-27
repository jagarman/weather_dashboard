var apiKey = "b0c4ceed56fc515a6a7b38c46a679ae2"
var citySearchInput;
var currentWeatherQueryUrl;

$('#search-button').on('click', function () {
    var citySearchInput = $('.searchInput').val()
    console.log(citySearchInput)
    var currentWeatherQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearchInput + '&appid=' + apiKey
    $.ajax({
        url: currentWeatherQueryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var countryCode = response.sys.country
        console.log(countryCode)
        var fiveDayWeatherQueryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearchInput + ',' + countryCode + '&appid=' + apiKey
        console.log(fiveDayWeatherQueryUrl)
        $.ajax({
            url: currentWeatherQueryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    });
})