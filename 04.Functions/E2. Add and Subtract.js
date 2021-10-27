function solve(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }

    function substr(sum, num3) {
        return sum - num3;

    }
    let result = sum(num1,num2);
    console.log(substr(result,num3));

}


solve(23,6,10);