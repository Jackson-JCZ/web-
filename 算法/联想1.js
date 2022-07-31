var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

let test = 0;

rl.on('line', function(line) {
    if(line == '') {
        rl.close();
        return;
    }
    if(test <= 0) {
        test = parseInt(line);
    } else if(test > 0) {
        let str = line.split(' ').map(x=>parseInt(x))
        test--;
        let times_a = parseInt(Math.ceil(str[2]/str[0]))*str[1]
        let times_b = parseInt(Math.ceil(str[5]/str[3]))*str[4]
        if(times_a < times_b) {
            console.log('A')
        } else if(times_a > times_b) {
            console.log('B')
        } else {
            console.log('A&B')
        }
    }
})
