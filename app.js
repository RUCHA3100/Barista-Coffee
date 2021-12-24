$(window).scroll(function() {
  if ($(this).scrollTop() > 20){
     $('.navbar').addClass("sticky");
  } else {
     $('.navbar').removeClass("sticky");
  }
});



