function solve(arr){


    let bestCount = 0;
    let index = 0;
    let output = [];
    for (let i = 0; i <arr.length ; i++) {
        let count = 1;
        for (let j = i; j <arr.length ; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count > bestCount) {
                    bestCount = count;
                    index = i;
                    output[i]=arr[i]
                }
            } else {
                break;
            }
        }
    }

        console.log(output);


}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//solve([1, 1, 1, 2, 3, 1, 3, 3]);
//solve([1, 1, 1, 2, 3, 1, 3, 3]);
//solve([4, 4, 4, 4]);
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);