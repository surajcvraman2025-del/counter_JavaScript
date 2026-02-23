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

  let count = 0
let counterValue = document.getElementById("counter_value")

function incrementFun() {
    count++
    updateCounter()
}

function decreaseFun() {
    count--
    updateCounter()
}

function saveOut() {
    //console.log("Saved value: " + count)
    let Save = count
    let SaveElement = document.getElementById("Save_buttom")
    console.log(Save)
    SaveElement.innerText = `this is totel value ${count} `
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