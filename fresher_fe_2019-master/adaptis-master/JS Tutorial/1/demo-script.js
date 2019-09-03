$(document).ready(function () {
    var supercarObject = { "brand": "Lamborghini", "model": "Huracan", "origin": "Italy" };
    $.each(supercarObject, function (key, value) {
        $("#result").append(key + ": " + value + '<br>');
    });
});