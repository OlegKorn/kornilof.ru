//глобальные переменные для использования при прокрутке 
var docViewTp = true;
var docViewBottm = true;
var elemTp = true;
var elemBottm = true;

var marker = false; //marker для однократного изменения bg-size на 100% 100%

//определение попадания элемента в зону видимости
function found(elem) {
  var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();
  
  //передаем переменные из функции в глобальную область
  docViewTp = docViewTop;
  docViewBottm = docViewBottom;
  elemTp = elemTop;
  elemBottm = elemBottom;
  
  return (docViewTop >= (elemTop + 150));
}



//отслеживание появления элемента в видимости и изменение opacity по скроллу
$(window).scroll(function() { 
  
  //.masthead
  //изменение opacity .masthead при прокрутке
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
    var p = ($(window).scrollTop() * 0.135);
    $("#serv").css("background-size", p+"%"+" "+p+"%");
  }
  if (p >=100) {
    marker = true;
    $("#serv").css(cssFull);
  }
  
  var servOpacity = (($(window).scrollTop() * 0.00125))
  $("#serv").css("opacity", servOpacity); 
    
  //ОТСЛЕЖИВАНИЕ ПОЯВЛЕНИЯ ЭЛЕМЕНТА "function found()"
  
  if (found("#serv")) { //срабатывает при попадании верха #serv в экране
    //более-менее отследили появление элемента по схеме: началоЭлемента to (дноЭлемента -100)
    var serv = (docViewTp - elemTp);
    
    if (serv <= elemBottm) { //ловит от начала элемента до нижней его части
    //код для уменьшения opacity при прокрутке вниз
      var servOpacityDown = ( 1 - ( serv * 0.00125 ) );
      $("#serv").css("opacity", servOpacityDown);      
    }
    
    ////if (serv <= elemTp) {
      //код для изменения opacity
     //// var servOpacity = (1 - (serv * 0.00135));
      ////$("#serv").css("opacity", servOpacity);      
  ////  }
  }
  
  if (found("#about")) { //срабатывает при попадании верха #serv в экране
    var ab = (docViewTp - elemTp);
    if (ab <= (elemTp - 100)) {
      //код для изменения opacity
      
    }
  }  

  
});