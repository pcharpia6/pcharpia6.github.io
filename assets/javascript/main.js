$(document).ready(function() {
  "use strict";
  $(".nav-link").on("click", function() {
    
    let value = $(this).attr("href");
    console.log(value);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(value).offset().top
    }, 800);
  
  });

});