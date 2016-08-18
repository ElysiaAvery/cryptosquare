//BUSINESS LOGIC
var Code = function(sentence){
  sentence = sentence.toLowerCase();
  var  //create an for loop comparing the message to a regex of a-z 0-9, that would push truths into an empty array.
  return ;
}

//UI LOGIC
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#message").val();
    var result = Code(userInput);
    $("#output").text(result);
    event.preventDefault();
  });
});
