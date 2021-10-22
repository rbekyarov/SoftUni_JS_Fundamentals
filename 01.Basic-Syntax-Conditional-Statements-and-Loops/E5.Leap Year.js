function solve(year){
     year=Number(year);
     if(year%100===0 && year%400===0){
          console.log("yes");
     }
     if(year%4===0 && year%100===0 && year%400!==0){
          console.log("no");
     }
     if(year%4===0 && year%100!==0){
          console.log("yes");
     }
     if(year%4!==0){
          console.log("no");
     }
}
solve(1984);
solve(2003);
solve(4);

