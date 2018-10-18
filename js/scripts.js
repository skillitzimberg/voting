$(document).ready(function() {
 // var age = parseInt(prompt("What is your age?"));
 //
 // if (age > 18) {
 //   $("#eligible").show();
 // } else if (age === 18){
 //   $("#congrats").show();
 // } else {
 //   $("#ineligible").show();
 // }
$("form").submit(function(event) {

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
