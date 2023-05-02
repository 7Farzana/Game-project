var Section1=[];
var Section2=[];
//create array for audio 
var audio = [new Audio("./My Voice Game/mixkit-extra-bonus-in-a-video-game-2045.wav"),
 new Audio("./My Voice Game/mixkit-game-flute-bonus-2313.wav"), 
 new Audio("./My Voice Game/mixkit-player-recharging-in-video-game-2041.wav"),
  new Audio("./My Voice Game/success-1-6297.mp3"),
   new Audio("./My Voice Game/mixkit-arcade-game-opener-222.wav")];
var start= 0; 
var levelstart=0;
$(document).on("keydown", function(f){
    if (f.keyCode === 13){
    funRandom();
    }
}
);
//create Random function
function funRandom() {
 var randomNumber = Math.floor(Math.random()*4);
 Section1.push(randomNumber); 
 correctSection(Section1[Section1.length - 1]);
 Exitsection();
 Section2=[];
};
//create correct function for start game
function correctSection(num) {
    //create switch case
    switch (num){
        case 0:
            audio[0].play();
              $("#green").addClass("dissapear");
              setTimeout(function(){
                  $("#green").removeClass("dissapear");
                }
                  ,100)
              break;
        case 1:
            audio[2].play();
            $("#red").addClass("dissapear");
              setTimeout(function () {
                  $("#red").removeClass("dissapear");
              }
              ,100)
            break;
        case 2:
            audio[3].play();
              $("#yellow").addClass("dissapear");
              setTimeout(function () {
                $("#yellow").removeClass("dissapear");
              }
              ,100)
            break;
        case 3:
            audio[1].play();
            $("#blue").addClass("dissapear");
              setTimeout(function () {
                  $("#blue").removeClass("dissapear");
              }
              ,100)
            break;
    }
 };
 //create a function for start again
function Exitsection() {
    start++;
    $("#title").text(`Level: ${start}`);  
};
$(".btn").click(function(e){
        var startclick= $(this).attr("id");
        //create another switch case
        switch(startclick){
            case "green":
            Section2.push(0);
            correctSection(0);
                break;
            case "red":
            Section2.push(1);
            correctSection(1);
                break;
            case "yellow":
            Section2.push(2);
            correctSection(2);
                break;
            case "blue":
            Section2.push(3);
            correctSection(3);
                break;
            }
        finalcheck(Section2.length-1);    
    });     
//create a function for check index number
function finalcheck(numIndex) { 
    if(Section2[numIndex] === Section1[numIndex]){
      if(Section1.length === Section2.length) {
           setTimeout(function () {
            funRandom();
           }, 1000);
        }
    } else {
    Error();
    }
}
//create a function for game over
function Error(){
$("body").css("background-color", "red")
    setTimeout(function () {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").css("background-color", "rgb(27, 27, 112)");
    }
    ,200)
audio[4].play();
start=0;
Section1 = [];
}