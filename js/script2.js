$(document).ready(function () {
   
    for (var i = 1; i <= 12; i++) {
        $("div.img"+i).css("background-image", 'url(../image/clothes/clothes'+i+'.jpg)');
        $("div.img"+i).css("background-size", "cover");
    };

    $(".row_select_black").click(function (event) { 

        for (var i = 1; i <= 12; i++) {
        $("div.img"+i).css("background-image", 'url(../image/clothes/clothes'+i+'.jpg)');
        $("div.img"+i).css("background-size", "cover");
    };
        
    });
    $(".row_select_blue").click(function (event) { 

        for (var i = 1; i <= 12; i++) {
            $("div.img"+i).css("background-image", 'url(../image/suitting/suitting'+i+'.jpg)');
            $("div.img"+i).css("background-size", "cover");
        };
        
    });
    $(".row_select_yellow").click(function (event) { 

        for (var i = 1; i <= 12; i++) {
            $("div.img"+i).css("background-image", 'url(../image/shoes/shoes'+i+'.jpg)');
            $("div.img"+i).css("background-size", "cover");
        };
        
    });
    $(".row_select_gray").click(function (event) { 

        for (var i = 1; i <= 12; i++) {
            $("div.img"+i).css("background-image", 'url(../image/jeans/jeans'+i+'.jpg)');
            $("div.img"+i).css("background-size", "cover");
        };
        
    });
    $(".img1").click(function () {
     
        
        window.location="../index3.html";

    }
    );
    
});