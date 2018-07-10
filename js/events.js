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

});
