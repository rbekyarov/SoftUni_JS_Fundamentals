function solve(arr,rotationCount){
    for (let i = 0; i <rotationCount ; i++) {
        let firstElement = arr[0];
        for (let j = 0; j <arr.length-1 ; j++) {
            arr[j]=arr[j+1]
        }
        arr[arr.length-1]=firstElement;
    }
console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);