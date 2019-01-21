var x = 0;

function humberger_start() {
   
    $(".line1").css('transform', 'rotate(42deg)');
    $(".line1").css('width', '5.2em');
    $(".line2").css('opacity', '0');
    $(".line3").css('transform', 'rotate(-42deg)');
    $(".line3").css('width', '5.2em');
}
function humberger_over() {
    $(".line1").css('transform', 'rotate(0)');
    $(".line1").css('width', '4em');
    $(".line2").css('opacity', '1');
    $(".line3").css('transform', 'rotate(0)');
    $(".line3").css('width', '4em');
}
function menu_start(params) {
    $(".menu_black").css('left', '0px');
    $(".menu_blue").css('left', '0px');
    $(".menu_yellow").css('left', '0px');
    $(".menu_gray").css('left', '0px');
}
function menu_over(params) {
    $(".menu_black").css('left', '-4000px');
    $(".menu_blue").css('left', '-4000px');
    $(".menu_yellow").css('left', '-4000px');
    $(".menu_gray").css('left', '-4000px');
}

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
      })
    $(" .humberger").click(function (event) {
        
       
        if (x == 0) {
           
            $(".humberger").css('left', '2em');
            $(".logo").fadeIn();
            humberger_start();
            menu_start();
            $(".mainpage").fadeOut();
            $(".title").fadeOut();
            x++;
            
        }
        else {
          
            $(".humberger").css('left', 'auto');
            $(".logo").fadeOut();
            humberger_over();
            menu_over();
            $(".mainpage").fadeIn();
            $(".title").fadeIn();
            x = 0;
        }

    });

    $("div.menu_black").hover(function () {
       
        $(this).addClass("black_image"); // over
        
        }, function () {
            $(this).removeClass("black_image");
          
            // out
        }
    );
    $("div.menu_blue").hover(function () {
       
        $(this).addClass("blue_image"); // over
        
        }, function () {
            $(this).removeClass("blue_image");
          
            // out
        }
    );
    $("div.menu_yellow").hover(function () {
        
        $(this).addClass("yellow_image"); // over
        
        }, function () {
            $(this).removeClass("yellow_image");
          
            // out
        }
    );
    $("div.menu_gray").hover(function () {
        
        $(this).addClass("gray_image"); // over
        
        }, function () {
            $(this).removeClass("gray_image");
          
            // out
        }
    );
    $(".showbigc").hide();
    $(".showbigc .closebt").click(function(event){
        $(".showbigc").fadeOut();
    });
    $(".showbigb").hide();
    $(".showbigb .closebt").click(function(event){
        $(".showbigb").fadeOut();
    });

    $(".showbigs").hide();
    $(".showbigs .closebt").click(function(event){
        $(".showbigs").fadeOut();
    });
    $(".cloths").click(function(event){
        $(".showbigc").fadeIn();
    });
    $(".shoes").click(function(event){
        $(".showbigs").fadeIn();
    });   
      
    $(".shoes2").click(function(event){
        $(".showbigs").fadeIn();
    });
    $(".bag").click(function(event){
        $(".showbigb").fadeIn();
    });
    
});
