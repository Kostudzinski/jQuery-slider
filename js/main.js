'use strict';

$(document).ready(function () {

var slider = $('#slider');

var slideShow = $('.slide-show'); 

var slideCount = slideShow.children().length;

var slideWidth = 100/slideCount;

var slideIndex = 0;
    
//    slideShow.css({
//        width = slideCount*100
//    });
//
// 
//    slideShow.find('.single-slide').each(function () {
//        (this).css({
//            'margin-left' : slideWidth * slideIndex,
//            'width' : '100%' / slideCount
//        })
//    });
//    
//
//
//function slide(newSlideIndex) {
//    
//    var slideIndex = newSlideIndex;
//    
//    var slideCaption = ('.slide-caption').val();
//    
//    ('.prev-slide').click(function() {
//            slideIndex = -1;
//})
//    ('.next-slide').click(function() {
//            slideIndex = +1;
//})
//    if (slideIndex = 1 || 5) {
//        break;
//    }
//    
//    $(slideCaption).hide(10000);
//    
//    var marginLeft = slideIndex * -100;
//    
//    function animacja() {
//    $(slideShow)animate({width:'100%'}, 5000, function() {
//            $(this).animate({margin-left: marginLeft}, 5000, function() {
//            slideIndex = +1;
//            slideCaption.fadeIn()    
//            }
//                            )})
//    
//}
//
//   moje ^^
//    
//    
//}
//}
    
//        Ustawianie szerokosci kontenera
    slideShow.css('width' , slideCount* 100 + '%');
    
//        Ustawianie marginesow i szerokosci pojedynczych slideow
    slideShow.find('.single-slide').each(function(index) {
        var leftPercent = (slideWidth * index) + '%';
        $(this).css('margin-left', leftPercent);
        $(this).css('width', slideWidth + '%');
    });
    
//        Wywolanie funkcji slide na click
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex -1);
    });
    
    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex +1);
    });
    
//        Definicja funkcji Slide
    function slide(newSlideIndex) {
//        Sprawdzamy czy pierwszy i ostatni zeby nie robil nic
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
//        elementy slide caption i przypisanie do zmiennej
        var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);
        
//        Ukrywanie napisow
        slideCaption.hide();
        
//        Zmienna trzymajaca margines lewy do przesuwania kontenera
        var marginLeft = ((newSlideIndex * (-100)) + '%');
        
//        Animacja na slideshow
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
//            Przypisz do slideIndex nowy index Slidu
            slideIndex = newSlideIndex;
            
//            pokaz napis przez fadeIn
            slideCaption.fadeIn('slow');
        });
        
    };
    
    
    
    
})