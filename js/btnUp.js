var marker = false;

$(window).scroll(function() {
  if (!marker) {
    $("body").append('<a class="navbar-brand js-scroll-trigger" id="btn_up" href="#page-top"></a>');
    marker = true;
  };
  if ($(window).scrollTop() < 150) { //если прокрутили выше 150
    $('#btn_up').hide(); 
  }  
  if ($(window).scrollTop() > 150) { //если прокрутили на 150
    $('#btn_up').show(); 
  }  
  
  //эта часть работает при смене на $("body").append('<button class="btn_up"/>'); и соответвтсенно всех имен в цсс и джс
  //$("#btn_up").click(function() {
   // $("body, html").animate({'scrollTop': 0}, 1500);
  // / return;
  //});
});








    


