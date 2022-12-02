$(document).ready(function (){

    var numero = 1;
    
    $('#btnMenu').on('click', function (e) {
    
        e.preventDefault();
        if (numero == 1) {
            $('.menu-mobile .menu-oculto').animate({left:0}, 300, function (){
                numero = 0;
    
            });
        } else {
            $('.menu-mobile .menu-oculto').animate({left:'-100%'}, 300, function (){
                numero = 1;
    
            })
        }
    
    })
    
    
    
    });