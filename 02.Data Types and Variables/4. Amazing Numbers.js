function solve(num){
let str = num.toString();
let sumNums = 0;
    for (let i = 0; i <str.length ; i++) {
        let currentNum = Number(str.charAt(i));
        sumNums +=currentNum;
    }
       let check = sumNums.toString().includes('9');
    if (check){
        console.log(`${num} Amazing? True`)
    }else {
        console.log(`${num} Amazing? False`)
    }
}
solve(1233);
solve(999);