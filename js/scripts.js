$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var firstNumber = parseInt($(number1).val());
    var secondNumber = parseInt($(number2).val());
    var i = secondNumber;


      for (var index = secondNumber; index <= firstNumber; index += secondNumber) {
        alert(index);
      }


  });
});
