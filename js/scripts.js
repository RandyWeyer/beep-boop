var output = "";

var beepBoopConverter = function(number) {
  for (var i = 0; i < number; i++) {
    console.log(i);
    if (i.toString().includes("0")) {
      console.log("Contains 0");
    }
    if (i.toString().includes("1")) {
      console.log("Contains 1");
    }
  }
}

$(document).ready(function(event) {

  $("#beep-boop-converter").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());

    output="";

    var userResult = beepBoopConverter(userInput);

    $("#results").text(userResult);

  });
});
