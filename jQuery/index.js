$("h1").click(function () {
  $("h1").css("color", "red");
})

$("button").click(function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
