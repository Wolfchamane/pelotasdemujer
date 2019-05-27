var TAMPAG = 10;

function resizeContentDiv(){

    $('.content').height(0).height(Number(
        $(document).height()
        - $('.header').outerHeight(true)
        - $('.actions').outerHeight(true)
        - TAMPAG
    ));
}

if (jQuery){
   $(document).ready(function(){

       var userAgent = navigator.userAgent;
       if (userAgent.toString().search('MSIE') !== -1)
       {
           $('.logo').addClass('ie8_logo');
           $('.banner').addClass('ie8_banner');
       }

       $('.banner, #back').unbind('click').click(function(e){
           e.preventDefault();
           e.stopPropagation();
           window.open('http://pelotasdemujer.wordpress.com', '_blank');
       });

       resizeContentDiv();
   });
   $(window).resize(function(){
       resizeContentDiv();
   });
}