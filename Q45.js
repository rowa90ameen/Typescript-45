function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car_info = {
        "manufacturer": manufacturer,
        "model": model
    };
    // Adding extra information
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        var key = extra[0], value = extra[1];
        car_info[key] = value;
    }
    return car_info;
}
// Calling the function with required information and additional details
var car = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
// Printing the returned object to check if all information was stored correctly
console.log(car);
