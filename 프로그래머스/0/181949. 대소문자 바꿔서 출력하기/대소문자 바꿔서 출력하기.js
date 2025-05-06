const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = ''
    
    for (let elm of str){
        if(elm === elm.toLowerCase()){
            result += elm.toUpperCase()
        } else {
            result += elm.toLowerCase()
        }
    }
    
    console.log(result)
});