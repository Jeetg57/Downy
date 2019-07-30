$(function() {
  $("#remove").click(function() {
    $("#item").hide();
  });
  $("#remove2").click(function() {
    $("#item1").hide();
  });
  $("#remove3").click(function() {
    $("#item2").hide();
    $("hr").hide();
  });

  $("[type='number']").keypress(function(evt) {
    evt.preventDefault();
    alert("Please use the up and down arrows to change the values!");
  });
});
