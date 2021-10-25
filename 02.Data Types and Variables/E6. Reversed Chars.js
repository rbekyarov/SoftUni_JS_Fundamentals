function solve(char1,char2,char3){
    let sum=char1+char2+char3;
    let output = "";
    for (let i = sum.length-1; i >=0 ; i--) {
         output +=sum[i]+" ";
    }
    console.log(output);

}
solve('A', 'B', 'C');