function store_car_info(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    let car_info: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };

    // Adding extra information
    for (let extra of extras) {
        const [key, value] = extra;
        car_info[key] = value;
    }

    return car_info;
}

// Calling the function with required information and additional details
let car = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

// Printing the returned object to check if all information was stored correctly
console.log(car);
