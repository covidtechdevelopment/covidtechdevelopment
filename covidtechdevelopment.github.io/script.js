$(document).ready (function(){
    var altura=$('nav').offset().top;
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 50){
            $('nav').addClass('shrink');
        }else{
            $('nav').removeClass('shrink');
            $('nav').addClass('top');
        }
    });
    /*$('#inicio').on('click',function(){
        var position = 0;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#inicio').addClass('bottom');

    })
    $('#servicio').on('click',function(){
        var position = 450;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#servicio').addClass('bottom');
        
    })
    $('#nosotros').on('click',function(){
        var position = 750;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#nosotros').addClass('bottom');
        
    })
    $('#cotizacion').on('click',function(){
        var position = $('#my-section').offset().top;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#cotizacion').addClass('bottom');
        
    })
    $('#contacto').on('click',function(){
        var position = 0;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#contacto').addClass('bottom');
        
    })
    $('#inicio').on('click',function(){
        var position = 0;
        $('body, html').animate({
            scrollTop: position + 'px'
        },2000);
        $('#idiomas').addClass('bottom');
        
    })*/
});
