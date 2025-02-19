function findEvenNumber(minValue, maxValue) {
    if (typeof minValue !== "number" || typeof maxValue !== "number") {
        return "Invalid";
    }
    let evenNumbers = [];
    if (minValue % 2 === 1 || minValue % 2 === -1) {
        minValue++;
    }
    while (minValue <= maxValue) {
        evenNumbers.push(minValue);
        console.log(minValue);
        minValue += 2;
    }
    return evenNumbers;
}
const result = findEvenNumber(-8, 10);
console.log(result);
