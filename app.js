
//Question and Answer objects
//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const musicQ = {
    100: "Beethoven, Vivaldi, Tchaikovsky and Mozart are from this era", 
    200: "This broadway musical first came to Seattle in 2018",
    300: "Kanye West's hometown",
    400: "This Pink Floyd album features a prism on the cover",
    500: "This famous music group was formerly known as the New Yardbirds"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const musicA = {
    100: "Classical", 
    200: "Hamilton",
    300: "Chicago",
    400: "Dark Side Of The Moon",
    500: "Led Zepplin"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const scienceQ = {
    100: "This is the nearest planet to the sun?", 
    200: "This is the largest known land animal?",
    300: "Animals that eat both plants and meat",
    400: "Process that plants use to convert CO2 to O2 using sunlight and water",
    500: "First woman to win the Nobel Prize - TWICE!"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const scienceA = {
    100: "Mercury", 
    200: "Elephant",
    300: "Omnivore",
    400: "Photosynthesis",
    500: "Marie Curie"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const artQ = {
    100: "Beethoven, Vivaldi, Tchaikovsky and Mozart are from this era", 
    200: "This broadway musical first came to Seattle in 2018",
    300: "Kanye West's hometown",
    400: "This Pink Floyd album features a prism on the cover",
    500: "This famous music group was formerly known as the New Yardbirds"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const artA = {
    100: "Classical", 
    200: "Hamilton",
    300: "Chicago",
    400: "Dark Side Of The Moon",
    500: "Led Zepplin"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const popCultQ = {
    100: "Beethoven, Vivaldi, Tchaikovsky and Mozart are from this era", 
    200: "This broadway musical first came to Seattle in 2018",
    300: "Kanye West's hometown",
    400: "This Pink Floyd album features a prism on the cover",
    500: "This famous music group was formerly known as the New Yardbirds"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const popCultA = {
    100: "Classical", 
    200: "Hamilton",
    300: "Chicago",
    400: "Dark Side Of The Moon",
    500: "Led Zepplin"
}
//the following gives an array of all buttons
buttons = document.querySelectorAll("button")

//Add event listeners to above array here by looping through and accessing EACH element
// for (let i =0; i>buttons.length; i ++) {
//     buttons[i].addEventListener("click", button[i].disabled())
//}
//was missing e as parameter


const music = (e) => {
        points = e.innerHTML.split("$")
        console.log(points)
        let clue = prompt(musicQ[points[1]])
        e.disabled = true
        if(clue === musicA[points[1]]) {
            alert("Correct!")
            scoreUp(points)
        } else {
            alert("Incorrect")
            scoreDown(points)
        }
}

const science = (e) => {
    points = e.innerHTML.split("$")
    console.log(points)
    let clue = prompt(musicQ[points[1]])
    e.disabled = true
    if(clue === musicA[points[1]]) {
        alert("Correct!")
        scoreUp(points)
    } else {
        alert("Incorrect")
        scoreDown(points)
    }
}

const art = (e) => {
    points = e.innerHTML.split("$")
    console.log(points)
    let clue = prompt(musicQ[points[1]])
    e.disabled = true
    if(clue === musicA[points[1]]) {
        alert("Correct!")
        scoreUp(points)
    } else {
        alert("Incorrect")
        scoreDown(points)
    }
}

const popCult = (e) => {
    points = e.innerHTML.split("$")
    console.log(points)
    let clue = prompt(musicQ[points[1]])
    e.disabled = true
    if(clue === musicA[points[1]]) {
        alert("Correct!")
        scoreUp(points)
    } else {
        alert("Incorrect")
        scoreDown(points)
    }
}

const code = (e) => {
    points = e.innerHTML.split("$")
    console.log(points)
    let clue = prompt(musicQ[points[1]])
    e.disabled = true
    if(clue === musicA[points[1]]) {
        alert("Correct!")
        scoreUp(points)
    } else {
        alert("Incorrect")
        scoreDown(points)
    }
}

// const music100 = () => {
//     let clueMusic100 = prompt(musicQ[100]);
//     if (clueMusic100 === musicA[100]){
//         alert("Correct!")
//         scoreUp()
//     } else {
//         alert("Incorrect!")
//         scoreDown()
//     }
// }

// const music200 = () => {
//     let clueMusic200 = prompt(musicQ[200]);
//     if (clueMusic200 === musicA[200]){
//         alert("Correct!")
//         scoreUp()
//         //CITE: https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
//         document.getElementById("button").disabled = true;
//     } else {
//         alert("Incorrect!")
//         scoreDown()
//         document.getElementById("button").disabled = true;
//     }
// }


const scoreUp = (points) => {
    let currentScore = parseFloat(document.getElementById("scoreDisplay").innerHTML)
    console.log(currentScore)
    currentScore = currentScore + parseFloat(points[1]) 
    document.getElementById("scoreDisplay").innerHTML = currentScore;
}

const scoreDown = (points) => {
    let currentScore = parseFloat(document.getElementById("scoreDisplay").innerHTML)
    console.log(currentScore)
    currentScore = currentScore - (parseFloat(points[1]))
    document.getElementById("scoreDisplay").innerHTML = currentScore;
}

// if (parseFloat(document.getElementById("scoreDisplay").innerHTML) === 7500) {
//     alert("You WON!" )
// } else { 
//     alert("You WON!")
// }
// const timer = () => {
//     timerEl = getElementById("timer").innerHTML
//     var countdown = setInterval(function() { seconds--; document. getElementById("countdown"). textContent = seconds; if (seconds <= 0) clearInterval(countdown); }, 1000); // Update the count down every 1 second var x = setInterval(function() { // Get today's date and time var now = new Date().getTime(); // Find the distance between now and the count down date var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// }

// timerDisplay = document.querySelector("timer").innerHTML

// const endGame = () =? {
//     timerDisplay = setInterval(flashText, 1000);
//   }

// const gameEnd = () => {
//     var oElem = document.getElementById('my_box');
//     if(oElem.style.color === 'red') {
//       oElem.style.color = 'blue'
//     } else {
//       oElem.style.color = 'red'
//     }
//   }


const timeSpan = document.getElementById("timer")

const mins = .1;
const now = new Date().getTime();
const deadline = mins * 60 * 1000 + now

setInterval(() => {
    let currentTime = new Date().getTime()
    let distance = deadline - currentTime
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60))
    let seconds = Math.floor((distance % (1000 * 60))/1000)

    timeSpan.innerHTML = minutes + ":" + seconds
    
    if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML) > 0)) { 
        alert("GAME OVER. You WON!")
        timeSpan.innerHTML = "" 
    } else if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML)) <= 0) {
        alert("GAME OVER. You LOST!")
        timeSpan.innerHTML = ""
    }
}, 10)







