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
    100: "Beethoven, Vivaldi, Tchaikovsky and Mozart are from this era", 
    200: "Q2",
    300: "Q3",
    400: "Q4",
    500: "Q5"
}

const musicA = {
    100: "Classical", 
    200: "Q2",
    300: "Q3",
    400: "Q4",
    500: "Q5"
}
const music100 = () => {
    let xMusic100 = ""
    let clueMusic100 = prompt(music[100]);
    if (clueMusic100 === musicA[100]){
        xMusic100="Correct!"
        alert(xMusic100)
    } else {
        x="Incorrect!";
        alert(x);
    }
}

const music200 = () => {
    let xMusic200 = ""
    let clueMusic200 = prompt(music[200]);
    if (clueMusic200 === musicA[200]){
    xMusic200="Correct!";
    alert(xMusic200);
    } else {
        x="Incorrect!";
        alert(x);
    }
}
//     let clue=prompt(music[300]);
//     if (clue = "musicA[300]"){
//     x="Correct!";
//     alert(x);
//     } else {
//         x="Incorrect!";
//         alert(x);
//     }

//     let clue=prompt(music[400]);
//     if (clue = "musicA[400]"){
//     x="Correct!";
//     alert(x);
//     } else {
//         x="Incorrect!";
//         alert(x);
//     }
    
//     let clue=prompt(music[500]);
//     if (clue = "musicA[500]"){
//     x="Correct!";
//     alert(x);
//     } else {
//         x="Incorrect!";
//         alert(x);
//     }
// }
    //}
//}
