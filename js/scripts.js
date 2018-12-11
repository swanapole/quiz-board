var i = 0;
var txt = 'Javascript quiz board .';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var inputedAnswers = [],
    scoredPoints = 0;
    questions = ["ans-1", "ans-2", "ans-3", "ans-4"];

function pointsCompiler(){
  scoredPoints = inputedAnswers[0] + inputedAnswers[1] + inputedAnswers[2] + inputedAnswers[3];
  return points;
}

$(document).ready(function(){
  $(".question").hide();
  $("#q-1").show();

  $("#btn-1").click(function(){
    if(isNaN($("input:radio[name = ans-1]:checked").val())){
      alert("Please answer question 1 to proceed!");
      $(".question").hide();
      $("#q-1").show();
      return false;
    





 
