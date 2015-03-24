
// 1. Make an array that can hold the parallax image objects
var LastyPos;

$(document).ready(function () {
   // cache the window object
    $window = $(window);
    $("html").niceScroll();
    $("#IdentityPhoto").fadeIn("slow", function () {
        $("#MyName").fadeIn("slow", function () {
            // Animation complete
        });
        $("#myCanvas").fadeIn("slow", function () {

        });
    });
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
          // HTML5 proves useful for helping with creating JS functions!
          // also, negative value because we're scrolling upwards                            
          var yPos = -($window.scrollTop() / $scroll.data('speed'));

          // background position
          var coords = '50% ' + yPos + 'px';

          // move the background
          $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function
}); // close out script




/* Create HTML5 element for IE */
document.createElement("section");