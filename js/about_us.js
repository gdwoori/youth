$(document).ready(function(){
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop();
        $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});

function linking() {
    if (confirm("링크로 이동합니다.") ==true){
        window.open('https://www.duranno.com/qt/view/bible.asp?qtDate=');
    }else{
        return false;
    }
}