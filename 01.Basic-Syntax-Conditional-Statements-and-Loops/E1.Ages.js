function solve(year) {
    year = Number(year);
    let result = "";
    if (year >= 0 && year <= 2) {
        result = "baby";
    } else if (year >= 3 && year <= 13) {
        result = "child";
    } else if (year >= 14 && year <= 19) {
        result = "teenager";
    } else if (year >= 20 && year <= 65) {
        result = "adult";
    } else if (year >= 66) {
        result = "elder";
    }
    console.log(result);
}
solve(46);

