//BUSINESS LOGIC
var Code = function(sentence){
  var noPunctuation=[];
  var punctuations = /[abcdefghijklmnopqrstuvwxyz0123456789]+/;
  sentence = sentence.toLowerCase();
  for (var i=0; i<sentence.length; i++){
    if (punctuations.test(sentence[i])){
      noPunctuation.push(sentence[i]);
    }
  }
  var columnCount = parseInt(Math.sqrt(noPunctuation.length));
  var encryptedSentence = "";
  for (var n=0; n<columnCount; n++){
    for (var i = 0; i < noPunctuation.length; i+=columnCount){
      if (noPunctuation[i+n])
        encryptedSentence = encryptedSentence + noPunctuation[i+n];
    }
  }
  var codex=[];
  var chunkCount = Math.ceil(encryptedSentence.length/5);
  for(var t=1; t <= chunkCount; t++){
    if (t < chunkCount) {
      codex.push(encryptedSentence.slice((t*5 - 5), t*5));
    }
    else {
      codex.push(encryptedSentence.slice(t*5 - 5));
    }
  }
  encryptedSentence = codex.join(" ");
  return encryptedSentence;
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
