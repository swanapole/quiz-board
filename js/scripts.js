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


function run(){

  var question1=parseInt('input[name="question1"]:checked').value;
  var question2=parseInt('input[name="question2"]:checked').value;
  var question3=parseInt('input[name="question3"]:checked').value;
  var question4=parseInt('input[name="question4"]:checked').value;
  var correct=0;

  if(question1 === "Function"){
    correct+=25;
  }
  if(question2 === "JAVASCRIPT"){
    correct+=25;
  }
  if(question3 === "1995"){
    correct+=25;
  }
  if(question4 === "frog"!=="lizard"){
    correct+=25;
  }
  alert(correct);


   if(correct <= 25){
     var messages="You can do better";
      document.getElementById("#show").innerHTML=message
   }
   if(correct > 25 && correct < 75){
     var messages="average work";
     document.getElementById("#show").innerHTML=message

   }
   if(correct > 50 && correct < 100){
     var messages="good job";
    document.getElementById("#show").innerHTML=message
   }
   if(correct > 75 && correct < 110){
     var messages="Amazing job";
    document.getElementById("#show").innerHTML=message
   }

   $("#show").text(correct);
   $("#button").click(function () {
     $(".quiz1").hide();
     $(".cover").show();
   }
   )

  $("#number_correct").text(correct);
  // document.getElementById("#number_correct").innerHTML="you got" + correct +"correct."

}
