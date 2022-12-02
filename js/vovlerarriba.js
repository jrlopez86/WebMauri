$(document).ready(function () {


     // Mostrar y ocultar botón "Volver arriba"
  
     var btnVolverArriba = $('#btnVolverArriba');
  
     $(window).on('scroll', function () {
   
       var fotoOffsetTop = $('#foto').offset().top;
   
       if ($(window).scrollTop() > fotoOffsetTop) {
   
         btnVolverArriba.css('margin-right', 0);

        }else if ($(window).scrollTop() <= fotoOffsetTop) {
  
            btnVolverArriba.css('margin-right', '-60px');
      
       }
   
     });

       // Movimiento suave de scroll  "Volver arriba"
  
    $('a.volver-arriba').on('click', function (e) {
        e.preventDefault();
    
        if ($(window).scrollTop() != 0) {
          $('html, body').stop().animate({scrollTop: 0}, 1000);
        }
    
      })
    

});