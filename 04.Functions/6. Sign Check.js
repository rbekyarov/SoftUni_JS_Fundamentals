function solve(numOne, numTwo, numThree) {
    let resultNum = 0;
    let result = "";
    resultNum =numOne * numTwo * numThree;
    if(resultNum<0){
        result ="Negative";
    }else {
        result ="Positive";
    }
    return result;
}

solve(5, 12, -15);
solve(-6, -12, 14);