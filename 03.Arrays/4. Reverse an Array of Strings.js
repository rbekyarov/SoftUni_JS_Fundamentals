function solve(arr){
    for (let i = 0; i <arr.length/2 ; i++) {
        let oldString = arr[i];
        let prevIndex = arr.length-1-i;
        arr[i]=arr[prevIndex];
        arr[prevIndex]= oldString;
    }
     console.log(arr.join(" "))
}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);