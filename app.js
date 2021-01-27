// let button = document.getElementsByClassName("button")

// button.addEventListener ("click", function() {
//     alert("did something");
//   });
  
// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
// });

// const buttonEl = document.getElementsByClassName("button");
// if(buttonEl){
//   document.getElementsByClassName("button").addEventListener("click", alert("hi"));
// }

// let button = document.getElementById("button")
// const music100 = () => {
//     alert("hi");
//   }

const music = {
    100: "Q1", 
    200: "Q2",
    300: "Q3",
    400: "Q4",
    500: "Q5"
}
const musicQs = () => {
    let x = ""
    let clue=prompt("Beethoven, Vivaldi, Tchaikovsky and Mozart are from this era");
    if (clue=== "Classical"){
       x="Correct!";
      alert(x);
   } else {
       x="Incorrect!";
       alert(x);
}
}
