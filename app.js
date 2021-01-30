
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
    300: "Omnivores",
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

const artA = {
    100: "Leonardo Da Vinci", 
    200: "Water Lily",
    300: "Edgar Degas",
    400: "Starry Night",
    500: "Renaissance"
}

//CITE: https://parade.com/1037122/alexandra-hurtado/pop-culture-trivia/
const popCultQ = {
    100: "Title of of Michelle Obama’s 2018 memoir", 
    200: "First non-English-language film to win Best Picture at the Oscars",
    300: "What day is Star Wars Day",
    400: "_______ Kramer",
    500: "Rihanna's real name"
}

//CITE: https://parade.com/1037122/alexandra-hurtado/pop-culture-trivia/
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

const codeA = {
    100: "MDN", 
    200: "HTML",
    300: "CSS",
    400: "For Loop",
    500: "Array"
}

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


//CITE: https://stackoverflow.com/questions/56569124/countdown-timer-in-vanilla-javascript-without-using-a-function
const timer = () => {
    const timeSpan = document.getElementById("timer")

    const mins = 2;
    const now = new Date().getTime();
    const deadline = mins * 60 * 1000 + now

    const interval = setInterval(() => {
        let currentTime = new Date().getTime()
        let distance = deadline - currentTime
        let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000*60))
        let seconds = Math.floor((distance % (1000 * 60))/1000)

        timeSpan.innerHTML = minutes + ":" + seconds
        document.getElementById("timer").onclick = null
        if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML) > 0)) { 
            alert("GAME OVER. You WIN!") 
            clearInterval(interval)
            timeSpan.innerHTML = ""
            window.location.reload() 
        } else if ((timeSpan.innerHTML < "0:0") && (parseFloat(document.getElementById("scoreDisplay").innerHTML)) <= 0) {
            alert("GAME OVER. You LOST!")
            clearInterval(interval)
            timeSpan.innerHTML = ""
            window.location.reload() 
        }
    }, 1)
}









