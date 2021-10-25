function solve(arr1,arr2){
    let sum = 0;
    let index = 0;
    let  isIdentical = false;
    for (let i = 0; i <arr1.length ; i++) {
        let currentArr1Element = Number(arr1[i]);
        let currentArr2Element = Number(arr2[i]);

        if (currentArr1Element!==currentArr2Element){
            index =i;
            isIdentical = false;
            break;
        } else {
            sum+=currentArr1Element;
            isIdentical = true;
        }
    }
    if(!isIdentical){
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }else {
        console.log(`Arrays are identical. Sum: ${sum}`);

    }

}
solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);