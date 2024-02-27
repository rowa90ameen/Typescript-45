function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var location1 = city_country("Lahore", "Pakistan");
var location2 = city_country("New York", "USA");
var location3 = city_country("Tokyo", "Japan");
console.log(location1);
console.log(location2);
console.log(location3);
