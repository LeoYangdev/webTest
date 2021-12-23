window.onload=function(){
function $(param){
    if(arguments[1] == true){
        return document.querySelectorAll(param);
    }else{
        return document.querySelector(param);
    }
}

var $box = $(".box");
var $box1 = $(".box-1 ul li",true);
var $box2 = $(".box-2 ul");
var $box3 = $(".box-3");
var $length = $box1.length;

var str = "";
for(var i =0;i<$length;i++){
    if(i==0){
        str +="<li class='on'>"+(i+1)+"</li>";
    }else{
        str += "<li>"+(i+1)+"</li>";
    }
}

$box2.innerHTML = str;

var current = 0;

var timer;
timer = setInterval(go,3000);
function go(){
    for(var j =0;j<$length;j++){
        $box1[j].style.display = "none";
        $box2.children[j].className = "";
    }
    if($length == current){
        current = 0;
    }
    $box1[current].style.display = "block";
    $box2.children[current].className = "on";
    current++;
}

for(var k=0;k<$length;k++){
    $box1[k].onmouseover = function(){
        clearInterval(timer);
    }
    $box1[k].onmouseout = function(){
        timer = setInterval(go,3000);
    }
}
for(var p=0;p<$box3.children.length;p++){
    $box3.children[p].onmouseover = function(){
        clearInterval(timer);
    };
    $box3.children[p].onmouseout = function(){
        timer = setInterval(go,3000);
    }
}

for(var u =0;u<$length;u++){
    $box2.children[u].index  = u;
    $box2.children[u].onmouseover = function(){
        clearInterval(timer);
        for(var j=0;j<$length;j++){
            $box1[j].style.display = "none";
            $box2.children[j].className = "";
        }
        this.className = "on";
        $box1[this.index].style.display = "block";
        current = this.index +1;
    }
    $box2.children[u].onmouseout = function(){
        timer = setInterval(go,3000);
    }
}

$box3.children[0].onclick = function(){
    back();
}
$box3.children[1].onclick = function(){
    go();
}
function back(){
    for(var j =0;j<$length;j++){
        $box1[j].style.display = "none";
        $box2.children[j].className = "";
    }
    if(current == 0){
        current = $length;
    }
    $box1[current-1].style.display = "block";
    $box2.children[current-1].className = "on";
    current--;
}

}
//下拉栏：天猫/店铺显示
$(document).ready(function(){
$("#yourdiv").hover(
	function(){
	$(this).addClass("triggers-hover");})
	,$("#yourdiv").mouseleave(function(){
	$(this).removeClass("triggers-hover");})
})

//监听滚动条，当页面划过搜索栏则切出新搜索栏
$(document).ready(function () {
	var getclass = $('.search-hots-fline');
	if (getclass.length) {
		var offSet = getclass.offset().top;
		// console.log(offSet);
	} else alert(getclass.length);
	$(window).scroll(function () {
		//为了保证兼容性，这里取两个值，哪个有值取哪一个
		//scrollTop就是触发滚轮事件时滚轮的高度
		//body和html不可以设置高度100%，不然会使得监听器失效
		if ($(window).scrollTop() > offSet) {
			// console.log($(window).scrollTop())
			$('#search-bar').addClass("wrap-fixed");
		}
		else{
			$('#search-bar').removeClass("wrap-fixed");
		}
	})
})

//返回顶部
$(function (){
	$(".gotop").click(function (){
		$("html,body").animate({scrollTop: 0}, 400);
	})
})

//滑动到品质好货
$(function (){
	$(".fixedtool-1").click(function (){
		$("html,body").animate({scrollTop:670}, 400);
	})
})

//滑动到猜你喜欢
$(function (){
	$(".fixedtool-6").click(function (){
		$("html,body").animate({scrollTop:1010}, 400);
	})
})

//监听滚动条，滑动到猜你喜欢时将右侧浮动条动效改变
//先计算到猜你喜欢的距离
$(document).ready(function () {
	var getclass = $('#cnxh');
	if (getclass.length) {
		var offSet = getclass.offset().top;
		// console.log(offSet);
	} else alert(getclass.length);
	$(window).scroll(function () {
		//为了保证兼容性，这里取两个值，哪个有值取哪一个
		//scrollTop就是触发滚轮事件时滚轮的高度
		//body和html不可以设置高度100%，不然会使得监听器失效
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() > offSet-65) {
			// console.log($(window).scrollTop())
			$('.fixedtool-6').addClass("on");
			$('.fixedtool-1').removeClass("on")
		}
		else{
			$('.fixedtool-6').removeClass("on");
			$('.fixedtool-1').addClass("on")
		}
		if ($(window).scrollTop() < offSet-200){
			$(".fixedtool-7").css({"display":"none"});
		}
		else $(".fixedtool-7").css({"display":""});
		if ($(window).scrollTop() > 400){
			$(".fixedtool").css({"position":"fixed","top":"40px"});
		}
		else $(".fixedtool").css({"position":"","top":"439.667px"});
	})
})
