$(function() {
  $("#remove").click(function() {
    var confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm == true) {
      $("#item").hide();
      alert("Item deleted!");
    } else {
      alert("Item not deleted");
    }
  });
  $("#remove2").click(function() {
    var confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm == true) {
      $("#item1").hide();
      alert("Item deleted!");
    } else {
      alert("Item not deleted");
    }
  });
  $("#remove3").click(function() {
    var confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm == true) {
      $("#item2").hide();
      alert("Item deleted!");
    } else {
      alert("Item not deleted");
    }
    $("hr").hide();
  });

  $("[type='number']").keypress(function(evt) {
    evt.preventDefault();
    alert("Please use the up and down arrows to change the values!");
  });
});
