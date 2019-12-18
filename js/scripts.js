$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var firstNumber = parseInt($(number1).val());
    var secondNumber = parseInt($(number2).val());
    var i = 0;


      for (var index = 0; index <= firstNumber; index += secondNumber) {
        alert(index);
      }


  });
});
