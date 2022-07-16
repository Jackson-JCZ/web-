//shufle 
function shuffle(ary) {
    let  ary_copy = ary.concat([]);

    return function(num) {
        let size = ary.length;
        let last_num = 0;
        let last_chouqu = [];
        if(size > 0) {
            let chouqu = []
            if(last_num>0) {
                for(let i=0; i<last_num;) {
                    let tmp = (Math.random()*10 % ary.length)
                    if(last_chouqu.includes(tmp)) {
                        continue;
                    }
                    i++;
                    last_chouqu.push(tmp)
                    console.log(last_chouqu)
                    return last_chouqu.flat();
                }
            } else {
                for(let i=0; i<num; i++) {
                    chouqu.push(ary.splice((Math.random()*10 % ary.length), 1))
                    last_chouqu = chouqu.flat()
                }
            }
            console.log(chouqu.flat())
            return chouqu.flat();
        } else {
            ary = ary_copy;
            console.log('抽取完,再输出一次')
        }
    } 
}
var random = shuffle([0,1,2,3,4,5,6])
random(1)
random(1)
random(1)
random(1)
random(1)
random(1)
random(1)

random(1)
random(1)
random(2)
random(1)
random(4)