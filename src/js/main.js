var y = window.outerWidth;
$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#my_carousel ul").animate({marginLeft:-y },1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});

$(document).ready(function(){
 $(".picture_slide").css("width", y);
 $(".slider").css("width", y*3);
});