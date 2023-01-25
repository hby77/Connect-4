//make a function that will make the html/css appear visible after the win condition is met aka (Player 1 Wins!)
//make a function that will make the html/css appear visible affter the win condition is met aka (Player 2 Wins!)
//make a function that will make the html/css appear after there are no possible positions for the pieces to be put aka (Draw!) 
//make a function that will make the css appear after the Draw textbox is shown, stating (Play Again?)
//make a function that will reset the game after pressing yes to Play Again? or pressing the reset button
//create a reset button that resets the game
//make a way that will have a textbox that states whose turn it is aka (Player 1's Turn)
//make a way that will have a textbox that states whose turn it is aka (Player 2's Turn)
//make a win condition for Player 1
//make a win condition for Player 2
//make a draw condition if there are no more applicable pieces
//make it so you cant place pieces after game is finished
const circles = document.querySelectorAll(".circle")
let currentPlayer = "porored"
let redWins = false
let whiteWins = false
const redMoves = []
const whiteMoves = []
const checkWin = () => {
    if (redMoves.length > 3) {
        winCondition.forEach((combo) => {
            function checkCombo(playerMoves, winCombo) {
                return winCombo.every(number => {
                    return playerMoves.includes(number)
                })
            }
            redWins = checkCombo(redMoves, combo)
            whiteWins = checkCombo(whiteMoves, combo)
            console.log(redWins, whiteWins)
        })
    }
}

const placeCircle = (e) => {
    if (e.target.classList.length === 1) {
        if (currentPlayer === "porored") {
            e.target.classList.add("porored")
            redMoves.push(parseInt(e.target.innerText))
            checkWin()
            currentPlayer = "porowhite"
        } else if (currentPlayer === "porowhite") {
            e.target.classList.add("porowhite")
            whiteMoves.push(parseInt(e.target.innerText))
            checkWin()
            currentPlayer = "porored"
        }
    }
}


const circleClick = (e) => {
    const turnToNumber = parseInt(e.target.id)
    const bottomCircle = parseInt(e.target.id) + 7
    if (turnToNumber >= 35 || circles[bottomCircle].classList.length > 1) {
        placeCircle(e)
    }
}

circles.forEach(circle => {
    circle.innerText = circle.id
    circle.addEventListener("click", circleClick)
})

// const restartButton = () => {
//     for()
//     for loop all the divs
//     look into .remove and .set methods

// }




// circles.forEach(circle => {

// })




// when function restart button is pressed, wipe the board once (maybe with null?) and make currentplayer = "porored"













const winCondition = [
    //horizontal
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    //vertical
    [35, 28, 21, 14],
    [28, 21, 14, 7],
    [21, 14, 7, 0],
    [36, 29, 22, 15],
    [29, 22, 15, 8],
    [22, 15, 8, 1],
    [37, 30, 23, 16],
    [30, 23, 16, 9],
    [23, 16, 9, 2],
    [38, 31, 24, 17],
    [31, 24, 17, 10],
    [24, 17, 10, 3],
    [39, 32, 25, 18],
    [32, 25, 18, 11],
    [25, 18, 11, 4],
    [40, 33, 26, 19],
    [33, 26, 19, 12],
    [26, 19, 12, 5],
    [41, 34, 27, 20],
    [34, 27, 20, 13],
    [27, 20, 13, 6],
    //bottom right to top left diagnol
    [38, 30, 22, 14],
    [39, 31, 23, 15],
    [31, 23, 15, 7],
    [40, 32, 24, 16],
    [32, 24, 16, 8],
    [24, 16, 8, 0],
    [41, 33, 25, 17],
    [33, 25, 17, 9],
    [25, 17, 9, 1],
    [34, 26, 18, 10],
    [26, 18, 10, 2],
    [27, 19, 11, 3],
    //bottom left to top right diagnol
    [38, 32, 26, 20],
    [37, 31, 25, 19],
    [31, 25, 19, 13],
    [36, 30, 24, 18],
    [30, 24, 18, 12],
    [24, 28, 12, 6],
    [35, 29, 23, 17],
    [29, 23, 17, 11],
    [23, 17, 11, 5],
    [28, 22, 16, 10],
    [22, 16, 10, 4],
    [21, 15, 9, 3],
]
