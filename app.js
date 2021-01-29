
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

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/science-trivia-questions/
const scienceQ = {
    100: "This is the nearest planet to the sun?", 
    200: "This is the largest known land animal?",
    300: "Animals that eat both plants and meat",
    400: "Process that plants use to convert CO2 to O2 using sunlight and water",
    500: "First woman to win the Nobel Prize - TWICE!"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/science-trivia-questions/
const scienceA = {
    100: "Mercury", 
    200: "Elephant",
    300: "Omnivore",
    400: "Photosynthesis",
    500: "Marie Curie"
}

//CITE: 
const artQ = {
    100: "This famous painter was also a sculptor, an architect, and an engineer", 
    200: "Claude Monet is most known for his paintings of this flower",
    300: "This artist is well known for his paintings of ballerinas",
    400: "Peering through his window of his asylum room at Saint-Rémy-de-Provence inspired this famous painting",
    500: "This period has a French name that translates to “rebirth” in English"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const artA = {
    100: "Leonardo Da Vinci", 
    200: "Water Lily",
    300: "Edgar Degas",
    400: "Starry Night",
    500: "Renaissance"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const popCultQ = {
    100: "Title of of Michelle Obama’s 2018 memoir", 
    200: "First non-English-language film to win Best Picture at the Oscars",
    300: "What day is Star Wars Day",
    400: "_______ Kramer",
    500: "Rihanna's real name"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const popCultA = {
    100: "Becoming", 
    200: "Parasite",
    300: "May 4",
    400: "Cosmo",
    500: "Robyn Fenty"
}

const codeQ = {
    100: "James' favourite resource", 
    200: "Language that uses elements, tags, classes and ids",
    300: "Styling laguage",
    400: "Use this to repeat a block of code",
    500: "This object uses square brackets[] to hold it's items"
}

//CITE: https://thoughtcatalog.com/samantha-newman/2020/04/music-trivia-questions/
const codeA = {
    100: "MDN", 
    200: "HTML",
    300: "CSS",
    400: "For Loop",
    500: "Array"
}
//the following gives an array of all buttons
//buttons = document.querySelectorAll("button")

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
    let clue = prompt(scienceQ[points[1]])
    e.disabled = true
    if(clue === scienceA[points[1]]) {
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
    let clue = prompt(artQ[points[1]])
    e.disabled = true
    if(clue === artA[points[1]]) {
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
    let clue = prompt(popCultQ[points[1]])
    e.disabled = true
    if(clue === popCultA[points[1]]) {
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
    let clue = prompt(codeQ[points[1]])
    e.disabled = true
    if(clue === codeA[points[1]]) {
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

// const gameEnd = () => {
//     let currentScore = parseFloat(document.getElementById("scoreDisplay").innerHTML)
//     if (currentScore === 1000) { 
//         return alert("GameOver. You WIN!")
//     } else if (currentScore < 0) { 
//         return alert("GameOver. You LOST!")
//     }
// }

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

//CITE: https://stackoverflow.com/questions/56569124/countdown-timer-in-vanilla-javascript-without-using-a-function


const timer = () => {
    const timeSpan = document.getElementById("timer")

    const mins = .1;
    const now = new Date().getTime();
    const deadline = mins * 60 * 1000 + now

    const interval = setInterval(() => {
        let currentTime = new Date().getTime()
        let distance = deadline - currentTime
        let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60))
        let seconds = Math.floor((distance % (1000 * 60))/1000)

        timeSpan.innerHTML = minutes + ":" + seconds
        
        if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML) > 0)) { 
            alert("GAME OVER. You WON!") 
            clearInterval(interval)
            timeSpan.innerHTML = ""
        } else if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML)) <= 0) {
            alert("GAME OVER. You LOST!")
            clearInterval(interval)
            timeSpan.innerHTML = ""
        }
    }, 10)
}

// const clearTime = (e) => {
//     clearInterval(timer())
// }







