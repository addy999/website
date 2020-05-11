$(document).ready(function() {
  
  $(".figure").addClass("animated");
  $(".figure").addClass("flipInX");
  $( "#software" ).toggle( "fold" );


  $("#soft_but").click(function() {
    $( "#software" ).toggle( "fold" );
    var el = $("#photo_but")[0]; 
    if(el.style.opacity==0.5){el.style.opacity=1;}
    else {el.style.opacity=0.5;}
  });

  // $(window).scroll(function(){                          
  //   if ($(this).scrollTop() > 150) {
  //     $('.navbar').fadeIn(500);
  //   } else {
  //     $('.navbar').fadeOut(500);
  //   }
  //   if ($(this).scrollTop() > 150) {
  //     $('.row1').fadeIn(500);
  //   } else {
  //     $('.row1').fadeOut(200);
  //   }
  //   if ($(this).scrollTop() > 750) {
  //     $('.row2').fadeIn(500);
  //   } else {
  //     $('.row2').fadeOut(200);
  //   }
  //   if ($(this).scrollTop() > 1300) {
  //     $('.row3').fadeIn(500);
  //   } else {
  //     $('.row3').fadeOut(200);
  //   }
  // });
});