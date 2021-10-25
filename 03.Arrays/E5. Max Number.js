function solve(arr){
    let topInteger = [];
    for (let i = 0; i <arr.length ; i++) {
       let currentEl = arr[i];
       let isTopInteger = true;

        for (let j = i+1; j <arr.length ; j++) {
            let nextEl = arr[j];
            if (currentEl<=nextEl){
                isTopInteger=false;
                break;

            }
        }
        if(isTopInteger){
            topInteger.push(currentEl);
        }
    }
     console.log(topInteger.join(" "));

}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);