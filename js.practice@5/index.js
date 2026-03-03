let First_card = 1; //first var 

let Second_card = 10; // second var


let Sum = First_card + Second_card; // plus both var == 19 

let Massage = ""; //create anothe var for greeting or masseges 
 
Massage = `do you wana draw a new card?`; // put massege to var 

let Black_Card = undefined;   // var for the blacj card 

let isAlive = undefined;  // var for the gamer status Alive 

const element_h2 = document.getElementById("Wel");







function Start_game () {

if (Sum <= 10 ) {         //if ---> Sum small to 10 or equals to 10 user isAlive status ----> false   / 19 <= 10 = false /
 isAlive = false; 
 element_h2.textContent = "you lose";
 console.log(isAlive)

}else if (Sum < 21) {     // else if --->  Sum small to 10 console.log __massage var                   /19 < 21 = ture / && console.log == massage 
  element_h2.textContent = Massage;
  console.log(Massage)
}else if(Sum === 21) {     // when sum quale to 21 console.log 'you win ' && black var == ture        /19 === 21 = false /
 Black_Card = true;
  element_h2.textContent = "you win";
console.log("you  win " );         
} else if( Sum > 21 ) {   // else if Sum greate than 21 gamer win && console.log == play next game !! ; / 19 > 21 = false / 
   element_h2.textContent = "play next game !!"
 Black_Card = true; 
  //element_h2.textContent = "you win";
console.log(Black_Card)    } 
//console.log(isAlive); }
}


// if (isAlive === false) {                   // this well we lear next chapter 
//   const element_h2 = document.getElementById("Wel");
//   element_h2.textContent = "you lose";
// }if else () { 
  
//   const element_h2 = document.getElementById("Wel");
//   element_h2.textContent = "welcome";
// }

 