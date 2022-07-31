var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();
let n, q, n_copy;
let line_n = 0;
let ary = []
rl.on('line', function(line) {
    if(line == '') {
        rl.close();
        return;
    }
    if(line_n == 0) {
        let tmp = line.split(' ').map(x=>parseInt(x))
        n = tmp[0], q = tmp[1];
        n_copy = tmp[0];
        line_n++;
    } else if(n_copy>=0) {
        if(n_copy>0) {
            let tmp = line.split(' ').map(x=>parseInt(x))
            ary.push(tmp)
            n_copy--;
        } else {
            let action = line.split(' ').map(x=>parseInt(x))
            let rc = action[1] - 1;
            if(action[0] == 1) {
                let end = ary[rc][n-1];
                for(let i=n-1; i>0; i--) {
                    ary[rc][i] = ary[rc][i-1];
                }
                ary[rc][0] = end;
                for(let i=0; i<n; i++) {
                    let count_line = ''
                    for(let j=0; j<n; j++) {
                        count_line += ary[i][j] + ' '
                    }
                    console.log(count_line)
                }
            } else {
                let end = ary[0][rc];
                for(let i=0; i<n-1; i++) {
                    ary[i][rc] = ary[i+1][rc];
                }
                ary[n-1][rc] = end;
                for(let i=0; i<n; i++) {
                    let count_line = ''
                    for(let j=0; j<n; j++) {
                        count_line += ary[i][j] + ' '
                    }
                    console.log(count_line)
                }
            }
        }
    }
})