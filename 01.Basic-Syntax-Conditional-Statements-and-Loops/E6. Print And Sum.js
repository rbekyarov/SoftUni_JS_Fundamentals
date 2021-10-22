function solve (start,end){
    start=Number(start);
    end=Number(end);
    let printResult = "";
    let sum = 0;
    for (let i = start; i <=end ; i++) {
        printResult += `${i} `;
        sum +=i;
    }

    console.log(printResult);
    console.log(`Sum: ${sum}`);


}
solve(5, 10);
solve(0, 26);