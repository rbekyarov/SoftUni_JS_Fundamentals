function solve(arr) {
    let sumAdd = 0;
    let subtract = 0;
    let sumOldArr = 0;
    let sumNewArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let value = Number(arr[i]);
        sumOldArr += value
    }
    for (let i = 0; i < arr.length; i++) {

        let currentElement = Number(arr[i]);
        if (currentElement % 2 === 0) {
            sumAdd = currentElement + i;
            arr[i] = sumAdd;
        } else {
            subtract = currentElement - i;
            arr[i] = subtract;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let value = Number(arr[i]);
        sumNewArr += value
    }
    console.log(arr);
    console.log(sumOldArr);
    console.log(sumNewArr);
}


solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);