function multiplicationTable(number) {
    if (typeof number !== "number" || number <= 0) {
        console.log("Invalid");
        return "Invalid";
    }
    let i = 1;
    while (i <= 10) {
        console.log(i, "X", number, ":", i * number);
        i++;
    }
}
multiplicationTable(5);
multiplicationTable(-7);
multiplicationTable("Eight");
multiplicationTable(0);
