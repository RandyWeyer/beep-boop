var output = "";

var beepBoopConverter = function(number) {
  for (var i = 0; i < number; i++) {
    console.log(i);

    if ((i.toString().includes("1"))||(i.toString().includes("0"))||(i % 3 == 0)) {
      if (i % 3 == 0 && i != 0) {
        $("#results").append("I'm sorry, Dave. I'm afraid I can't do that." + "<br>")
      } else if (i.toString().includes("1")) {
        $("#results").append("Boop" + "<br>");
      }else if (i.toString().includes("0")) {
        $("#results").append("Beep" + "<br>");
      }
    } else {
      $("#results").append(i + "<br>");
    }

  }
}

$(document).ready(function(event) {

  $("#beep-boop-converter").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());

    output="";

    var userResult = beepBoopConverter(userInput);

    $("#results").append(userResult);

  });
});
