$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#my_carousel ul").animate({marginLeft:-1300},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});