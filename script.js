const showMenu = () => {
    
    let menuMobile =  $('#myMenu-mobile');
    let iconMenu = $('#icon-menu');
    if (menuMobile.is(':hidden')) {
        
        menuMobile.slideDown('fast');
        iconMenu.attr("src",'./images/icon-close.svg').fadeTo(600,1);
    }else{
        menuMobile.slideUp('fast');
        iconMenu.attr("src",'./images/icon-hamburger.svg');
      
    }
   
};



$(".group-dropdown-mobile").on('click', function(e){

    let subMenu  = $(this).children('.dropdown-content-mobile');
    $('.dropdown-content-mobile').slideUp();
    if(subMenu.is(':hidden')){
        subMenu.slideDown();
    }
   
   
 $(this).children('img').css({
    "-webkit-transform": "rotateX(180deg)",
    "-moz-transform": "rotateX(180deg)",
    "transform": "rotateX(180deg)" /* For modern browsers(CSS3)  */
});
    e.stopPropagation();
   // console.log($(this));
});