function solve(arr) {
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += arr[leftIndex];
        }
        for (let rightIndex = i + 1; rightIndex <= arr.length - 1; rightIndex++) {
            rightSum += arr[rightIndex];
        }
        if (leftSum === rightSum) {
            console.log(i);
            isFound = true;
        }
    }
    if (!isFound) {
        console.log("no");
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);