function kilometersToMiles(kilometer) {
    if (typeof kilometer !== "number" || kilometer < 0) {
        return "Invalid";
    }
    const miles = kilometer * 0.621371;
    return miles;
}
const result = kilometersToMiles(10);
console.log(result);
const result1 = kilometersToMiles(5);
console.log(result1);
const result2 = kilometersToMiles(-10);
console.log(result2);
const result3 = kilometersToMiles("five");
console.log(result3);
const result4 = kilometersToMiles(30);
console.log(result4);
