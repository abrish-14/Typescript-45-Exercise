/*Question 45 Cars: Write a function that stores information about a car in a Object. The 
function should always receive a manufacturer and a model name. It should then accept 
an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly.*/

function store_car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    let car_info: { manufacturer: string, model: string, extras: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };

    for (let extra of extras) {
        let key = Object.keys(extra)[0];
        let value = extra[key];
        car_info.extras[key] = value;
    }

    return car_info;
}

let car = store_car_info("Toyota", "Camry", { color: "Blue" }, { year: 2022 });




















console.log(car);


