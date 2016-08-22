//Business Logic
function Location(where, landmarks, when, notes) {
  this.where = where;
  this.landmarks = landmarks;
  this.when = when;
  this.notes = notes;
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

    $("input#where").val("");
    $("input#landmarks").val("");
    $("input#when").val("");
    $("input#notes").val("");
  });
});
