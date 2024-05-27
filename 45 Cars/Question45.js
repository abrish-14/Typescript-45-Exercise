/*Question 45 Cars: Write a function that stores information about a car in a Object. The
function should always receive a manufacturer and a model name. It should then accept
an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the
information was stored correctly.*/
function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        var key = Object.keys(extra)[0];
        var value = extra[key];
        car_info.extras[key] = value;
    }
    return car_info;
}
var car = store_car_info("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
console.log(car);
