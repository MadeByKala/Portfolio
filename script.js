$(document).ready(function(){
  $("nav a").on("click", function(){
    $("nav a").removeClass("active");
    $(this).addClass("active");
  });

  $(".intro h2").hide().fadeIn(2000);
});
