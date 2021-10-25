function solve(num){
    let str = num.toString();
    let sum=0;
    for (let i = 0; i <str.length ; i++) {
        let currentNum = Number(str[i]);
        sum +=currentNum;
    }
console.log(sum);
}
solve(245678);
solve(97561);
solve(543);