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

 
