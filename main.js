$(document).ready(function (){
    /* 页面dom加载完毕执行 */
    
    $(".post").click(function(){
        $(this).css("background-color","#fafafa");
        $(this).css("color","#6f9fc7");
    });

    $(".post").mouseenter(function(){
        $(this).css("background-color","#fafafa");
        $(this).css("color","#6f9fc7");
    });

    $(".post").mouseleave(function(){
        $(this).css("background-color","#fff");
        $(this).css("color","#000");
    });
    
});


/* 判断搜索图标是否被点击，被点击显示搜索框 */

$(".control-svg").click(function(){
    if($(".control").is(":hidden")){
        $(".control").css("display","block");
    }else{
        $(".control").css("display","none");
    }
    
});



/* 点击事件，当该元素为隐藏状态，执行显示元素操作，否则（也是该元素为显示的状态）隐藏该元素 */
$(".classify").click(function(){
    if($(".widget-list").is(":hidden")){
        $(".widget-list").css("display","block");
    }else{
        $(".widget-list").css("display","none");
    }
    
});

/* 判断其是否点击了除该元素之外的元素，是的就隐藏该元素 */
$(document).bind("click", function(a) {
    var focus_widget = $(a.target);
    if (focus_widget.closest(".classify").length == 0) {
        $(".widget-list").css("display","none");
    }
})





/* 判断其是否点击了除该元素之外的元素，是的就隐藏该元素 */
$(".nav-svg").click(function(){
    if($(".nav-menu").is(":hidden")){
        $(".nav-menu").css("display","block");
        $(".nav-menu .menu-li").css("display","block");
        $(".nav-menu .menu-li").css("text-align","center");
        $(".control").css("display","none");
        $(".post-nav").css("display","inline-block");
    }else{
        $(".nav-menu").css("display","none");
    }
})

   
/* 浏览器宽度恢复样式 */

$("window").resize(function(){
    if(document.documentElement.clientWidth < 768){
        $(".nav-menu").css("display","none");
    }
})









/* 监听网络变化 */
const appnet = navigator.onLine;
if(appnet){
    window.addEventListener("offline",function(){
        console.log("当前网络已经离线");
        alert("当前网络已经离线");
    })
}else{
    window.addEventListener("online",function(){
        console.log("当前恢复网络正常");
        alert("当前恢复网络正常");
    })
}



   
    
console.log("%c Typecho   %c https://typecho.org/ ","color: #fff; margin: 1em 0; padding: 5px 0; background: #3498db;","margin: 1em 0; padding: 5px 0; background: #efefef;");

console.log("%c 小陈的辣鸡屋  %c https://chenjunlin.me/ ","color: #fff; margin: 1em 0; padding: 5px 0; background: #3498db;","margin: 1em 0; padding: 5px 0; background: #efefef;");