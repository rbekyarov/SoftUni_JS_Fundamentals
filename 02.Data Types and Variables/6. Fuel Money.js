function solve(distance,passengers,priceOneLiter){
    distance = Number(distance);
    passengers = Number(passengers);
    priceOneLiter = Number(priceOneLiter);
    let fuelNeeded = (distance*0.07)+(passengers*0.1);
    let neededMoney =priceOneLiter*fuelNeeded;
    console.log(`Needed money for that trip is ${neededMoney.toFixed(3)}lv.`);
}
solve(260, 9, 2.49);
solve(90, 14, 2.88);