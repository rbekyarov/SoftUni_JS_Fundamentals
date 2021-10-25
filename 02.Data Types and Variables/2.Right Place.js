function solve(str,char,str1){
    let output = str.replace('_',char);
    if (output===str1){
        console.log("Matched");
    }else {
        console.log("Not Matched");
    }
}
solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');