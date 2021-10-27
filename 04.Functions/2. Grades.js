function solve(score) {
    let grade = "";
    score = Number(score);
    if (score < 3) {
        score = 2;
        grade = "Fail";
        console.log(`${grade} (${score})`);
        return;
    } else if (score >= 3.00 && score < 3.50) {
        grade = "Poor";
    } else if (score >= 3.50 && score < 4.50) {
        grade = "Good";
    } else if (score >= 4.50 && score < 5.50) {
        grade = "Very good";
    } else {
        grade = "Excellent";
    }
    console.log(`${grade} (${score.toFixed(2)})`);
    //return grade;
}

console.log(solve(5));


