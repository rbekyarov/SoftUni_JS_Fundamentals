function solve(char1,char2){
    let firstChar=char1.charCodeAt(0);
    let endChar=char2.charCodeAt(0);
    let minChar = Math.min(firstChar,endChar);
    let maxChar = Math.max(firstChar,endChar);
let arrayChar = [];
    for (let i = minChar+1; i <maxChar ; i++) {
        arrayChar.push(String.fromCharCode(i));
    }
    console.log(arrayChar.join(" "));
}
solve('a', 'd');
solve('#', ':');
solve('C', '#');