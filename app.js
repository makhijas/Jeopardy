//Array of dollar amounts
dollar = [100, 200, 300, 400, 500]

//Question and Answer objects
const musicQ = {
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


// const music = () => {
//     if(document.getElementById('button').clicked = true) {
//         points = (document.getElementById("button").innerHTML).split("$")
//         console.log(points)
//         let clue = prompt(musicQ[points[1]])

//         if(clue === musicA[100]) {
//             alert("Correct!")
//             scoreUp()
//         } else {
//             alert("Incorrect")
//             scoreDown()
//         }
//     }
// }

const music100 = () => {
    let clueMusic100 = prompt(musicQ[100]);
    if (clueMusic100 === musicA[100]){
        alert("Correct!")
        scoreUp()
    } else {
        alert("Incorrect!")
        scoreDown()
    }
}

// }
// const music200 = () => {
//     let xMusic200 = ""
//     let clueMusic200 = prompt(musicQ[200]);
//     if (clueMusic200 === musicA[200]){
//     xMusic200="Correct!";
//     alert(xMusic200);
//     } else {
//         x="Incorrect!";
//         alert(x);
//     }
// }


const scoreUp = () => {
        let currentScore = parseFloat(document.getElementById("scoreDisplay").innerHTML)
        buttonMoney = document.getElementById("button").innerHTML.split("$")
        currentScore = parseFloat(buttonMoney[1]) + currentScore
        document.getElementById("scoreDisplay").innerHTML = currentScore;
}

const scoreDown = () => {
    let currentScore = parseFloat(document.getElementById("scoreDisplay").innerHTML)
    buttonMoney = document.getElementById("button").innerHTML.split("$")
    currentScore = currentScore -  parseFloat(buttonMoney[1])
    document.getElementById("scoreDisplay").innerHTML = currentScore;
}