function solve(arr) {
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr[arr.length - 1]);
    let sum = firstNum + lastNum;

    console.log(sum);
}

solve(['20', '30', '40']);
solve(['10', '17', '22', '33']);
solve(['11', '58', '69']);