// ==UserScript==
// @name         金巴抢票
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://i.hzmbus.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hzmbus.com
// @grant        none
// @require      http://html2canvas.hertzen.com/dist/html2canvas.min.js
// ==/UserScript==


window.onload=function(){//do something
    'use strict';
    let fill_name = "张嘉城" //要填入的姓名
    let id_num = "4142420010116375X" //要填入的身份证号
    let c = document.querySelector(".up .input")
    var img = document.querySelector("img")
    var name = document.querySelector(".up .input").children[0]
    var id = document.querySelector(".down .input").children[0]
    document.querySelector(".day").click()
    //var img_base64;
    html2canvas(img, {taintTest: false, allowTanit: false }).then(function(canvas) {
        var dataurl = canvas.toDataURL()

        dataurl = dataurl.replace(/^data:image\/\w+;base64,/, '')
        var img_base64 = dataurl.toString('base64')
        // Your code here...
        name.value = fill_name
        id.value = id_num
        let anser = null;
        let data = {
            'user': 'jackson123',
            'pass': 'zjc313771069',
            'softid': '935991',  //软件ID 可在用户中心生成
            'codetype': '1004',  //验证码类型 http://www.chaojiying.com/price.html 选择
            // 'userfile': rest.file(filename, null, fs.statSync(filename).size, null, 'image/gif') // filename: 抓取回来的码证码文件
            'file_base64': img_base64
        }

        fetch('https://upload.chaojiying.net/Upload/Processing.php', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => response.json()).then(res => {
            if (res.err_no === 0) {
                anser = res.pic_str
                console.log('识别结果：' + res.pic_str);
                document.querySelector(".captchaBox input").value = anser;
                document.querySelector(".hint_icon").click()
                document.querySelector(".bottom").click()
            } else {
                console.log("验证出错, " + res.err_no)
            }
        })

    });

    

   
}
