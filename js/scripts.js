var politicalRange = function(uno, dos, tres) {
  return uno + dos + tres;
}

$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();

    var name = $("#userName").val();
    var age = parseInt($("#ageField").val());
    var party = $("#party").val();

    if (name) {
      $("#inputName").addClass("has-success");
    } else {
      $("#inputName").addClass("has-error");
    }

   if (age > 0) {
     $("#inputAge").addClass("has-success");
   } else {
     $("#inputAge").addClass("has-error");
   }
   if(age >= 18) {
     if (party === "democrat") {
      $("#fred").show()
     } else if (party === "republican") {
       $("#toody").show();
     } else if (party === "independent") {
       $("#nugent").show();
     }

    } else {
        $("#ineligible").show();
    }

});

$(".candidates").submit(function(event) {

   var candidate = $("input:radio[name=candidate]:checked").val();

   if (candidate === "Fred") {
     $("#fred").show();
   } else if (candidate === "Toody") {
      $("#toody").show();
   } else if (candidate === "Mr Nugent") {
      $("#nugent").show();
   } else {
     alert("pick something");
   }

  event.preventDefault();
 });

 $("#survey").submit(function(event) {
   event.preventDefault();
   var questionUno = parseInt($("input[name=question1]:checked").val());
   var questionDos = parseInt($("input[name=question2]:checked").val());
   var questionTres = parseInt($("input[name=question3]:checked").val());
   var range = politicalRange(questionUno, questionDos, questionTres);
   console.log([questionUno, questionDos, questionTres]);

  if (range > 3 && range < 6) {
    $("#fred").show();
  } else if (range > 7 && range < 11) {
    $("#fred").show();
  } else if (range > 12 && range < 18) {
    $("#nugent").show();
  }
});
});
