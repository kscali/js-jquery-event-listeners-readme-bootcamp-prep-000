//define functions here

$(document).ready(function(){

  function getIt() {
    $('p').on("click", function(){
      alert("Hey!");
    });
  }
  
  function frameIt() {
    $('img.tasty').on('load', function() {
      border : red;
    });
  }
  
  function pressIt() {
    $(document).on('keydown', function(key) {
      if (key.which == 71) {
        alert('G was pressed.');
      }
    });
   }
   
   function submitIt() {
     $("form").on("submit", function() {
       alert("Your form is going to be submitted now.");
     });
     }

