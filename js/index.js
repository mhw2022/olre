$(document).ready(function(){

    /*모바일메뉴*/
    $('.mobile_menu>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });
    });
    $('#header_wrap .close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });
    });

});

/*공지 #notice_wrap 닫기*/
$(function() {  
    $(".notice .close_btn a").click(function() {
        $("#notice_wrap").fadeOut();
    });
});