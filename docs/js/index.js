$(document).ready(function() {
  
  $(".figure").addClass("animated");
  $(".figure").addClass("flipInX");

  $(window).scroll(function(){                          
    if ($(this).scrollTop() > 150) {
      $('.navbar').fadeIn(500);
    } else {
      $('.navbar').fadeOut(500);
    }
    if ($(this).scrollTop() > 150) {
      $('.row1').fadeIn(500);
    } else {
      $('.row1').fadeOut(200);
    }
    if ($(this).scrollTop() > 750) {
      $('.row2').fadeIn(500);
    } else {
      $('.row2').fadeOut(200);
    }
    if ($(this).scrollTop() > 1300) {
      $('.row3').fadeIn(500);
    } else {
      $('.row3').fadeOut(200);
    }
  });
});