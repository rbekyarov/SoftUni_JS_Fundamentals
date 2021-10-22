function solve(people, typeGroup, day) {
    people = Number(people);
    let price = 0;

    switch (typeGroup) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;
                case "Sunday":
                    price = 22.5;
                    break;
            }
            break;

    }
    let totalPrice = price * people;
    if (people >= 30 && typeGroup === "Students") {
        totalPrice = totalPrice - totalPrice * 0.15;
    } else if (people >= 100 && typeGroup === "Business") {
        totalPrice = totalPrice - totalPrice * 10;
    } else if (people >= 10 && people <= 20 && typeGroup === "Regular") {
        totalPrice = totalPrice - totalPrice * 0.05;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
);
solve(40,
    "Regular",
    "Saturday"
);