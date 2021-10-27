function solve(number) {
    let numStr = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    function sumEv(currentNum) {
        sumEven += currentNum;
    }

    function sumOd(currentNum) {
        sumOdd += currentNum;
    }

    for (let i = 0; i < numStr.length; i++) {
        let currentNum = Number(numStr[i]);
        if (currentNum % 2 === 0) {
            sumEv(currentNum)
        } else {
            sumOd(currentNum);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

}

solve(1000435);
solve(3495892137259234);