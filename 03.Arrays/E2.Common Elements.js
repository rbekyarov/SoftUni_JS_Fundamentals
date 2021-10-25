function solve(arr1,arr2){

    let lengthMax = Math.max(arr1.length,arr2.length);
    for (let i = 0; i <lengthMax ; i++) {
        let currentElement1 = arr1[i];
        for (let j = 0; j <lengthMax ; j++) {
           let currentElement2 = arr2[j];

           if(currentElement1===currentElement2){
               console.log(currentElement1);
           }
        }
    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);