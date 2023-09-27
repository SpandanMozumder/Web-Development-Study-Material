$("h1").addClass("big-title margin-50");

$("button");

$("h1").text("Bye");

$("button").html("<em>Hey</em>");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "orange");
});

$("input").keypress(function () {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  // .on listens to any event
  $("h1").css("color", "red");
});

$("button").on("click", function () {
  $("h1").fadeToggle();
});

$("button").on("click", function () {
  $("h1").slideToggle();
});

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
