var userName = "";

var beepBoopConverterAscending = function(number, name) {

  $("#results").text("");

  if (userName == "") {
    name = "Dave";
  }

  for (var i = 0; i < number; i++) {

    if ((i.toString().includes("1"))||(i.toString().includes("0"))||(i % 3 == 0)) {
      if (i % 3 == 0) {
        $("#results").append("I'm sorry, " + name + ". I'm afraid I can't do that." + "<br>")
      } else if (i.toString().includes("1")) {
        $("#results").append("Boop" + "<br>");
      } else if (i.toString().includes("0")) {
        $("#results").append("Beep" + "<br>");
      }
    } else {
      $("#results").append(i + "<br>");
    }

  }
}
var beepBoopConverterDescending = function(number, name) {
  $("#results").text("");

  if (userName == "") {
    name = "Dave";
  }

  for (var i = number; i > -1; i--) {
    console.log("Hi");
    if ((i.toString().includes("1"))||(i.toString().includes("0"))||(i % 3 == 0)) {
      if (i % 3 == 0) {
        $("#results").append("I'm sorry, " + name + ". I'm afraid I can't do that." + "<br>")
      } else if (i.toString().includes("1")) {
        $("#results").append("Boop" + "<br>");
      } else if (i.toString().includes("0")) {
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
    userName = $("#user-name").val();
    var order = document.querySelector('input[name = "order"]:checked').value;

    if (order == "ascending") {
      var userResult = beepBoopConverterAscending(userInput, userName);
    }
    if (order == "descending") {
      var userResult = beepBoopConverterDescending(userInput, userName);
    }

    $("#results").append(userResult);

  });
});
