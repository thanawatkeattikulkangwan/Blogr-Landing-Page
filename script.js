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
   
    e.stopPropagation();
  
});