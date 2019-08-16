$(document).ready(function() {
  $(".figure").removeClass("temp");
  $(".figure").addClass("animated");
  $(window).scroll(function(){                          
    if ($(this).scrollTop() > 200) {
      $('.navbar').fadeIn(500);
    } else {
      $('.navbar').fadeOut(500);
    }
    if ($(this).scrollTop() > 200) {
      $('.row1').fadeIn(800);
    } else {
      $('.row1').fadeOut(200);
    }
    if ($(this).scrollTop() > 800) {
      $('.row4').fadeIn(800);
    } else {
      $('.row4').fadeOut(200);
    }
  });
});