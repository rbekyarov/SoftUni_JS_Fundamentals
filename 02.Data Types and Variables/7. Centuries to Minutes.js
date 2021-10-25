function solve(centuries){
    centuries = Number(centuries);
    let years = 100*centuries;
    let days = Math.floor(365.2422 * years);
    let hours = 24*days;
    let minute = 60*hours;
console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minute} minutes`);
}
solve(1);
solve(5);

