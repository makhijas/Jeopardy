// let button = document.getElementsByClassName("button")

// button.addEventListener ("click", function() {
//     alert("did something");
//   });
  
// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
// });

var buttonEl = document.getElementsByClassName('button');
if(buttonEl){
  buttonEl.addEventListener('click', alert("hi"));
}