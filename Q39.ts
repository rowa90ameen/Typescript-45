function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("New York", "USA");
let location3 = city_country("Tokyo", "Japan");

console.log(location1);
console.log(location2);
console.log(location3);
