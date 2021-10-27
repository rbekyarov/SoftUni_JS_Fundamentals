/*
6. Password Validator
Write a function that checks if a given password is valid. Password validations are:
    •	The length should be 6 - 10 characters (inclusive)
•	It should consists only of letters and digits
•	It should have at least 2 digits
If a password is valid print "Password is valid".
    If it is NOT valid, for every unfulfilled rule print a message:
    •	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"
*/
function solve(input) {
    function checkNumsCharacters(input) {
        let inputStr = input.toString();
        let count = 0;
        let isOk = false;
        for (let i = 0; i < inputStr.length; i++) {
            count++
        }
        if (count >= 6 && count <= 10) {
            isOk = true;
        }
        return isOk;
    }

    function onlyLetterOrDigit(input) {
        let pass = input.toString();
        let isOk = false;
        for (let i = 0; i < pass.length; i++) {
            let currentChar = pass[i];

            if ((currentChar.codePointAt(0) > 46 && currentChar.codePointAt(0) < 58)
                || (currentChar.codePointAt(0) > 64 && currentChar.codePointAt(0) < 91)
                || (currentChar.codePointAt(0) > 96 && currentChar.codePointAt(0) < 123)) {
                isOk = true;
            } else {
                isOk = false;
                break;
            }
        }
        return isOk;
    }

    function isTwoDigits(input) {
        let pass = input.toString();
        let isOk = false;
        let count = 0;
        for (let i = 0; i < pass.length; i++) {
            let currentChar = pass[i];
            if (currentChar.codePointAt(0) > 46 && currentChar.codePointAt(0) < 58) {
                count++;
            }
        }
        if (count >= 2) {
            isOk = true;
        }
        return isOk;
    }

    if (!checkNumsCharacters(input)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!onlyLetterOrDigit(input)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isTwoDigits(input)) {
        console.log("Password must have at least 2 digits");
    }
    if (checkNumsCharacters(input) && onlyLetterOrDigit(input) && isTwoDigits(input)) {
        console.log("Password is valid");
    }

}

solve('logIn');
console.log("_________________________");
solve('MyPass123');
console.log("_________________________");
solve('Pa$s$s');
