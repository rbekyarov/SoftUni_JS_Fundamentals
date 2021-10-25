function solve(arr){
    let sumOdd = 0;
    for (let i = 0; i <arr.length ; i++) {
        let currentElement = Number(arr[i]);
        if (currentElement%2===0){
            sumOdd +=currentElement;
        }
    }

    console.log(sumOdd);
}
solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);