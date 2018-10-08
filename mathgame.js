var a = Math.floor((Math.random()*10)+1);
var b = Math.floor((Math.random()*12)+2);
//setting variables for game

console.log(a,b);


function mathGame(){
  var result = a*b;

  window.alert("Hello, I have a question for you. What is " +  a + " times " + b);

  var playeranswer = prompt("Please enter you answer");
  window.alert("You have entered " + playeranswer);

  if(result==playeranswer){
    window.alert("Good Job, that is the correct answer.");

  }
  else if(result!=playeranswer){
    window.alert("No, that is the incorrect answer");
  }

}


mathGame();
/*while(decision!=-1){

if (decision==-1){
  break;
}

var decision = mathGame();
window.alert(decision);
*/
