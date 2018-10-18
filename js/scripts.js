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


});
