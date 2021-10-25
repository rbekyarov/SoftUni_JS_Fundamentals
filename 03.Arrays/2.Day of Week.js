function solve(numOfDay) {
    numOfDay = Number(numOfDay);
    let dayOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    if (numOfDay <= 0 || numOfDay > 7) {
        console.log("Invalid day!")
    }else{
        for (let i = 0; i < dayOfWeek.length; i++) {
            if (numOfDay===i+1){
                console.log(dayOfWeek[i]);
            }
        }
    }


}

solve(3);
solve(7);
solve(-1);
solve(10);


