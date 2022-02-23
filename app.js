function generateWinningNum(){
    const winningNums = []
    for(let i=0; i<6; i++){
        winningNums.push(Math.floor(Math.random()*100)+1)
    }
    return winningNums
}


function generateHtml(){
    return generateWinningNum().map(num => `<div class="number">${num}</div>`).join("")
}


document.getElementById("winning-numbers").innerHTML = generateHtml()