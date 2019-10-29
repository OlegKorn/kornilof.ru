  <!--  <script>
    //https://toster.ru/q/96417
    //https://toster.ru/q/4605
    var marker = false; //переменная для единичного изменения bg-size 
    
    $(window).scroll(function() {
      
      //.masthead
      var mastheadOpacity = (1 - ($(window).scrollTop() * 0.0015)); 
      $(".masthead").css("opacity", mastheadOpacity);
      if ($(window).scrollTop() == 0) {
        $(".masthead").css("opacity", 1);
      }
      
      
      //#serv
      //background-size
      //изменяется при прокрутке 1-й раз; потом 100% 100%
      
      var cssFull = {"background-size" : "100% 100%"};
      
      if (!marker) {
        var p = ($(window).scrollTop() * 0.15);
        $("#serv").css("background-size", p+"%"+" "+p+"%");
      }
      if (p >=100) {
        marker = true;
        $("#serv").css(cssFull);
      }
      
      
      //opacity 
      var servOpacity = (($(window).scrollTop() * 0.00125));
      $("#serv").css("opacity", servOpacity);
    });
    

    </script>-->