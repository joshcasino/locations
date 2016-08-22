//Business Logic
function Location(where, landmarks, when, notes) {
  this.where = upperCase(where);
  this.landmarks = upperCase(landmarks);
  this.when = upperCase(when);
  this.notes = upperCase(notes);
}

function upperCase (string) {
  return string.substring(0,1).toUpperCase() + string.substring(1);
}
//UI Logic
$(document).ready(function() {
  $("form#locationForm").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("#where").val();
    var inputLandmarks = $("#landmarks").val();
    var inputWhen = $("#when").val();
    var inputNotes = $("#notes").val();

    var newLocation = new Location(inputLocation, inputLandmarks, inputWhen, inputNotes);

    $("ul#Location").append("<li><span class='place'>" + newLocation.where + "</span></li>");

    $(".place").last().click(function() {
      $("#showLocation").show();
      $("#showLocation h2").text(newLocation.where);
      $(".where").text(newLocation.where);
      $(".landmarks").text(newLocation.landmarks);
      $(".when").text(newLocation.when);
      $(".notes").text(newLocation.notes);
    });
    $("#locationForm input").val("");
    // $("input#landmarks").val("");
    // $("input#when").val("");
    // $("input#notes").val("");



  });
});
