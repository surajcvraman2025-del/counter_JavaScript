let A = 0;
const counter_value = document.getElementById("counter_value")

function Increment_fun() {
   A = A + 1;
   console.log(A);
    //  document.getElementById("counter_value").innerText = A;
    counter_value.innerText = A

    
}
 function decreas_fun() {
  A = A - 1;
  console.log(A);
  // type of changing element first is thake direct 
  // document.getElementById("counter_value").innerText = A;
  counter_value.innerText = A //second create a var or const and put element in varable 
 }saa