$(function(){
    var $main = $('.main');
    var $list = $('.talk_list');
    var $drager = $('.drager');
    
    //jQuary中outerHeight方法返回匹配元素的外部高度
    var $mainh = $main.outerHeight(false);
    var $listh = $list.outerHeight(false);

    var $rate = $mainh / $listh;
    var $dragh = $mainh * $rate;
    var $top = 0;
    $drager.css({ 'height': $dragh });

    //鼠标拽住
    $drager.draggable({
        containment: "parent",
        drag: function(ev, ui) {
            //设置top为距离顶端的高度，即需要被隐藏的高度
            $top = ui.position.top;
            $list.css({'top': -$top / $rate });
        }
    });
    //进行缩放的时候需要考虑保持在最底部
    $(window).resize(function (){
        resetui();
    });

    var flag = false;
    //鼠标滚动事件监听  
    $main.mousewheel(function(ev, delta){
        if(flag){
            return;
        }
        flag = true;

        setTimeout(function(){
            flag=false;
        },300);

        if($listh <= $mainh){
            return;
        }else{
            if(delta>0){//鼠标向上滚动为正值
                $top = $top-60; //滚动一下移动60
                if($top<0) {
                    $top=0;
                }
                $drager.animate({ 'top': $top }, 200);
                $list.animate({'top': -$top/$rate },200);
            }else{
                $top = $top+60;
                if($top>($mainh-$dragh)) {
                    $top = parseInt($mainh-$dragh);
                }
                $drager.animate({ 'top' : $top}, 200);
                $list.animate({'top' : -parseInt($top/$rate) },200);
            }
        }
    });

    if($listh <= $mainh) {
        $('drag_bar').hide();
        $('.drager').hide();
    
    }
    function resetui() {
        $mainh = $main.outerHeight(false);
        $listh = $list.outerHeight(false);
        $rate = $mainh / $listh;
        $dragh = $mainh * $rate;
        $drager.css({ 'height': $dragh });

        if($listh <= $mainh) {
            $('.drag_bar').hide();
            $drager.hide();
            $list.css({ 'top': 0 });
        } else {
            $('drag_bar').show();
            $drager.show();
            $drager.css({ 'top' : $mainh-$dragh });
            $list.css({ 'top': -($listh-$mainh)});
        }
    }
    window.resetui = resetui;
})
