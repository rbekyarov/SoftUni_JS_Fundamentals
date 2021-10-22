function solve(n){
    n=Number(n);
    let sum = 0;
    for (let i = 1; i <=n*2 ; i++) {
        if (i%2===1){
            sum+=i;
            console.log(i)
        }

    }
    console.log(`Sum: ${sum}`);
}
solve(5)