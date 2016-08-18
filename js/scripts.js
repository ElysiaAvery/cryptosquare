//BUSINESS LOGIC
var gridSystem = function(sentence){
  var noPunctuation=[];
  var punctuations = /[abcdefghijklmnopqrstuvwxyz0123456789]+/;
  sentence = sentence.toLowerCase();
  for (var i=0; i<sentence.length; i++){
    if (punctuations.test(sentence[i])){
      noPunctuation.push(sentence[i]);
    }
  }
  return noPunctuation;
}
function CodeNoSpace(noPunctuation){
  var columnCount = parseInt(Math.sqrt(noPunctuation.length));
  var encryptedSentence = "";
  for (var n=0; n<columnCount; n++){
    for (var i = 0; i < noPunctuation.length; i+=columnCount){
      if (noPunctuation[i+n])
        encryptedSentence = encryptedSentence + noPunctuation[i+n];
    }
  }
  return encryptedSentence;
}
function CodeWithSpace(sentence) {
  var codex=[];
  var chunkCount = Math.ceil(sentence.length/5);
  for(var t=1; t <= chunkCount; t++){
    if (t < chunkCount) {
      codex.push(sentence.slice((t*5 - 5), t*5));
    }
    else {
      codex.push(sentence.slice(t*5 - 5));
    }
  }
  sentence = codex.join(" ");
  return sentence;
}

//UI LOGIC
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#message").val();
    var gridSentence = gridSystem(userInput);
    var resultNoSpace = CodeNoSpace(gridSentence);
    var resultWithSpace = CodeWithSpace(resultNoSpace);
    $("#output").text(resultWithSpace);
    var columnCount = parseInt(Math.sqrt(resultNoSpace.length));
    var rowCount = Math.ceil(resultNoSpace.length/columnCount);
    for (var i = 0; i < rowCount; i++) {
      $("table").append("<tr id='" + i + "'></tr>");
    }
    for (var i = 0; i < columnCount; i++) {
      $("tr").append("<td></td>");
    }
    var counter = -1;
    for (var i = 0; i < rowCount; i++) {
      for (var k = 1; k <= columnCount; k++) {
        counter++;
        $("tr#" + i + " :nth-child(" + k + ")").append(gridSentence[counter]);
      }
    }
    event.preventDefault();
  });
});
