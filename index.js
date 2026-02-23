// let A = 0;
// const counter_value = document.getElementById("counter_value")

// function Increment_fun() {
//    A = A + 1;
//    console.log(A);
//     //  document.getElementById("counter_value").innerText = A;
//     counter_value.innerText = A

    
// }
//  function decreas_fun() {
//   A = A - 1;
//   console.log(A);
//   // type of changing element first is thake direct 
//   // document.getElementById("counter_value").innerText = A;
//   counter_value.innerText = A //second create a var or const and put element in varable 
//  }
//   function Save_Out() {
//     console.log(A)


//   }
//   Save_Out();

  let count = 0 // make a counter 
let counterValue = document.getElementById("counter_value") // make a var and put element of html counter

function incrementFun() { // crate a function for incresss 
    count++
    updateCounter()
}

function decreaseFun() { // create a function for decreess 
    count--
    updateCounter()
}

function saveOut() {  //create a function for save 
    //console.log("Saved value: " + count)
    let Save = count;
    let SaveElement = document.getElementById("Save_buttom")
    console.log(Save)
    SaveElement.innerText = `this is totel value ${Save} `
   // Save = 3 not work . for revalue count 
  // count = 3 not work . for revalue count 
  count = 0 // this work becuse i update()
    updateCounter()
    
    
    }

function updateCounter() {
    counterValue.textContent = count

   // Add pop animation
     counterValue.classList.add("pop")

// Remove animation class after it finishes
     setTimeout(() => {
         counterValue.classList.remove("pop")
     }, 200)
 }