var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;


$("body").keypress(function(){
  nextSequence();

});

function handler(event){

  var userChosenColour =event.target.id;
    soundeffect(userChosenColour);
  userClickedPattern.push( userChosenColour);
  console.log( userClickedPattern);

  $(event.target).addClass("pressed");
  setTimeout(function(){
      $(event.target).removeClass("pressed");
  },100);

   checkAnswer(userClickedPattern.length-1);


}


function nextSequence(){
   userClickedPattern=[];
  var item = buttonColours[Math.floor(Math.random()*4)];
  console.log(item);
  gamePattern.push(item);
  console.log(gamePattern);
  $("#"+item).fadeOut(75).fadeIn(75);
  soundeffect(item);
    $("#level-title").text("level:"+level);
      level++;
}

$(".btn").on("click",handler);



function soundeffect(item){
  var audio = new Audio("./"+item+".mp3");
  audio.play();
  // switch (item) {
  //   case "red":
  //         var audio = new Audio('./sounds/red.mp3');
  //         audio.play();
  //         break;
  //   case "green":
  //         var audio = new Audio('./sounds/green.mp3');
  //         audio.play();
  //         break;
  //
  //   case "blue":
  //         var audio = new Audio('./sounds/blue.mp3');
  //         audio.play();
  //         break;
  //
  //
  //     case "yellow":
  //         var audio = new Audio('./sounds/yellow.mp3');
  //         audio.play();
  //         break;
  //   default:  var audio = new Audio('./sounds/wrong.mp3');
  //     audio.play();

  // }
}
function checkAnswer( currentLevel){

    // console.log(currentLevel.type);
  console.log( "usercolor "+gamePattern[currentLevel]);



   if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

     console.log(gamePattern[currentLevel]+" correct");
     if(gamePattern.length===userClickedPattern.length){
       setTimeout(function(){
         nextSequence();

      },1000);
     }
   }else{
      console.log(userClickedPattern[currentLevel]+" wrong");
      var audio =new Audio("./sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(function(){
          $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
   }



}
function startOver(){
  level=0;
  gamePattern=[];
}
