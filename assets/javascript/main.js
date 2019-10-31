$(document).ready(function() {

  "use strict";

  // slow-animate on navbar click
  $(".nav-link").on("click", function() {
    
    let value = $(this).attr("href");
    console.log(value);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(value).offset().top
    }, 800);
  
  });

  // collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".fixed-top").addClass("top-nav-collapse");
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

});