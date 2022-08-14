let count = 0;
let round=2;
let vv;
while(line=readline()){
    if(count == 0) {
//         round = 2;
        count++;
    } else {
        if(round%2 == 0) {
            round--;
            vv = line.split(' ').map(x=>parseInt(x));
        } else {
            round++;
            let kalpas = line.split(' ').map(x=>parseInt(x));
            let kalpas_round=0;
            let kalpas_initHp = kalpas[0];
            let kalpas_initAtt = kalpas[1];
            let vv_round = 0;
            let k_rest = 2;
            let vv_bei = true;
            let k_hunluan = false;
            if(kalpas[3] >= vv[3]) {    //千劫行动
                while(kalpas[0]>0 && vv[0]>0) {    //没有一个人倒下
                    //每回合计算一次kalpas的攻击力
                    kalpas[1] = kalpas_initAtt + Math.floor((kalpas_initHp - kalpas[0]) / 5);
                    //触发vv的被动技能 仅触发一次
                    if(vv[0] < 31 && vv_bei) {
                        kalpas[0] += 20;
                        vv[0] += 20;
                        vv[1] += 15;
                        vv_bei = false;
                    }
                    // k攻击
                    if(kalpas_round!=2 || kalpas[0]<11 || k_rest>1) { //普通攻击
                        if(k_hunluan) {
                            kalpas[0] = kalpas[0] - (Math.max(kalpas[1] - kalpas[2], 0))
                            k_hunluan = false; //状态接触
                        } else {
                            vv[0] = vv[0] - (Math.max(kalpas[1] - vv[2], 0))
                        }
                        kalpas_round = (kalpas_round+1)%3;    //技能回合数加1
                    } else if(k_rest>1){ // 技能攻击 且非休息回合
                        kalpas[0] -= 10; //扣血
                        vv[0] = vv[0] - (Math.max(45 - vv[2], 0)) - 20;
                        k_rest = 0; //进入休息
                        kalpas_round = (kalpas_round+1)%3;    //技能回合数加1
                    }
                    if(vv[0] < 0) { // 提前结束
                        break;
                    }
                    // vv攻击
                    if(vv_round!=2) { //普通攻击
                        kalpas[0] = kalpas[0] - (Math.max(vv[1] - kalpas[2], 0))
                        vv_round = (vv_round+1)%3;    //技能回合数加1
                    } else { // 技能攻击 
                        kalpas[0] = kalpas[0] - (Math.max(vv[1] - kalpas[2], 0))
                        // 对手混乱
                        k_hunluan = true;
                        vv_round = (vv_round+1)%3;    //技能回合数加1
                    }
                    k_rest++;
                    vv_round = (vv_round+1)%3;    //技能回合数加1
                }
                if(vv[0] > 0) {
                    console.log('I love V2V forever!');
                } else {
                    console.log('Kalpas yame te!');
                }
            } else {
                while(kalpas[0]>0 && vv[0]>0) {    //没有一个人倒下
                    //触发vv的被动技能 仅触发一次
                    if(vv[0] < 31 && vv_bei) {
                        kalpas[0] += 20;
                        vv[0] += 20;
                        vv[1] += 15;
                        vv_bei = false;
                    }
                    
                    // vv攻击
                    if(vv_round!=2) { //普通攻击
                        kalpas[0] = kalpas[0] - (Math.max(vv[1] - kalpas[2], 0))
                        vv_round = (vv_round+1)%3;    //技能回合数加1
                    } else { // 技能攻击 
                        kalpas[0] = kalpas[0] - (Math.max(vv[1] - kalpas[2], 0))
                        // 对手混乱
                        k_hunluan = true;
                        vv_round = (vv_round+1)%3;    //技能回合数加1
                    }
                    
                    //每回合计算一次kalpas的攻击力
                    kalpas[1] = kalpas_initAtt + Math.floor((kalpas_initHp - kalpas[0]) / 5);
                    
                    // k攻击
                    if(kalpas_round!=2 || kalpas[0]<11 || k_rest>1) { //普通攻击
                        if(k_hunluan) {
                            kalpas[0] = kalpas[0] - (Math.max(kalpas[1] - kalpas[2], 0))
                            k_hunluan = false; //状态接触
                        } else {
                            vv[0] = vv[0] - (Math.max(kalpas[1] - vv[2], 0))
                        }
                        kalpas_round = (kalpas_round+1)%3;    //技能回合数加1
                    } else if(k_rest>1){ // 技能攻击 且非休息回合
                        kalpas[0] -= 10; //扣血
                        vv[0] = vv[0] - (Math.max(45 - vv[2], 0)) - 20;
                        k_rest = 0; //进入休息
                        kalpas_round = (kalpas_round+1)%3;    //技能回合数加1
                    }
                    if(kalpas[0] < 0) { // 提前结束
                        break;
                    }
                    
                    k_rest++;
                    vv_round = (vv_round+1)%3;    //技能回合数加1
                }
                if(vv[0] > 0) {
                    console.log('I love V2V forever!');
                } else {
                    console.log('Kalpas yame te!');
                }
            }
        }
    }
}