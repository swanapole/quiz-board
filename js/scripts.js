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

 $(document).ready(function(){
   $("#click1").on("click", function(){
     $(".quiz1").toggle();
   });
 });

 $(document).ready(function(){
   $("#click2").on("click", function(){
     $(".quiz2").toggle();
   });
 });

 $(document).ready(function(){
   $("#click3").on("click", function(){
     $(".quiz3").toggle();
   });
 });

 $(document).ready(function(){
   $("#click4").on("click", function(){
     $(".quiz4").toggle();
   });
 });
function run(){

  var question1=document.quiz.question1.value;
  var question1=document.quiz.question2.value;
  var question1=document.quiz.question3.value;
  var question1=document.quiz.question4.value;
  var question1=document.quiz.question5.value;
  var correct=0;

  v
}
