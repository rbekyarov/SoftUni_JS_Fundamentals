function solve(input) {
    let userName = input[0];
    let reversedUserName = "";
    let countInvalidPass = 0;
    for (let i = userName.length-1; i >= 0; i--) {
        reversedUserName += userName[i];
    }
    for (let i = 1; i < input.length; i++) {
        if (input[i] === reversedUserName) {
           console.log(`User ${userName} logged in.`);
        } else {
            countInvalidPass++;
            if (countInvalidPass>3){
                console.log(`User ${userName} blocked!`)
            }else {
                console.log("Incorrect password. Try again." );
            }
        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);