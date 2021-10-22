function solve(n) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        let printResult = "";
        for (let j = 1; j <= i; j++) {
            printResult += i + ' ';
        }
        console.log(printResult);
    }
}

solve(3)