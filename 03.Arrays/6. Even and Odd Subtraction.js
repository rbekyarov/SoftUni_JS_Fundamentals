function solve(arr){
    let sumEven = 0;
    let sumOdd = 0
    for (let i = 0; i <arr.length ; i++) {
        let currentElement = Number(arr[i]);
        if (currentElement%2===0){
            sumEven +=currentElement;
        }else {
            sumOdd +=currentElement;
        }
    }

    console.log(sumEven - sumOdd);
}
solve([1,2,3,4,5,6]);