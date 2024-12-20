let homeScore = 0
let awayScore = 0
let homeScr = document.getElementById("homeScr")
let awayScr = document.getElementById("awayScr")

function add1home() {
    
    homeScore += 1
    homeScr.innerHTML =homeScore
    
}
function add2home() {
    
    homeScore += 2
    homeScr.innerHTML =homeScore
    
}
function add3home() {
    
    homeScore += 3
    homeScr.innerHTML =homeScore
    
}
function sub1home() {
    
    homeScore -= 1
    homeScr.innerHTML =homeScore
    
}

function resetButtonhome() {
    
   homeScore = 0
homeScr.innerHTML =homeScore
   
}



function add1guest() {
    
    awayScore += 1
    awayScr.innerHTML =awayScore
    
}

function add2guest() {
    
    awayScore += 2
    awayScr.innerHTML =awayScore
    
}

function add3guest() {
    
    awayScore += 3
    awayScr.innerHTML =awayScore
    
}

function sub1guest() {
    
    awayScore -= 1
    awayScr.innerHTML =awayScore
    
}

function resetButtonguest() {
    
   awayScore = 0
awayScr.innerHTML =awayScore
   
}