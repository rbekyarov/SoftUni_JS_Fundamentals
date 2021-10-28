function solve(num) {
    function getNumDivideByNum(num) {
        let arrayNum = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                arrayNum.push(i);
            }
        }
        let sum = 0;
        for (let i = 0; i < arrayNum.length; i++) {
            sum += Number(arrayNum[i]);
        }
        return sum
    }

    if (getNumDivideByNum(num) === num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

solve(6);
solve(28);
solve(1236498);