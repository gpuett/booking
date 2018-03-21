$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var result = "Booking Succesful!";
    $("#output").text(result);
  });
});
