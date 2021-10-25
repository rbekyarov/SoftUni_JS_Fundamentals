function solve(arr1,arr2){
    let arr3 = [];

    for (let i = 0; i <arr1.length ; i++) {
      if (i%2===0){
          numArr1 = Number(arr1[i]);
          numArr2 = Number(arr2[i]);
          arr3[i] = numArr1+numArr2;
      }else {
          strArr1 = arr1[i];
          strArr2 = arr2[i];
          arr3[i] = strArr1+strArr2;
      }
    }
console.log(arr3.join(" - "));

}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);

solve(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);